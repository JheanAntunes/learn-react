import FetchUsersForm from "@/components/form-users";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const filters = await searchParams;
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(`${url}/${filters?.users}`);
  const users = await response.json();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Suspense fallback={<div>Loading...</div>}>
          <FetchUsersForm />
        </Suspense>
        <ul>
          <li>
            {users?.name} - {users?.email}
            {users?.address?.street} - {users?.address?.suite} -{" "}
            {users?.address?.city} - {users?.address?.zipcode}
            {users?.phone} - {users?.website}
          </li>
        </ul>
      </main>
    </div>
  );
}
