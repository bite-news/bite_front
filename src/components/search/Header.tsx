"use client";

import React, { useState } from "react";
import { BackButton } from "@/components/common";
import { IoSearch } from "react-icons/io5";

interface HeaderProps {
  onSearch: (keyword: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [value, setValue] = useState("");

  const handleSearch = () => {
    onSearch(value);
    setValue(""); // 검색 후 입력값 초기화
  };

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="flex items-center justify-between h-16 border border-gray-200 px-4">
      <BackButton color="black" />

      <div className="flex-1 mx-2">
        <input
          type="text"
          className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none"
          placeholder="검색어를 입력하세요"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleEnter}
        />
      </div>

      <button className="ml-auto" onClick={handleSearch}>
        <IoSearch size={28} />
      </button>
    </header>
  );
}
