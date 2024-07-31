import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../_components/ui/form";
import { Input } from "../../_components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "./submit-button";
import { createComponent } from "../_actions/create-component";
import { Textarea } from "@/app/_components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Nome muito curto").max(50, "Nome muito longo"),
  imageUrl: z
    .instanceof(File)
    .refine((file) => file instanceof File, "Você deve selecionar uma imagem"),
  codeDependencies: z.string().optional(),
  codeMain: z.string().optional(),
  codeImport: z.string().min(8, "Codigo muito curto"),
  code: z.string().min(8, "Codigo muito curto"),
  description: z.string().optional(),
});

type ComponentsFormData = z.infer<typeof formSchema>;

const ComponentsForm = () => {
  const form = useForm<ComponentsFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageUrl: undefined,
      codeDependencies: "",
      codeMain: "",
      codeImport: "",
      code: "",
      description: "",
    },
  });

  const onSubmit = async (data: ComponentsFormData) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("imageUrl", data.imageUrl);
      formData.append("codeImport", data.codeImport);
      formData.append("code", data.code);
      if (data.codeDependencies !== undefined)
        formData.append("codeDependencies", data.codeDependencies);
      if (data.codeMain !== undefined)
        formData.append("codeMain", data.codeMain);
      if (data.description !== undefined)
        formData.append("description", data.description);

      const result = await createComponent(formData);

      if (result?.errors) {
        result.errors.forEach((error) => {
          form.setError(error.path[0] as keyof ComponentsFormData, {
            type: "manual",
            message: error.message,
          });
        });
      } else {
        alert("Componente criado");
        form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
                    placeholder="Digite o nome do componente"
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
                    placeholder="Selecione uma imagem"
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
            name="codeImport"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-lg font-semibold">Import</FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-input shadow-md shadow-stone-900"
                    placeholder="Código de Importação"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-lg font-semibold">Code</FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-input shadow-md shadow-stone-900"
                    placeholder="Código principal"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="codeDependencies"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-lg font-semibold">
                  Dependencies
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-input shadow-md shadow-stone-900"
                    placeholder="Dependências"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="codeMain"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-lg font-semibold">Main</FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-input shadow-md shadow-stone-900"
                    placeholder="Código arquivo main"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-lg font-semibold">
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-input shadow-md shadow-stone-900"
                    placeholder="Descrição"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <SubmitButton
            isSubmitting={form.formState.isSubmitting}
            text="Criar Componente"
          />
        </form>
      </Form>
    </>
  );
};

export default ComponentsForm;
