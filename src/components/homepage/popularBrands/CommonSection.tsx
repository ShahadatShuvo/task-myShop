import Image from "next/image";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

interface CommonSectionInterface {
  headline: string;
  title: string;
}

const brandsLogo = [
  {
    id: 1,
    src: "/img/brands/Logo1.svg",
  },
  {
    id: 2,
    src: "/img/brands/Logo2.svg",
  },
  {
    id: 3,
    src: "/img/brands/Logo3.svg",
  },
  {
    id: 4,
    src: "/img/brands/Logo4.svg",
  },
  {
    id: 5,
    src: "/img/brands/Logo5.svg",
  },
  {
    id: 6,
    src: "/img/brands/Logo6.svg",
  },
];

function CommonSection(props: CommonSectionInterface) {
  const displayBrandsImg = brandsLogo.map((brand) => {
    return (
      <div key={brand.id}>
        <a href="/">
          <Image
            src={brand.src}
            alt="brands_bg"
            width={140}
            height={140}
            className="w-[70px] md:w-[140px] h-[70px] md:h-[140px]"
          />
        </a>
      </div>
    );
  });
  return (
    <div className="py-8 md:py-12">
      <div className="mx-5 md:mx-32 flex justify-around">
        <div className="relative">
          {props.title === "brands" ? (
            <Image
              src="/img/brands/brands_bg.svg"
              alt="brands_bg"
              width={550}
              height={550}
              className="w-[220px] md:w-[550px]"
            />
          ) : (
            <Image
              src="/img/social/bg-social.svg"
              alt="brands_bg"
              width={550}
              height={550}
              className="w-[220px] md:w-[550px]"
            />
          )}

          {props.title === "brands" ? (
            <div className="absolute top-0 md:top-32 w-full flex flex-wrap justify-center items-center gap-2">
              {displayBrandsImg}
            </div>
          ) : (
            <div className="absolute top-16 md:top-32 -right-8 md:-right-16 w-full flex flex-wrap justify-center items-center gap-2">
              <a href="/">
                <Image
                  src="/img/social/man.svg"
                  alt="brands_bg"
                  width={280}
                  height={280}
                  className="w-[140px] md:w-[280px] h-[140px] md:h-[280px]"
                />
              </a>
            </div>
          )}
        </div>
        <div
          className={
            props.title === "brands"
              ? "w-[30%] flex flex-col justify-center order-last"
              : "w-[30%] flex flex-col justify-center order-first"
          }
        >
          <h2 className="text-md md:text-3xl font-bold">{props.headline}</h2>
          <p className="mt-3 text-sm md:text-md">
            Life is hard enough already. Let us make it a little easier.
          </p>
          <p className="font-semibold mt-5 text-sm md:text-md">
            <a href="/">
              See All <ArrowRightAltIcon />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommonSection;
