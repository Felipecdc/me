import { Button } from "@/app/_components/ui/button";
import { Loader2 } from "lucide-react";

const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => {
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
