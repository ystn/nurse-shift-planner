import ShiftSingle from "@/components/single/Shift";
import { getShift } from "@/lib/db/services/shift";
import { notFound } from "next/navigation";

export type ShiftSinglePageProps = {
  params: {
    id: string;
  };
};

async function ShiftSinglePage({ params }: ShiftSinglePageProps) {
  const shift = await getShift({ id: Number(params.id) });
  if (shift === null) notFound();
  return <ShiftSingle shift={shift} />;
}

export default ShiftSinglePage;
