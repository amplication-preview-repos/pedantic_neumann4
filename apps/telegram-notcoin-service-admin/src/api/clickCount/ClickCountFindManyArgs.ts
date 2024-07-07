import { ClickCountWhereInput } from "./ClickCountWhereInput";
import { ClickCountOrderByInput } from "./ClickCountOrderByInput";

export type ClickCountFindManyArgs = {
  where?: ClickCountWhereInput;
  orderBy?: Array<ClickCountOrderByInput>;
  skip?: number;
  take?: number;
};
