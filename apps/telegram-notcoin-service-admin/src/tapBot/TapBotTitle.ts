import { TapBot as TTapBot } from "../api/tapBot/TapBot";

export const TAPBOT_TITLE_FIELD = "id";

export const TapBotTitle = (record: TTapBot): string => {
  return record.id?.toString() || String(record.id);
};
