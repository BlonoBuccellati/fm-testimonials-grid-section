import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { UserCardTheme } from "@/types/user-card";

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

function Card({
  className,
  variant,
  ...props
}: React.ComponentProps<"article"> & VariantProps<typeof userCardVariants>) {
  return (
    <article
      data-slot="card"
      className={cn(
        "space-y-400 rounded-md p-400",
        userCardVariants({ variant }),
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof titleVariants>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "typo-preset-2 flex items-center justify-start gap-200",
        titleVariants({ variant }),
        className,
      )}
      {...props}
    />
  );
}

function CardContent({
  className,
  variant,
  ...props
}: React.ComponentProps<"p"> & VariantProps<typeof userParagraphVariants>) {
  return (
    <p
      data-slot="card-description"
      className={cn(
        "typo-preset-3",
        userParagraphVariants({ variant }),
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      data-slot="card-title"
      className={cn("typo-preset-1 space-y-200", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("", className)} {...props} />;
}
export { Card, CardHeader, CardContent, CardTitle, CardDescription };
export { userCardVariants, titleVariants, userParagraphVariants };
