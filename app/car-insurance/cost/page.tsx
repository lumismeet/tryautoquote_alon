import HubPage, { hubMetadata } from "@/components/hubs/HubPage";

export const metadata = hubMetadata("cost");

export default function Page() {
  return <HubPage slug="cost" />;
}
