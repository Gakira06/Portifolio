import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      background: {
        color: "#000", // Cor do fundo
      },
      fullScreen: {
        enable: true, // Habilita o modo de tela cheia
        zIndex: -1, // Coloca as partículas atrás de todo o conteúdo
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse", // Faz as partículas se afastarem do mouse
          },
        },
        modes: {
          repulse: {
            distance: 150, // Distância do "empurrão" do mouse
          },
        },
      },
      particles: {
        links: {
          enable: true, // Habilita as linhas que conectam as partículas
          distance: 150,
          color: "#fff",
        },
        move: {
          enable: true, // Habilita o movimento das partículas
          speed: { min: 1, max: 2 },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
        number: {
          value: 80, // Número de partículas na tela
          density: {
            enable: true,
            area: 800,
          },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesComponent;
