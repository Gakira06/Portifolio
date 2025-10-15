const Area = ({areas,filtroItems}) => {

  const produtos =(area)=>{
    switch(area.toLowerCase()){
      case "FrontEnd":
        return;
      case "FullStack":
        return;
      case "dados":
        return;
      default:
        return null;//nenhuma opção
    }
  }

  return (
  <nav className="flex justify-center flex-wrap gap-4 mb-12">
      {areas.map((area, index) => (
        <button
          key={index}
          onClick={() => filtroItems(area)}
          className="bg-slate-800 text-white border-none rounded-lg px-5 py-3 text-base cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:bg-red-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50"
        >
          {produtos(area)}
          {area}
        </button>
      ))}
    </nav>
  )
}

export default Area