import { PropsWithChildren } from "react";

import { UserCardProps } from "@/types/user-card";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

// TODO: 分割代入して渡しると、または（かつ）、extendsだと渡していないプロパティがエラー検出してくれない.調べる。
interface UserCardWithColorProps extends UserCardProps {
  className: string;
  bgIcon?: string | StaticImport;
}
const UserCard = ({
  icon,
  name,
  userState,
  title,
  paragraph,
  className: color,
  children,
}: PropsWithChildren<UserCardWithColorProps>) => {
  return (
    <article className={`${color}`}>
      {children}
      {/* User */}
      <div>
        <Image src={icon} alt="user icon" />
        <div>{name}</div>
        <div>{userState}</div>
      </div>
      {/* タイトル */}
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </article>
  );
};

export default UserCard;
