import React from "react";
import Image from "next/image";

function Testimonial() {
  return (
    <div className="h-[60vh] w-screen mt-76 pt-24">
      <div className="flex">
        <div className="w-[50%] relative">
          <Image
            src="/img/testimonial/background.svg"
            alt=""
            width={500}
            height={500}
          />
          <Image
            src="/img/testimonial/person.svg"
            alt=""
            width={300}
            height={300}
            className="absolute top-0 right-48  bottom-0"
          />
        </div>
        <div className=" w-[50%]">
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
