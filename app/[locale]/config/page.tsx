import ConfigSingle from "@/components/single/Config";
import { getConfig, getFirstConfig } from "@/lib/db/services/config";
import { notFound } from "next/navigation";

export default async function ConfigPage() {
  const config = await getFirstConfig();
  if (config == null) notFound();
  return <ConfigSingle config={config} />;
}
