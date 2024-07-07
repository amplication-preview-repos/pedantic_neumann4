import { TapBotWhereInput } from "./TapBotWhereInput";
import { TapBotOrderByInput } from "./TapBotOrderByInput";

export type TapBotFindManyArgs = {
  where?: TapBotWhereInput;
  orderBy?: Array<TapBotOrderByInput>;
  skip?: number;
  take?: number;
};
