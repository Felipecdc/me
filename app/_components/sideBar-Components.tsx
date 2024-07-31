import { ComponentsProps } from "../components/page";
import CodeBlock from "./code";
import { SheetTitle } from "./ui/sheet";

const SideBarComponents = (item: ComponentsProps) => {
  return (
    <>
      <SheetTitle className="text-xl font-bold">{item.name}</SheetTitle>
      <div className="pb-7 pt-3">
        <span className="text-sm text-card-foreground">
          {item.description ||
            "Siga os passos a seguir para que o componente funcione do jeito esperado."}
        </span>
      </div>
      <div className="space-y-4">
        {item.codeDependencies && (
          <div>
            <h3 className="mb-1 text-lg font-semibold">Dependências</h3>
            <CodeBlock code={item.codeDependencies} />
          </div>
        )}
        <div>
          <h3 className="mb-1 text-lg font-semibold">Importação</h3>
          <CodeBlock code={item.codeImport} />
        </div>
        {item.codeMain && (
          <div>
            <h3 className="mb-1 text-lg font-semibold">
              Código do arquivo principal
            </h3>
            <CodeBlock code={item.codeMain} />
          </div>
        )}
        <div>
          <h3 className="mb-1 text-lg font-semibold">Código</h3>
          <CodeBlock code={item.code} />
        </div>
      </div>
    </>
  );
};

export default SideBarComponents;
