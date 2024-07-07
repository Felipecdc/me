import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <div className="fixed z-50 flex w-full items-center justify-center bg-gradient-to-b from-background to-transparent px-3 pt-4">
      {/* MOBILE */}
      <div className="flex h-10 w-full items-center justify-between rounded-xl bg-card px-3 shadow-md shadow-zinc-900 sm:hidden">
        <Link href={"/"} className="font-roboto font-bold">
          Felipe Castro
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="link" className="m-0 p-0">
              <MenuIcon size={25} />
            </Button>
          </SheetTrigger>
          <SheetContent className="border-stone-800">
            <SheetHeader className="items-start">
              <SheetTitle className="font-roboto text-3xl">
                Bem vindo!
              </SheetTitle>
            </SheetHeader>
            <div className="flex h-full w-full flex-col justify-between pb-10 pt-5">
              <div className="flex w-full flex-col gap-5">
                <Button
                  asChild
                  className="m-0 items-center justify-start bg-muted p-2"
                >
                  <Link
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-roboto m-0 p-0 text-secondary-foreground"
                  >
                    Inicio
                  </Link>
                </Button>
                <Button
                  asChild
                  className="m-0 items-center justify-start bg-muted p-2"
                >
                  <Link
                    href="/projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-roboto m-0 p-0 text-secondary-foreground"
                  >
                    Projetos
                  </Link>
                </Button>
                <Button
                  asChild
                  className="m-0 items-center justify-start bg-muted p-2"
                >
                  <Link
                    href="/components"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-roboto m-0 p-0 text-secondary-foreground"
                  >
                    Componentes
                  </Link>
                </Button>
                <Button
                  asChild
                  className="m-0 items-center justify-start bg-muted p-2"
                >
                  <Link
                    href="/design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-roboto m-0 p-0 text-secondary-foreground"
                  >
                    Design
                  </Link>
                </Button>
              </div>
              <div className="flex w-full flex-col gap-5">
                <Button
                  asChild
                  className="m-0 items-center justify-start bg-secondary p-2"
                >
                  <Link
                    href="https://www.linkedin.com/in/felipe-castro-039335267/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-roboto m-0 p-0 text-secondary-foreground"
                  >
                    <FaLinkedin size={27} className="mr-2" />
                    @Felipe Castro
                  </Link>
                </Button>
                <Button
                  asChild
                  className="m-0 items-center justify-start bg-secondary p-2"
                >
                  <Link
                    href="https://github.com/Felipecdc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-roboto m-0 p-0 text-secondary-foreground"
                  >
                    <FaGithub size={27} className="mr-2" />
                    Felipecdc
                  </Link>
                </Button>
                <Button
                  asChild
                  className="m-0 items-center justify-start bg-secondary p-2"
                >
                  <Link
                    href="https://www.instagram.com/felipe_castroz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-roboto m-0 p-0 text-secondary-foreground"
                  >
                    <FaInstagram size={27} className="mr-2" />
                    @felipe_castroz
                  </Link>
                </Button>
                <Button
                  asChild
                  className="m-0 items-center justify-start bg-secondary p-2"
                >
                  <Link
                    href="mailto:felipecdc09@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-roboto m-0 p-0 text-secondary-foreground"
                  >
                    <FaEnvelope size={27} className="mr-2" />
                    felipecdc09@gmail.com
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      {/* DESKTOP */}
      <div className="hidden h-12 w-full max-w-[1300px] items-center justify-between rounded-xl bg-card px-4 shadow-md shadow-zinc-900 sm:flex">
        <div className="flex gap-3">
          <Link
            href={"/"}
            className="font-roboto text-base font-semibold hover:text-white"
          >
            Inicio
          </Link>
          <Link
            href={"/projects"}
            className="font-roboto text-base font-semibold hover:text-white"
          >
            Projetos
          </Link>
          <Link
            href={"/components"}
            className="font-roboto text-base font-semibold hover:text-white"
          >
            Componentes
          </Link>
          <Link
            href={"/design"}
            className="font-roboto text-base font-semibold hover:text-white"
          >
            Design
          </Link>
        </div>
        <div className="flex gap-3">
          <Link
            href="https://www.linkedin.com/in/felipe-castro-039335267/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={22} />
          </Link>
          <Link
            href="https://github.com/Felipecdc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={22} />
          </Link>
          <Link
            href="https://www.instagram.com/felipe_castroz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={22} />
          </Link>
          <Link
            href="mailto:felipecdc09@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
