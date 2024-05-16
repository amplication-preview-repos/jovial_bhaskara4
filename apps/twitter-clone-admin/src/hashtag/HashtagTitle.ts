import { Hashtag as THashtag } from "../api/hashtag/Hashtag";

export const HASHTAG_TITLE_FIELD = "id";

export const HashtagTitle = (record: THashtag): string => {
  return record.id?.toString() || String(record.id);
};
