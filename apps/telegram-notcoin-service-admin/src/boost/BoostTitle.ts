import { Boost as TBoost } from "../api/boost/Boost";

export const BOOST_TITLE_FIELD = "id";

export const BoostTitle = (record: TBoost): string => {
  return record.id?.toString() || String(record.id);
};
