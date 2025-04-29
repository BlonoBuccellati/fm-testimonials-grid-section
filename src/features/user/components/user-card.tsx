import { PropsWithChildren } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  userCardVariants,
} from "@/components/ui/card";

import { UserCardProps, UserCardTheme } from "@/types/user-card";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";

const userStateVariants = cva("", {
  variants: {
    variant: {
      first: "text-primary-50",
      second: "text-gray-300",
      third: "text-gray-400",
      fourth: "text-white",
      fifth: "text-gray-300",
    } satisfies Record<UserCardTheme, string>,
  },
  defaultVariants: {
    variant: "first",
  },
});

// TODO: 分割代入して渡しると、または（かつ）、extendsだと渡していないプロパティがエラー検出してくれない.調べる。
interface UserCardWithColorProps extends UserCardProps {
  bgIcon?: string | StaticImport;
  className?: string;
}
function UserCard({
  avatar,
  name,
  userState,
  title,
  paragraph,
  variant,
  children,
  className,
}: PropsWithChildren<UserCardWithColorProps> &
  VariantProps<typeof userCardVariants>) {
  return (
    <Card
      variant={variant}
      className={`${cn("space-y-200 rounded-md p-400", className)}`}
    >
      {/* svg ここで位置はいいのか？？？？ */}
      {children}
      {/* User */}
      <CardHeader>
        <Avatar variant={variant}>
          <AvatarImage src={avatar} alt="user avatar" />
          <AvatarFallback>USER</AvatarFallback>
        </Avatar>
        <UserInfo userName={name} userState={userState} variant={variant} />
      </CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardContent variant={variant}>{paragraph}</CardContent>
    </Card>
  );
}

interface UserInfoProps {
  className?: string;
  userName: string;
  userState: string;
}

const UserInfo = ({
  className,
  userName,
  userState,
  variant,
}: UserInfoProps & VariantProps<typeof userCardVariants>) => {
  return (
    <div className={cn("space-y-50", className)}>
      <div>{userName}</div>
      <div
        data-slot="card-user-status"
        className={`${userStateVariants({ variant })}`}
      >
        {userState}
      </div>
    </div>
  );
};

export default UserCard;
