import { SortOrder } from "../../util/SortOrder";

export type SubTaskOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};
