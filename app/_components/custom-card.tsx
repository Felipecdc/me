import { ReactNode } from "react";

const CustomCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full max-w-[1100px] items-center justify-center rounded-md bg-card p-4">
      {children}
    </div>
  );
};

export default CustomCard;
