"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import Image from "next/image";
import { ProjectProps } from "../projects/page";
import { ComponentsProps } from "../components/page";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideBarComponents from "./sideBar-Components";

type CardItemProps = ComponentsProps | ProjectProps;

const CardItem = ({ item }: { item: CardItemProps }) => {
  const isProjectProps = (props: CardItemProps): props is ProjectProps => {
    return (props as ProjectProps).links !== undefined;
  };

  const isComponentsProps = (
    props: CardItemProps,
  ): props is ComponentsProps => {
    return (props as ComponentsProps) !== undefined;
  };

  return (
    <div className="flex flex-col items-center justify-start rounded-lg bg-[#FEFEFE]">
      <div className="flex min-h-10 w-full items-center justify-between gap-2 rounded-t-lg border-b border-[#dddddd] bg-[#ececec] px-2 py-1">
        <h1 className="font-cairo line-clamp-1 text-wrap font-bold text-slate-900">
          {item.name}
        </h1>
        {isComponentsProps(item) && item.code && (
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex items-center gap-1 text-[#888888] hover:text-[#424242]">
                <MdOpenInNew />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SideBarComponents {...item} />
            </SheetContent>
          </Sheet>
        )}
        {isProjectProps(item) &&
          item.links &&
          item.links.length > 0 &&
          item.links.map((link) => (
            <div key={link.id} className="flex gap-2">
              {link.github && (
                <Link
                  href={link.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#888888] hover:text-[#424242]"
                >
                  <FaGithub />
                </Link>
              )}
              {link.linkedin && (
                <Link
                  href={link.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#888888] hover:text-[#424242]"
                >
                  <FaLinkedin />
                </Link>
              )}
              {link.deploy && (
                <Link
                  href={link.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#888888] hover:text-[#424242]"
                >
                  <MdOpenInNew />
                </Link>
              )}
            </div>
          ))}
      </div>
      <div className="justify-cente flex h-full max-w-[370px] items-center py-1">
        <div className="relative h-[170px] w-[240px] sm:h-[210px] sm:w-[250px] md:h-[160px] md:w-[200px] lg:h-[200px] lg:w-[290px]">
          <Image
            src={item.imageUrl}
            alt={item.name}
            style={{ objectFit: "contain", objectPosition: "center" }}
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
