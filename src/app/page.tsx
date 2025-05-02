import UserCardList from "@/features/user/components/user-card-list";

export default function Home() {
  return (
    // z-indexで、image が背景に隠れてしまた。
    <main>
      <div className="mx-auto w-[81.4%] max-w-[1114px]">
        <div className="tablet:grid-cols-2 tablet:place-items-center desktop:grid-cols-4 grid gap-400">
          <UserCardList />
        </div>
      </div>
    </main>
  );
}
