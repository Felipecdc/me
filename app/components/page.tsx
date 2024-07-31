import Image from "next/image";
import Footer from "../_components/footer";
import Header from "../_components/header";
import CustomCard from "../_components/custom-card";
import CardItem from "../_components/card-item";
import { db } from "../_lib/prisma";

export interface ComponentsProps {
  id: string;
  name: string;
  imageUrl: string;
  codeDependencies?: string | null;
  codeMain?: string | null;
  codeImport: string;
  code: string;
  description?: string | null;
}

const Components = async () => {
  let response: ComponentsProps[] = [];

  try {
    response = await db.components.findMany({});
  } catch (error) {
    console.error("Failed to fetch components:", error);
  }

  return (
    <>
      <Header />
      <div className="flex items-center justify-center px-5 pt-14 md:pt-20">
        <div className="mb-5 mt-8 flex w-full max-w-[1100px] flex-col items-start justify-center gap-1">
          <div className="flex">
            <div className="flex w-full max-w-[550px] flex-col gap-4">
              <h3 className="font-cairo text-2xl font-bold md:text-3xl">
                Componentes publicos
              </h3>
              <p className="font-cairo text-base">
                Está pagina foi criada com o intuito de publicar componentes
                prontos e pré-prontos para que você apenas copie e cole em seus
                projetos.
              </p>
              <p className="font-cairo text-base">
                Aqui vocé encontrará códigos que poderão ser utilizados em
                aplicações web e mobille, tanto para front end quanto para back
                end.
              </p>
              <h3 className="font-cairo text-xl font-bold">
                Quais tecnologias serão abordadas?
              </h3>
              <div className="flex">
                <ol className="font-cairo text-sm">
                  <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-[#bbbbbb]">
                    HTML
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-[#bbbbbb]">
                    Javascript
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-[#bbbbbb]">
                    Tailwindcss
                  </li>
                </ol>
              </div>
            </div>
            <div className="hide-on-small flex h-auto w-[550px] items-center justify-end pr-20">
              <div className="relative h-[250px] w-[280px]">
                <Image
                  src="/laptop.png"
                  alt="Felipe Castro"
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-5 pt-6">
        <CustomCard>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {response.map((item) => (
              <CardItem key={item.id} item={item} />
            ))}
          </div>
        </CustomCard>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 px-5 py-6">
        <Footer />
      </div>
    </>
  );
};

export default Components;
