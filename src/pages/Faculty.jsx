import img from "../assets/teacher1.jpg";
import FacultyCard from "../components/FacultyCard";

function Faculty() {
  const faculties = [
    {
      name: "John Doe",
      img: img,
      post: "Principal",
      qualification: "M.Ed",
      expreience: "20 years of experience in educational administration",
    },
    {
      name: "Jane Smith",
      img: img,
      post: "Vice Principal",
      qualification: "M.Sc. in Physics",
      expreience: "15 years of teaching experience.",
    },
    {
      name: "Emily Johnson",
      img: img,
      post: "English Teacher",
      qualification: "M.A. in English",
      expreience: "10 years of teaching experience",
    },
    {
      name: "Michael Brown",
      img: img,
      post: "Mathematics Teacher",
      qualification: "M.Sc. in Mathematics",
      expreience: "8 years of teaching experience.",
    },
    {
      name: "Sophia Davis",
      img: img,
      post: "Science Teacher",
      qualification: "M.Sc. in Chemistry",
      expreience: "12 years of teaching experience",
    },
    {
      name: "David Wilson",
      img: img,
      post: "Computer Science Teacher",
      qualification: "B.Tech in Computer Science",
      expreience: "5 years of teaching experience",
    },
  ];
  return (
    <div className="w-3/4 mx-auto my-5 flex flex-wrap gap-5 justify-center">
      {faculties?.map((el) => (
        <FacultyCard
          key={el.name}
          name={el.name}
          imgage={el.img}
          post={el.post}
          qualification={el.qualification}
          expreience={el.expreience}
        />
      ))}
    </div>
  );
}

export default Faculty;
