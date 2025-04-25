import UserCard from "@/components/user-card/user-card";
import { USERS } from "@/constants/users";
import BgIcon from "@/assets/bg-pattern-quotation.svg";
import Image from "next/image";

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
    <main>
      <div className="grid gap-400">
        {USERS.map((user, i) => (
          <UserCard key={i} {...user} variant={color[i]} className="relative">
            {i === 0 && (
              <Image src={BgIcon} alt="" className="absolute -z-10" />
            )}
          </UserCard>
        ))}
      </div>
    </main>
  );
}
