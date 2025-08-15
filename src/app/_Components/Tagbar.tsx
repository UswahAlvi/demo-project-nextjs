import Image from "next/image";
import TagItem from "./TagItem";
import { useState } from "react";

const MENU: string[] = ["Languages", "Build", "Design", "Cloud"];

export default function Tagbar() {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <>
      <div className="hidden sm:flex gap-[16px]">
        {MENU.map((el, _i) => (
          <TagItem key={_i} name={el} dropdown={false} />
        ))}
      </div>

      <div
        className="relative sm:hidden gap-[16px] p-[6px] rounded-[20px] cursor-pointer self-end"
        style={{ width: "fit-content" }}
        onClick={() => setShowDropdown((show) => !show)}
      >
        <Image
          className={`${showDropdown ? "rotate-180" : ""} transition-transform`}
          src="/dropdown-icon.png"
          width={20}
          height={5}
          alt="dropdown icon"
        />

        {showDropdown && (
          <div className="absolute flex flex-col gap-[4px] right-0 top-[28px] bg-white shadow-md p-2 rounded-md z-10">
            {MENU.map((el, _i) => (
              <TagItem key={_i} name={el} dropdown={true} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
