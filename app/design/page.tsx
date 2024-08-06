import Image from "next/image";
import Footer from "../_components/footer";
import Header from "../_components/header";
import CustomCard from "../_components/custom-card";
import CardItem from "../_components/card-item";
import { db } from "../_lib/prisma";

export interface DesignsProps {
  id: string;
  name: string;
  imageUrl: string;
  link: string;
}

const Design = async () => {
  let response: DesignsProps[] = [];

  try {
    response = await db.design.findMany({});
  } catch (error) {
    console.error("Failed to fetch Designs:", error);
  }

  return (
    <>
      <Header />
      <div className="flex items-center justify-center px-5 pt-14 md:pt-20">
        <div className="mb-5 mt-8 flex w-full max-w-[1100px] flex-col items-start justify-center gap-1">
          <div className="flex">
            <div className="flex w-full max-w-[550px] flex-col gap-4">
              <h3 className="font-cairo text-2xl font-bold md:text-3xl">
                Designs publicos
              </h3>
              <p className="font-cairo text-base">
                Criei está pagina com o intuito de publicar designs prontos para
                você que não tem ideias sobre UI, mas que esta querendo fazer
                seus projetos frontend.
              </p>
              <p className="font-cairo text-base">
                Aqui vocé encontrará designs que poderão ser utilizados em
                aplicações web e mobille, e tambem aproveite e explore a galeria
                para assim pegar ideias e poder criar os seus proprios.
              </p>
              <h3 className="font-cairo text-xl">
                Obs: Todos os layouts estão dispostos no{" "}
                <a
                  className="text-purple-400"
                  href="https://figma.com/"
                  target="_blank"
                >
                  Figma
                </a>
              </h3>
            </div>
            <div className="hide-on-small flex h-auto w-[550px] items-center justify-end pr-20">
              <div className="relative h-[310px] w-[350px]">
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

export default Design;
