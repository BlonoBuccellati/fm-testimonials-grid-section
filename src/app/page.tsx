import UserCard from "@/features/user/components/user-card";
import { USERS } from "@/constants/users";
import BgIcon from "@/assets/bg-pattern-quotation.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { UserCardTheme } from "@/types/user-card";

export default function Home() {
  const color: UserCardTheme[] = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
  ];
  return (
    // z-indexで、image が背景に隠れてしまた。
    <main>
      <div className="mx-auto w-[81.4%]">
        <div className="tablet:grid-cols-2 tablet:place-items-center desktop:grid-cols-4 grid gap-400">
          {USERS.map((user, i) => (
            <UserCard
              key={i}
              {...user}
              variant={color[i]}
              className={cn(
                "tablet:h-full relative w-full",
                i === 0 && "tablet:col-span-2 -z-20",
                i === 1 && "tablet:col-span-1",
                i === 2 && "tablet:col-span-1",
                i === 3 && "tablet:col-span-2",
                i === 4 &&
                  "tablet:col-span-2 desktop:row-span-2 desktop:col-start-4 desktop:row-start-1",
              )}
            >
              {i === 0 && (
                <Image
                  src={BgIcon}
                  alt=""
                  className="tablet:block absolute top-[0%] left-[clamp(50%,90%-6rem,77%)] -z-10 hidden -translate-x-1/2"
                />
              )}
            </UserCard>
          ))}
        </div>
      </div>
    </main>
  );
}
