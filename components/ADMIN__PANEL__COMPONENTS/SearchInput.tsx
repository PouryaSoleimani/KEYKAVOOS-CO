import Image from "next/image";
import React from "react";

type SearchInputProps = { value: string; onChange: React.ChangeEventHandler<HTMLInputElement>; placeholder: string; };

function SearchInput({ value, onChange, placeholder }: SearchInputProps) {
  return (
    <div className="relative mb-3">
      <input type="text" placeholder={placeholder} className="w-full outline-none border border-[#4866CF] rounded-[8px] p-2 my-2 placeholder:text-[#68707A] md:placeholder:text-[15px] placeholder:text-sm placeholder:tracking-tight" value={value} onChange={onChange} />
      <Image src="/ViewUsers/search.svg" alt="search" className="absolute left-2 top-1/2 -translate-y-1/2" width={26} height={26} />
    </div>
  );
}

export default SearchInput;
