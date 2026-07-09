import fs from "fs";
import path from "path";
import matter from "gray-matter";

// CHANGE ME if your content lives elsewhere
const BLOGS_DIR = path.join(process.cwd(), "content/blogs");

// Matches the fields your old hardcoded array used.
// Add/remove fields here if your frontmatter differs.
export type BlogFrontmatter = {
  title: string;
  tag: string;
  description: string;
  date: string;
  readTime: string;
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  href: string; // convenience field for <Link>, e.g. "/blogs/uninsured-motorist-coverage"
  content: string; // raw MDX body, pass to next-mdx-remote's compileMDX/serialize
};

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOGS_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const fullPath = path.join(BLOGS_DIR, filename);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);

    return {
      slug,
      href: `/blogs/${slug}`,
      content,
      ...(data as BlogFrontmatter),
    };
  });

  // Sorts newest first. Assumes `date` is a string Date.parse() can read
  // (e.g. "July 8, 2026"). If you use a different date format, adjust here.
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(BLOGS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    href: `/blogs/${slug}`,
    content,
    ...(data as BlogFrontmatter),
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(BLOGS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

// Extracts "## Heading" lines from raw MDX and slugifies them the same way
// rehype-slug does, so these IDs match the actual rendered <h2 id="..."> tags.
export type Heading = { id: string; text: string };

export function getHeadings(content: string): Heading[] {
  const matches = [...content.matchAll(/^##\s+(.+)$/gm)];
  const seen = new Map<string, number>();

  return matches.map((m) => {
    const text = m[1].trim();
    let id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

    // handles duplicate heading text the same way github-slugger does (-1, -2, ...)
    const count = seen.get(id) ?? 0;
    seen.set(id, count + 1);
    if (count > 0) id = `${id}-${count}`;

    return { id, text };
  });
}