import { ClickCount as TClickCount } from "../api/clickCount/ClickCount";

export const CLICKCOUNT_TITLE_FIELD = "id";

export const ClickCountTitle = (record: TClickCount): string => {
  return record.id?.toString() || String(record.id);
};
