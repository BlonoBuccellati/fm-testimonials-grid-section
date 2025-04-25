import { PropsWithChildren } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { cn } from "clsx-for-tailwind";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";

import { UserCardProps, UserCardTheme } from "@/types/user-card";

const userCardVariants = cva("", {
  variants: {
    variant: {
      first: "bg-primary-500 text-white",
      second: "bg-gray-500 text-white",
      third: "bg-white text-gray-500",
      fourth: "bg-dark-blue text-white",
      fifth: "bg-white text-gray-500",
    } satisfies Record<UserCardTheme, string>,
  },
  defaultVariants: {
    variant: "first",
  },
});
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

const avatarVariants = cva("border", {
  variants: {
    variant: {
      first: "border-[#A775F1]",
      second: "",
      third: "",
      fourth: "border-[#A775F1]",
      fifth: "",
    } satisfies Record<UserCardTheme, string>,
  },
  defaultVariants: {
    variant: "first",
  },
});

const titleVariants = cva("", {
  variants: {
    variant: {
      first: "",
      second: "",
      third: "",
      fourth: "text-gray-200",
      fifth: "",
    } satisfies Record<UserCardTheme, string>,
  },
  defaultVariants: {
    variant: "first",
  },
});
const userParagraphVariants = cva("", {
  variants: {
    variant: {
      first: "text-primary-50",
      second: "text-gray-100",
      third: "text-gray-400",
      fourth: "text-gray-100",
      fifth: "text-gray-400",
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
const UserCard = ({
  avatar,
  name,
  userState,
  title,
  paragraph,
  variant,
  children,
  className,
}: PropsWithChildren<UserCardWithColorProps> &
  VariantProps<typeof userCardVariants>) => {
  return (
    <article
      className={`${cn("mx-auto w-[81.4%] space-y-400 rounded-md p-400", userCardVariants({ variant }), className)}`}
    >
      {children}
      {/* User */}
      <div className="text-preset-2 flex items-center justify-start gap-200">
        <Image
          src={avatar}
          alt="user avatar"
          className={`${cn("max-w-[28px] rounded-full border-3", avatarVariants({ variant }))}`}
        />
        <div className="space-y-50">
          <div className="">{name}</div>
          <div className={`${userStateVariants({ variant })}`}>{userState}</div>
        </div>
      </div>
      {/* タイトル */}
      <h1 className={`text-preset-1 space-y-200 ${titleVariants({ variant })}`}>
        {title}
      </h1>
      <p className={`text-preset-3 ${userParagraphVariants({ variant })}`}>
        {paragraph}
      </p>
    </article>
  );
};

export default UserCard;
