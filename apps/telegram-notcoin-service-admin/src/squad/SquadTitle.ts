import { Squad as TSquad } from "../api/squad/Squad";

export const SQUAD_TITLE_FIELD = "id";

export const SquadTitle = (record: TSquad): string => {
  return record.id?.toString() || String(record.id);
};
