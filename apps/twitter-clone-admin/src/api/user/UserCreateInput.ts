import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";
import { ProfileCreateNestedManyWithoutUsersInput } from "./ProfileCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  password?: string | null;
  posts?: PostCreateNestedManyWithoutUsersInput;
  profiles?: ProfileCreateNestedManyWithoutUsersInput;
  username?: string | null;
};
