import { Config } from "@prisma/client";
import Typography from "../typography";

export type ConfigSingleProps = {
  config: Config;
};

export default function ConfigSingle({ config }: ConfigSingleProps) {
  return (
    <>
      <Typography variant="p">Beds number: {config.bedsNumber}</Typography>
      <Typography variant="p">
        Patients number: {config.patientNumber}
      </Typography>
      <Typography variant="p">
        Maximum Hours Working: {config.maxHours}
      </Typography>
    </>
  );
}
