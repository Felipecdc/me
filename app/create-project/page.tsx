"use client";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../_components/ui/form";
import { Input } from "../_components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { SendHorizontalIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProject } from "./_actions/create-project";
import SubmitButton from "./_components/submit-button";

const formSchema = z.object({
  name: z.string().min(2, "Nome muito curto").max(50, "Nome muito longo"),
  imageUrl: z
    .instanceof(File)
    .refine((file) => file instanceof File, "Você deve selecionar uma imagem"),
  status: z.string().min(2, "Status muito curto").max(10, "Status muito longo"),
  github: z.string().optional(),
  linkedin: z.string().optional(),
  deploy: z.string().optional(),
});

type ProjectFormData = z.infer<typeof formSchema>;

const CreateProject = () => {
  const form = useForm<ProjectFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageUrl: undefined,
      status: "",
      github: "",
      linkedin: "",
      deploy: "",
    },
  });

  // Loading page
  const [keyScreen, setKeyScreen] = useState<boolean>(true);
  const [key, setKey] = useState<string>("");
  const handleValidationKey = () => {
    if (key === "flccastro!235") {
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

  const onSubmit = async (data: ProjectFormData) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("imageUrl", data.imageUrl);
      formData.append("status", data.status);
      if (data.github !== undefined) formData.append("github", data.github);
      if (data.linkedin !== undefined)
        formData.append("linkedin", data.linkedin);
      if (data.deploy !== undefined) formData.append("deploy", data.deploy);

      const result = await createProject(formData);

      if (result?.errors) {
        result.errors.forEach((error) => {
          form.setError(error.path[0] as keyof ProjectFormData, {
            type: "manual",
            message: error.message,
          });
        });
      } else {
        alert("Projeto criado");
        form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center pb-8 pt-5">
      <h1 className="mb-5 text-xl font-semibold uppercase">
        Cadastrar um novo projeto
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          // action={createProject}
          className="flex w-[350px] flex-col gap-5 rounded-lg bg-card p-5 md:w-[600px]"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-lg font-semibold">Name</FormLabel>
                <FormControl>
                  <Input
                    className="bg-input shadow-md shadow-stone-900"
                    placeholder="Digite o nome do projeto"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-lg font-semibold">Imagem</FormLabel>
                <FormControl>
                  <Input
                    className="bg-input shadow-md shadow-stone-900"
                    placeholder="Descarrega uma imagem"
                    type="file"
                    accept="image/png"
                    onChange={(e) =>
                      field.onChange(e.target.files ? e.target.files[0] : null)
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-lg font-semibold">Status</FormLabel>
                <FormControl>
                  <Input
                    className="bg-input shadow-md shadow-stone-900"
                    placeholder="Status do projeto"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="github"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-lg font-semibold">GitHub</FormLabel>
                <FormControl>
                  <Input
                    className="bg-input shadow-md shadow-stone-900"
                    placeholder="Digite a url do repositorio"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="linkedin"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-lg font-semibold">
                  LinkedIn
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-input shadow-md shadow-stone-900"
                    placeholder="Digite a url do post"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="deploy"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-lg font-semibold">Deploy</FormLabel>
                <FormControl>
                  <Input
                    className="bg-input shadow-md shadow-stone-900"
                    placeholder="Digite a url do deploy"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <SubmitButton
            isSubmitting={form.formState.isSubmitting}
            text="Criar Projeto"
          />
        </form>
      </Form>
    </div>
  );
};

export default CreateProject;
