import Image from "next/image";
import CustomCard from "../_components/custom-card";
import Header from "../_components/header";
import ActionCard from "../_components/action-card";
import { Button } from "../_components/ui/button";
import Footer from "../_components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center px-5 pt-20">
        <div className="flex w-full max-w-[1100px] flex-col items-start justify-center">
          <h1>E ai, eu sou Felipe Castro - Desenvolvedor Full-Stack</h1>
          <span>Unificando o design e o codigo em um so lugar!</span>
          <div className="flex">
            <div className="h-[15px] w-[15px] rounded-full bg-green-700">
              <div className="h-[8px] w-[8px] rounded-full bg-green-500"></div>
            </div>
            <span>Em atividade</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-5 pt-6">
        <CustomCard>
          <div className="flex w-full items-center justify-center">
            <div className="relative hidden h-[240px] min-w-[280px] bg-secondary md:flex">
              <Image
                src="/me.png"
                alt="Felipe Castro"
                style={{ objectFit: "cover" }}
                className="rounded-md"
                fill
              />
            </div>
            <div className="flex h-full w-full flex-col gap-3 md:pl-3 lg:flex-row lg:gap-8 lg:pl-8 lg:pr-4">
              <ActionCard title="Componentes" count={16} link="/components" />
              <ActionCard title="Design Figma" count={5} link="/design-figma" />
              <ActionCard press="Ver sobre" link="/about" />
            </div>
          </div>
        </CustomCard>
      </div>
      <div className="flex items-center justify-center px-5 pt-6">
        <CustomCard>
          <div className="flex w-full flex-col md:flex-row md:justify-start">
            <div className="hidden h-auto items-center justify-center md:flex">
              <div className="bg-secondaryflex relative h-[240px] min-w-[280px] max-w-[280px]">
                <Image
                  src="/notebook.png"
                  alt="Felipe Castro"
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                  fill
                />
              </div>
            </div>
            <div className="flex w-full flex-col justify-between md:pl-5">
              <div className="flex flex-col gap-2 md:mt-0">
                <h1 className="text-2xl font-semibold">Projetos</h1>
                <p>
                  Aqui você encontrará alguns dos projetos mais relevantes que
                  construí. Entre esses projetos, estão incluídos websites e
                  aplicativos móveis desenvolvidos com tecnologias como React.js
                  e Node.js. Além disso, você verá bancos de dados criados do
                  zero e integrações com Firebase, como Firestore e Storage.
                  Explore os projetos para ver mais detalhes!
                </p>
              </div>
              <Button className="mt-5 h-8 lg:mt-0 lg:w-32">Ver Projetos</Button>
            </div>
          </div>
        </CustomCard>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 px-5 py-6">
        <Footer />
      </div>
    </>
  );
}
