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
import { createDesign } from "../_actions/create-design";

const formSchema = z.object({
  name: z.string().min(2, "Nome muito curto").max(50, "Nome muito longo"),
  imageUrl: z
    .instanceof(File)
    .refine((file) => file instanceof File, "Você deve selecionar uma imagem"),
  link: z.string().min(1, "Campo obrigatório"),
});

type DesignFormData = z.infer<typeof formSchema>;

const DesignForm = () => {
  const form = useForm<DesignFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageUrl: undefined,
      link: "",
    },
  });

  const onSubmit = async (data: DesignFormData) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("imageUrl", data.imageUrl);
      formData.append("link", data.link);

      const result = await createDesign(formData);

      if (result?.errors) {
        result.errors.forEach((error) => {
          form.setError(error.path[0] as keyof DesignFormData, {
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
            name="link"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-lg font-semibold">Link</FormLabel>
                <FormControl>
                  <Input
                    className="bg-input shadow-md shadow-stone-900"
                    placeholder="Link"
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

export default DesignForm;
