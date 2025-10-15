import React from "react";
import IconLinkedin from "../assets/icons/linkedin-logo-fill.svg";
import IconGitHub from "../assets/icons/github-logo-fill.svg";
import IconGmail from "../assets/icons/gmail-svgrepo-com.svg";
import FotoPerfil from "../assets/FotoPerfil.jpg";

const Main = () => {
  return (
    <div>
      <div className="grid grid-cols-2 ml-10 mb-10">
        <div className="flex flex-col text-white justify-center items-center text-center h-[80vh] gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="font-family-orbitron text-4xl">Gabriel Kiyohara</h1>
            <h2 className="font-family-orbitron text-2xl">
              Dev FullStack | Software Engineer
            </h2>
          </div>
          <p className="text-lg md:w-150 ">
            Olá! Sou um estudante de engenharia de software da FIAP com
            experiência em JavaScript, Python, SQL, REACT, NODE.JS, API REST,
            Figma, TailwindCSS, CSS e HTML.
          </p>
          <div className="flex gap-10">
            <a
              href="https://www.linkedin.com/in/gabriel-akira-kiyohara"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={IconLinkedin} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/Gakira06"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={IconGitHub} alt="GitHub" />
            </a>
            <a href="mailto:gakirakiyohara@gmail.com">
              <img src={IconGmail} alt="Gmail" />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={FotoPerfil}
            className="w-96 h-96 rounded-full object-cover"
            alt="Foto de Perfil de Gabriel Akira"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
