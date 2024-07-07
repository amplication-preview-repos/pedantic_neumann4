import { BatteryCountWhereInput } from "./BatteryCountWhereInput";
import { BatteryCountOrderByInput } from "./BatteryCountOrderByInput";

export type BatteryCountFindManyArgs = {
  where?: BatteryCountWhereInput;
  orderBy?: Array<BatteryCountOrderByInput>;
  skip?: number;
  take?: number;
};
