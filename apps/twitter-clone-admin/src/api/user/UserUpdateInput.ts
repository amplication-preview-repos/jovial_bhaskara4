import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  password?: string | null;
  posts?: PostUpdateManyWithoutUsersInput;
  username?: string | null;
};
