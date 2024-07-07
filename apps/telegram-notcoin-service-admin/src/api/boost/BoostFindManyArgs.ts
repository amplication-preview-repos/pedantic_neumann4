import { BoostWhereInput } from "./BoostWhereInput";
import { BoostOrderByInput } from "./BoostOrderByInput";

export type BoostFindManyArgs = {
  where?: BoostWhereInput;
  orderBy?: Array<BoostOrderByInput>;
  skip?: number;
  take?: number;
};
