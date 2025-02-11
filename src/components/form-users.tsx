"use client";

import { useCallback, useState } from "react";
import Input from "./input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Button from "./button";

const FetchUsersForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const [nameUser, setNameUser] = useState("");
  return (
    <div>
      <Input
        value={nameUser}
        type="text"
        onChange={(e) => setNameUser(e.target.value)}
        className="border border-solid border-neutral-300 bg-transparent py-2 px-4 rounded-md"
      />
      {/* using useRouter */}
      <Button
        className="block"
        onClick={() => {
          // <pathname>?sort=asc
          router.push(pathname + "?" + createQueryString("users", "1"));
        }}
      >
        Solicitar usuario 1
      </Button>

      <Link
        href={
          // <pathname>?sort=desc
          pathname + "?" + createQueryString("users", "2")
        }
      >
        Solicitar usuario 2
      </Link>
    </div>
  );
};

export default FetchUsersForm;
