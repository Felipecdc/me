"use client";

import { useState } from "react";
import { SendHorizontalIcon } from "lucide-react";
import ProjectForm from "./_components/project-form";
import ComponentsForm from "./_components/components-form";
import DesignForm from "./_components/design-form";

const CreateProject = () => {
  const [formSelected, setFormSelected] = useState("Projects");

  // Loading page
  const [keyScreen, setKeyScreen] = useState<boolean>(true);
  const [key, setKey] = useState<string>("");
  const handleValidationKey = () => {
    if (key === process.env.ME_DASHBOARD) {
      setKeyScreen(false);
    }
    return;
  };

  if (keyScreen) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center gap-2">
        <div className="flex w-[340px] items-center justify-center rounded-lg bg-input px-3 py-2 md:w-auto">
          <input
            className="bg-transparent text-lg focus:outline-none md:text-2xl"
            type="text"
            placeholder="Insira a chave de segurança"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleValidationKey();
              }
            }}
          />
          <button onClick={handleValidationKey}>
            <SendHorizontalIcon size={30} />
          </button>
        </div>
      </div>
    );
  }
  // Finalloading page

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center pb-8 pt-5">
      <h1 className="mb-5 text-xl font-semibold uppercase">
        Cadastrar um novo
        {formSelected === "Projects" && " projeto"}
        {formSelected === "Components" && " componente"}
        {formSelected === "Design" && " design"}
      </h1>
      <div className="mb-5 flex h-8 w-[350px] items-center justify-center rounded-md bg-card px-5">
        <select
          className="h-full w-full bg-transparent text-card-foreground"
          value={formSelected}
          onChange={(e) => setFormSelected(e.target.value)}
        >
          <option value="Projects">Projects</option>
          <option value="Components">Components</option>
          <option value="Design">Design</option>
        </select>
      </div>
      {formSelected === "Projects" && <ProjectForm />}
      {formSelected === "Components" && <ComponentsForm />}
      {formSelected === "Design" && <DesignForm />}
    </div>
  );
};

export default CreateProject;
