import Link from "next/link";
import CustomCard from "./custom-card";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <>
      <CustomCard>
        <div className="mt-0 flex flex-col gap-2">
          <h1 className="font-cairo text-2xl font-bold">
            Vamos criar algo juntos?
          </h1>
          <p className="font-cairo max-w-[560px]">
            Se você quiser elevar o nivel e o valor da sua marca ou empresa,
            sinta-se à vontade para me enviar uma mensagem.
          </p>
          <Button
            className="mt-5 h-8 rounded-2xl shadow-md shadow-[#242424] md:w-32"
            asChild
          >
            <Link
              href={"https://www.linkedin.com/in/felipe-castro-039335267/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale comigo
            </Link>
          </Button>
        </div>
      </CustomCard>
      <CustomCard>
        <h1 className="font-cairo line-clamp-1 text-[#616161]">
          <strong>Criado com: </strong>
          Typescript, React, NextJs, PostgreSQL, Prisma, Shadcn-ui...
        </h1>
      </CustomCard>
    </>
  );
};

export default Footer;
