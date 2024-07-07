import { SquadWhereInput } from "./SquadWhereInput";
import { SquadOrderByInput } from "./SquadOrderByInput";

export type SquadFindManyArgs = {
  where?: SquadWhereInput;
  orderBy?: Array<SquadOrderByInput>;
  skip?: number;
  take?: number;
};
