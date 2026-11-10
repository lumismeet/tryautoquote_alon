import HubPage, { hubMetadata } from "@/components/hubs/HubPage";

export const metadata = hubMetadata("buying");

export default function Page() {
  return <HubPage slug="buying" />;
}
