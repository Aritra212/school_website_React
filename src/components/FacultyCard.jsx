import { PropTypes } from "prop-types";

function FacultyCard({
  name,
  imgage,
  post,
  qualification = "",
  expreience = "",
}) {
  return (
    <div className="flex flex-col sm:flex-row p-5 box-border items-center gap-5 shadow-md border-solid border-gray-200 border-2">
      <div>
        <img src={imgage} className="w-[200px] h-[200px] rounded-md" />
      </div>
      <div className="w-[250px]">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-sm font-semibold">{post}</p>
        <p className="text-sm text-gray-500">{qualification}</p>
        <p className="text-xs">{expreience}</p>
      </div>
    </div>
  );
}

FacultyCard.propTypes = {
  name: PropTypes.string,
  imgage: PropTypes.string,
  post: PropTypes.string,
  qualification: PropTypes.string,
  expreience: PropTypes.string,
};
export default FacultyCard;
