import UserCard from "@/components/user-card/user-card";
import { USERS } from "@/constants/users";
import BgIcon from "@/assets/bg-pattern-quotation.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {USERS.map((user, i) => (
        <div key={i}>
          <UserCard {...user} className={`relative`}>
            {i === 0 && (
              <Image src={BgIcon} alt="" className="absolute -z-10" />
            )}
          </UserCard>
        </div>
      ))}
    </main>
  );
}
