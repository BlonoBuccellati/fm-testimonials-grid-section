import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface UserCardProps {
  icon: StaticImport | string;
  name: string;
  userState: string;
  title: string;
  paragraph: string;
}
