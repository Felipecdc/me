import { Button } from "@/app/_components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="mt-5 bg-primary font-bold text-primary-foreground"
      disabled={pending}
    >
      {pending && <Loader2 className="animate-spin" />}
      Criar Projeto
    </Button>
  );
};

export default SubmitButton;
