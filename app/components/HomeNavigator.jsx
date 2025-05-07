import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaAngleLeft } from "react-icons/fa";

const HomeNavigator = () => {
  return (
    <Link href="/" className="flex mb-6 w-[60px]">
      <FaAngleLeft size={24} />
      <AiFillHome size={24} />
    </Link>
  );
};

export default HomeNavigator;
