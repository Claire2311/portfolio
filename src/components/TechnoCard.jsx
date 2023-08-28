import PropTypes from "prop-types";
function TechnoCard({ name, image }) {
  return (
    <div className="flex  border-gray-300 border-t border-r-lightblue border-r-[80px]">
      <div className="w-14">
        <img src={`/public/images/${image}`} className="h-12 py-2 m-auto" />
      </div>
      <h1 className="self-center ml-2">{name}</h1>
    </div>
  );
}

TechnoCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TechnoCard;
