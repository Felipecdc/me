import React, { useState } from "react";
import { PiCopy, PiSpinner } from "react-icons/pi";

interface CodeBlockProps {
  code: string;
  maxHeight?: string;
  maxWidth?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, maxHeight, maxWidth }) => {
  const [isLoading, setIsLoading] = useState(false);

  const highlightedCode = code
    .split("\n")
    .map((line: string, index: number) => (
      <div key={index}>
        <span style={{ textShadow: "2px 3px 5px rgba(0,0,0,1)" }}>
          {line || "\u00A0"}
        </span>
      </div>
    ));

  const CopyToClipboard = () => {
    setIsLoading(true);

    setTimeout(() => {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          console.log("Copy successful");
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }, 600);
  };

  return (
    <div
      className="flex flex-col rounded-lg border border-gray-700 bg-[#252525]"
      style={{
        maxHeight: maxHeight ? `${maxHeight}px` : "auto",
        minHeight: "70px",
        height: "auto",
        width: maxWidth ? `${maxWidth}px` : "100%",
      }}
    >
      <div className="flex w-full items-center justify-end rounded-t-md bg-[#414141] p-2 text-sm text-white">
        <button
          className="flex items-center gap-1"
          onClick={CopyToClipboard}
          disabled={isLoading}
        >
          {isLoading ? (
            <PiSpinner className="animate-spin" size={18} />
          ) : (
            <PiCopy size={18} />
          )}
          {isLoading ? "Copiando..." : "Copiar código"}
        </button>
      </div>
      <div className="max-h-full overflow-auto rounded-b-md bg-[#252525] px-3 py-4 font-mono text-sm text-[#c1c1c1]">
        <pre>{highlightedCode}</pre>
      </div>
    </div>
  );
};

export default CodeBlock;
