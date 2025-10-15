import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = () => {
  const options = useMemo(() => {
    // Aqui você pode encontrar todas as opções de configuração: https://particles.js.org/docs/
    return {
      background: {
        color: {
          value: "#000000", // Cor de fundo
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1, // Coloca as partículas atrás de outros elementos
      },
      fpsLimit: 120, // Limita o FPS para economizar recursos
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse", // Efeito ao passar o mouse
          },
        },
        modes: {
          repulse: {
            distance: 100, // Distância da repulsão
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff", // Cor das partículas
        },
        links: {
          color: "#ffffff", // Cor das linhas que ligam as partículas
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce", // Faz as partículas quicarem nas bordas
          },
          random: false,
          speed: 2, // Velocidade do movimento
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80, // Número de partículas
        },
        opacity: {
          value: 0.5, // Opacidade das partículas
        },
        shape: {
          type: "circle", // Formato das partículas
        },
        size: {
          value: { min: 1, max: 5 }, // Tamanho aleatório das partículas
        },
      },
      detectRetina: true, // Melhora a qualidade em telas de alta resolução
    };
  }, []);

  // A função de inicialização precisa ser assíncrona
  const particlesInit = useCallback(async (engine) => {
    // Carrega o pacote slim do tsparticles
    await loadSlim(engine);
  }, []);

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

export default ParticlesComponent;
