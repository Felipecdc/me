import Link from "next/link";
import { Button } from "./ui/button";

interface ActionCardProps {
  title?: string;
  count?: string | number;
  press?: string;
  link: string;
}

const ActionCard = ({ title, count, press, link }: ActionCardProps) => {
  const formatCount =
    typeof count === "number" ? count.toString().padStart(2, "0") : count;

  return (
    <Button
      asChild
      className="flex h-[140px] w-full flex-col items-center justify-center gap-4 rounded-md bg-secondary md:h-full lg:h-[170px]"
    >
      <Link href={link}>
        {title && <h1 className="text-xl text-stone-400">{title}</h1>}
        {count && (
          <h3 className="text-3xl text-secondary-foreground md:text-xl lg:text-3xl">
            {formatCount}
          </h3>
        )}
        {press && (
          <h1 className="text-2xl text-secondary-foreground">{press}</h1>
        )}
      </Link>
    </Button>
  );
};

export default ActionCard;
