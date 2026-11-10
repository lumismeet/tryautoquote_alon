import HubPage, { hubMetadata } from "@/components/hubs/HubPage";

export const metadata = hubMetadata("claims");

export default function Page() {
  return <HubPage slug="claims" />;
}
