import Image from "next/image";
import Footer from "../_components/footer";
import Header from "../_components/header";
import CustomCard from "../_components/custom-card";
import CardItem from "../_components/card-item";
import { db } from "../_lib/prisma";

export interface ProjectProps {
  id: string;
  name: string;
  imageUrl: string;
  isVisible: boolean;
  status: string;
  links: LinksProps[];
}

interface LinksProps {
  id: string;
  github: string | null;
  linkedin: string | null;
  deploy: string | null;
  projectId: string;
}

const Projects = async () => {
  let response: ProjectProps[] = [];

  try {
    response = await db.project.findMany({
      include: { links: true },
    });
  } catch (error) {
    console.error("Failed to fetch projects:", error);
  }

  return (
    <>
      <Header />
      <div className="flex items-center justify-center px-5 pt-14 md:pt-20">
        <div className="mb-5 mt-8 flex w-full max-w-[1100px] flex-col items-start justify-center gap-1">
          <div className="flex">
            <div className="flex w-full max-w-[550px] flex-col gap-4">
              <h3 className="font-cairo text-2xl font-bold md:text-3xl">
                Projetos publicos
              </h3>
              <span className="font-cairo text-base">
                Está pagina é dedicada a demonstar alguns projetos criados por
                mim, nos quais envolvem front-end e back-end em aplicações para
                web site e mobile apps
              </span>
              <h3 className="font-cairo text-xl font-bold">
                Quais tecnologias serão abordadas?
              </h3>
              <div className="flex">
                <ol className="font-cairo m-0 grid list-none grid-cols-2 p-0 text-sm md:grid-cols-3">
                  <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-[#bbbbbb]">
                    HTML
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-[#bbbbbb]">
                    React / Native
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-[#bbbbbb]">
                    Javascript
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-[#bbbbbb]">
                    Typescript
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-[#bbbbbb]">
                    NodeJs
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-[#bbbbbb]">
                    Firebase
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-[#bbbbbb]">
                    MongoDB
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-[#bbbbbb]">
                    PostgreSQL
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-[#bbbbbb]">
                    CSS
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-[#bbbbbb]">
                    Sass
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-[#bbbbbb]">
                    TailwindCss
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-[#bbbbbb]">
                    Styled-component
                  </li>
                </ol>
              </div>
            </div>
            <div className="hide-on-small flex h-auto w-[550px] items-center justify-end">
              <div className="relative h-[170px] w-[480px]">
                <Image
                  src="/projectImage.png"
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

export default Projects;
