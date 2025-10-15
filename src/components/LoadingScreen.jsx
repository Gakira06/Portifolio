import React from "react";
import VideoLoading from "../assets/videos/velocimetroLoading.mp4";

const LoadingScreen = () => {
  return (
    <div className="bg-fundoLoading h-screen flex justify-center items-center">
      {/* Adicionando autoPlay, loop e muted para o vídeo rodar automaticamente, em loop e sem som */}
      <video src={VideoLoading} autoPlay loop muted className="w-150" />
    </div>
  );
};

export default LoadingScreen;
