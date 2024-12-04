import { Hashtag as THashtag } from "../api/hashtag/Hashtag";

export const HASHTAG_TITLE_FIELD = "tag";

export const HashtagTitle = (record: THashtag): string => {
  return record.tag?.toString() || String(record.id);
};
