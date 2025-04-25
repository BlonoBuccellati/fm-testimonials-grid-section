import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface UserCardProps {
  avatar: StaticImport | string;
  name: string;
  userState: string;
  title: string;
  paragraph: string;
}
export type UserCardTheme = "first" | "second" | "third" | "fourth" | "fifth";
