import { Button } from "@/app/_components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => {
  // const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="mt-5 bg-primary font-bold text-primary-foreground"
      disabled={isSubmitting}
    >
      {isSubmitting && <Loader2 className="mr-2 animate-spin" />}
      Criar Projeto
    </Button>
  );
};

export default SubmitButton;
