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
  avatar,
  name,
  userState,
  title,
  paragraph,
  className: color,
  children,
}: PropsWithChildren<UserCardWithColorProps>) => {
  return (
    <article
      className={`${color} mx-auto w-[75%] space-y-400 rounded-md bg-red-300 p-400`}
    >
      {children}
      {/* User */}
      <div className="text-preset-2 flex items-center justify-start gap-200">
        <Image
          src={avatar}
          alt="user avatar"
          className="max-w-[28px] rounded-full border-3 border-amber-500"
        />
        <div className="space-y-50">
          <div className="">{name}</div>
          <div>{userState}</div>
        </div>
      </div>
      {/* タイトル */}
      <h1 className="text-preset-1 space-y-200">{title}</h1>
      <p className="text-preset-3">{paragraph}</p>
    </article>
  );
};

export default UserCard;
