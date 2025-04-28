"use client";

import Image from "next/image";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { UserCardTheme } from "@/types/user-card";

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

function Avatar({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> &
  VariantProps<typeof avatarVariants>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        "max-w-[28px] rounded-full border-3",
        avatarVariants({ variant }),
        className,
      )}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  alt,
  ...props
}: React.ComponentProps<typeof Image>) {
  return <Image className={cn("", className)} alt={alt} {...props} />;
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className,
      )}
      {...props}
    />
  );
}
export { AvatarImage, Avatar, AvatarFallback };
