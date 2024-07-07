import { BatteryCount as TBatteryCount } from "../api/batteryCount/BatteryCount";

export const BATTERYCOUNT_TITLE_FIELD = "id";

export const BatteryCountTitle = (record: TBatteryCount): string => {
  return record.id?.toString() || String(record.id);
};
