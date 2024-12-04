import { Post } from "../post/Post";
import { Profile } from "../profile/Profile";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  posts?: Array<Post>;
  profiles?: Array<Profile>;
  updatedAt: Date;
  username: string | null;
};
