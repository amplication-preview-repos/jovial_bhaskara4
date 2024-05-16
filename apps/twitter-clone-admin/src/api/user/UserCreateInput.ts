import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  password?: string | null;
  posts?: PostCreateNestedManyWithoutUsersInput;
  username?: string | null;
};
