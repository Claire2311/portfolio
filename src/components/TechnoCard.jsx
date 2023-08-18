import test from "../assets/images/technos/excel.png";

function TechnoCard({ name, image }) {
  return (
    <div className="flex  border-gray-300 border-t border-r-white border-r-[80px]">
      <div className="w-14">
        <img src={`${image}`} className="h-12 py-2 m-auto" />
      </div>
      <h1 className="self-center ml-2">{name}</h1>
    </div>
  );
}

export default TechnoCard;
