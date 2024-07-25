import { PropTypes } from "prop-types";

function AchievementCard({ image, name, win }) {
  return (
    <div className="w-[250px] h-[200px] border-solid border-gray-300 border-2 flex flex-col justify-center items-center rounded-md p-3 box-border">
      <img src={image} alt="" className="w-[100px] h-[100px] rounded-full" />
      <div className="text-center">
        <p className="text-xl font-bold text-gray-500">{name}</p>
        <p className="font-semibold text-gray-700">{win}</p>
      </div>
    </div>
  );
}

AchievementCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  win: PropTypes.string,
};
export default AchievementCard;
