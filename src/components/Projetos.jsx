import React, { useState } from "react";
import menuDados from "../data/dadops.js";
import Area from "./Area.jsx";
import Modal from "./Modal.jsx";

const todasareas = ["todos", ...new Set(menuDados.map((item) => item.area))];

const Projetos = () => {
  // HOOK - useState - manipula o estado da variavel
  const [menuItems, setMenuItems] = useState(menuDados);
  const [areas] = useState(todasareas);
  const [selectedProject, setSelectedProject] = useState(null);

  //FUNÇÃO FILTRAR ITENS
  const filtrarItens = (area) => {
    if (area === "todos") {
      setMenuItems(menuDados);
    } else {
      const novoItem = menuDados.filter((item) => item.area === area);
      setMenuItems(novoItem);
    }
  };
  
  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="mt-10">
      <div className="flex items-center justify-center py-4">
        <h2 className="relative text-white text-4xl font-orbitron transition-colors duration-300 hover:text-red-700 after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-700 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100">
          Minha Garagem
        </h2>
      </div>
      <Area filtroItems={filtrarItens} areas={areas} />
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8">
        {menuItems.map((item) => {
          // Desestruturando o item para pegar as propriedades
          const { id, titulo, tecnologias, img, descricao, repositorio, link } = item;
          return (
            <article
              key={id}
              className="bg-1 rounded-xl shadow-lg flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              onClick={() => openModal(item)}
            >
              <img
                src={img}
                alt={titulo}
                className="w-full h-52 object-cover rounded-t-xl"
              />
              <div className="p-5 flex flex-col flex-grow">
                <header className="flex flex-col items-baseline border-b-2 border-red-600 pb-2 mb-4">
                  <a href={link} className="text-xl text-white font-medium hover:scale-120 hover:shadow-lg">
                    {titulo}
                  </a>
                  <p className="text-xl text-red-600 font-bold">
                    {tecnologias}
                  </p>
                </header>
                <p className="text-base text-gray-700 flex-grow">{descricao}</p>
                <a href={repositorio} target="_blank" className="text-gray-400 hover:text-red-600">Veja o código</a>
              </div>
            </article>
          );
        })}
      </div>
      <Modal project={selectedProject} closeModal={closeModal} />
    </div>
  );
};


export default Projetos;
