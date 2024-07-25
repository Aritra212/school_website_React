import classroom from "../assets/classroom1.jpg";
import cultural from "../assets/cultural1.jpg";
import sport1 from "../assets/sports1.jpg";
import science from "../assets/science1.jpg";
import librayImg from "../assets/library1.jpg";
import GalleryCard from "../components/GalleryCard";
// import spor2s from "../assets/sports2.jpg";

function Gallery() {
  const galleryImages = [
    {
      image: sport1,
      name: "Anual Sports Day",
      txt: "Students participating in various sports events.",
    },
    {
      image: science,
      name: "Science Exhibition",
      txt: "Students presenting their science projects",
    },
    {
      image: cultural,
      name: "Cultural Fest",
      txt: "Students performing in the cultural fest",
    },
    {
      image: classroom,
      name: "Classroom",
      txt: "A glimpse of our interactive classrooms.",
    },
    {
      image: librayImg,
      name: "Library",
      txt: "Students reading and studying in the school library.",
    },
  ];
  return (
    <div className="w-3/4 mx-auto flex flex-wrap gap-4 justify-center xl:justify-start">
      {galleryImages?.map((el) => (
        <GalleryCard
          key={el.image}
          image={el.image}
          name={el.name}
          text={el.txt}
        />
      ))}
    </div>
  );
}

export default Gallery;
