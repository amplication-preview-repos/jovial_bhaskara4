import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type HashtagWhereInput = {
  id?: StringFilter;
  tag?: StringNullableFilter;
};
