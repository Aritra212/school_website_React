// eslint-disable-next-line react/prop-types
function GalleryCard({ image, name, text }) {
  return (
    <div className="w-[300px] h-fit p-5 box-border shadow-md">
      <div>
        <img src={image} />
      </div>
      <div className="text-center mt-3">
        <p className="text-lg font-bold text-gray-600">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default GalleryCard;
