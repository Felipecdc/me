import CustomCard from "./custom-card";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <>
      <CustomCard>
        <div className="mt-0 flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Vamos criar algo juntos?</h1>
          <p className="max-w-[540px]">
            Se você quiser elevar o nivel e valor da sua marca ou empresa,
            sinta-se à vontade para me enviar uma mensagem.
          </p>
          <Button className="mt-5 h-8 rounded-2xl md:w-32">Fale comigo</Button>
        </div>
      </CustomCard>
      <CustomCard>
        <h1 className="line-clamp-1 text-[#616161]">
          <strong>Criado com: </strong>
          Typescript, React, NextJs, PostgreSQL, Prisma, Shadcn-ui
        </h1>
      </CustomCard>
    </>
  );
};

export default Footer;
