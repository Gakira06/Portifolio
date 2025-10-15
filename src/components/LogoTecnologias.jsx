import React from "react";

// Exemplo: Importe os logos das tecnologias aqui
import IconJs from "../assets/logos/js.png";
import IconReact from "../assets/logos/react.png";
import IconNode from "../assets/logos/nodejs.png";
import IconPython from "../assets/logos/python.png";
import IconSql from "../assets/logos/sql-server.png";
import IconHtml from "../assets/logos/html.png";
import IconCss from "../assets/logos/css-3.png";
import IconFigma from "../assets/logos/figma.png";
import IconTailwind from "../assets/logos/tailwind.png";

const logos = [
  { src: IconJs, alt: "JavaScript" },
  { src: IconReact, alt: "React" },
  { src: IconNode, alt: "Node.js" },
  { src: IconPython, alt: "Python" },
  { src: IconSql, alt: "SQL" },
  { src: IconHtml, alt: "HTML5" },
  { src: IconCss, alt: "CSS3" },
  { src: IconFigma, alt: "Figma" },
  { src: IconTailwind, alt: "Tailwind CSS" },
];

const LogoTecnologias = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-400 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] bg-amber-50">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-[scroll_40s_linear_infinite]">
          {logos.map((logo, index) => (
            <li key={index}>
              <img src={logo.src} alt={logo.alt} className="h-12" />
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-[scroll_40s_linear_infinite]"
          aria-hidden="true"
        >
          {logos.map((logo, index) => (
            <li key={index}>
              <img src={logo.src} alt={logo.alt} className="h-12" />
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-[scroll_40s_linear_infinite]"
          aria-hidden="true"
        >
          {logos.map((logo, index) => (
            <li key={index}>
              <img src={logo.src} alt={logo.alt} className="h-12" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LogoTecnologias;
