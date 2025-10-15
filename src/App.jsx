import React, { useState, useEffect } from "react";
import Particle from "./components/Particle";
import Header from "./components/Header";
import Main from "./components/Main";
import LoadingScreen from "./components/LoadingScreen";
import LogoTecnologias from "./components/LogoTecnologias"
import Projetos from "./components/Projetos";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Define um temporizador para mudar o estado de isLoading para false após 5 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Limpa o temporizador se o componente for desmontado antes do tempo
    return () => clearTimeout(timer);
  }, []); // O array vazio [] garante que este efeito rode apenas uma vez

  if (isLoading) {
    return <LoadingScreen />;
  }

  

  return (
    <>
      <Header />
      <Particle />
      <Main />
      <LogoTecnologias />
      <Projetos />
    </>
  );
}

export default App;
