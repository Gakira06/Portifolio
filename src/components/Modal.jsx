import React from "react";

const Modal = ({ project, closeModal }) => {
  if (!project) return null;

  const { titulo, tecnologias, img, detalhes, repositorio, link } = project;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={closeModal}
    >
      <div
        className="bg-slate-800 text-white rounded-lg shadow-xl p-8 max-w-2xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white hover:text-red-500 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-3xl font-orbitron mb-4">{titulo}</h2>
        <img
          src={img}
          alt={titulo}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-lg mb-2">
          <span className="font-bold">Tecnologias:</span> {tecnologias}
        </p>
        <p className="mb-4">{detalhes}</p>
        <div className="flex justify-between">
          <a
            href={repositorio}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
          >
            Ver Código
          </a>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Ver Projeto
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
