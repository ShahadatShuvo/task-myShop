import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="w-screen h-screen ">
      <div className="w-full h-full bg-[url('/img/base.svg')]">
        {/* <Image
        src="/img/base.svg"
        alt=""
        width={500}
        height={500}
        className="w-full"
      /> */}
        <div className="">hello</div>
      </div>
    </div>
  );
}

export default HeroSection;
