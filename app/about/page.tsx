import Image from "next/image";
import Footer from "../_components/footer";
import Header from "../_components/header";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-grow items-center justify-center px-5 pt-20">
        <div className="flex w-full max-w-[900px] flex-col items-start justify-center gap-1">
          <h1 className="text-2xl font-bold md:text-3xl">Sobre mim</h1>
          <div className="flex w-full flex-col items-center gap-4 py-5 md:flex-row">
            <div className="relative flex h-[240px] w-[280px] bg-secondary shadow-md shadow-[#242424] md:h-[360px] md:w-[320px]">
              <Image
                src="/me.png"
                alt="Felipe Castro"
                style={{ objectFit: "cover" }}
                className="rounded-md"
                fill
              />
            </div>
            <div className="flex w-full flex-col gap-3 bg-secondary p-3 shadow-md shadow-[#242424]">
              <p className="font-cairo text-base">
                Olá! Meu nome é Felipe Castro, tenho 21 anos e sou formado em
                Análise e Desenvolvimento de Sistemas. Atuo como desenvolvedor
                full stack com experiência em desenvolvimento front-end para web
                e mobile, além de expertise em backend. Minhas habilidades
                incluem HTML, CSS, JavaScript (JS), TypeScript (TS), React,
                React Native, Node.js, Prisma, PostgreSQL, MongoDB, Firebase e
                outras tecnologias como Vite, Git, Sass, Styled Components,
                Tailwind CSS, AWS S3, Shadcn-ui e Axios.
              </p>
              <p className="font-cairo text-base">
                Tenho grande interesse em áreas como desenvolvimento front-end,
                full stack e engenharia de software. Sou muito ambicioso e
                almejo um dia fundar minha própria empresa. Além disso, tenho o
                objetivo de explorar oportunidades fora do Brasil e construir
                uma família.
              </p>
              <p className="font-cairo text-base">
                Estou constantemente buscando aprender e me desenvolver,
                participando ativamente de comunidades de desenvolvimento e
                contribuindo para projetos que desafiam e inspiram.
              </p>
              <p className="font-cairo text-base">
                Seja bem-vindo ao meu portfólio e sinta-se à vontade para
                explorar meu trabalho e entrar em contato!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 px-5 py-6">
        <Footer />
      </div>
    </div>
  );
};

export default About;
