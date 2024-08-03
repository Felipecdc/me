"use client";

import React, { useEffect, useState } from "react";
import CodeBlock from "./code";

let showCustomModal: () => void;

const Modal = () => {
  const [isVisible, setIsVisible] = useState(false);

  showCustomModal = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const tailwindConfig = `module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/castro-ui/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-5"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-[500px] rounded bg-primary px-5 py-3 shadow-md shadow-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-cairo mb-3 text-xl font-bold text-black">
          Informações importantes
        </h1>
        <span className="text-cairo text-base font-normal text-black">
          Antes de iniciar qualquer código, lembre-se de instalar a biblioteca
          castro-ui e configurar o código do tailwind.config.js do seu projeto.
        </span>
        <div className="mt-6">
          <h2 className="text-md text-cairo mb-1 font-semibold text-black">
            Instalação da Biblioteca
          </h2>
          <CodeBlock code="npm install castro-ui" />
        </div>
        <div className="mt-4">
          <h2 className="text-md text-cairo mb-1 font-semibold text-black">
            Configuração do Tailwind
          </h2>
          <CodeBlock code={tailwindConfig} />
        </div>
      </div>
    </div>
  );
};

export const showModal = () => {
  if (showCustomModal) showCustomModal();
};

export default Modal;
