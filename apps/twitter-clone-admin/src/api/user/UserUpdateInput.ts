import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";
import { ProfileUpdateManyWithoutUsersInput } from "./ProfileUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  password?: string | null;
  posts?: PostUpdateManyWithoutUsersInput;
  profiles?: ProfileUpdateManyWithoutUsersInput;
  username?: string | null;
};
