import slImg1 from "../assets/classroom1.jpg";
import slImg2 from "../assets/cultural1.jpg";
import slImg3 from "../assets/sports1.jpg";
import slImg4 from "../assets/science1.jpg";
import librayImg from "../assets/library1.jpg";
import sports from "../assets/sports2.jpg";
import teacher from "../assets/teacher1.jpg";
import Slider from "../components/Slider/Slider";
import { PiStudent } from "react-icons/pi";
import { BiMedal } from "react-icons/bi";
import { GrNotes } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function Home() {
  const sliderImages = [
    {
      src: slImg1,
      heading: "Welcome to Springdale Public School,",
      text: " where we nurture young minds for a brighter future.",
      btnUrl: "/about",
      btnTxt: "About Us",
    },
    {
      src: slImg2,
      heading: "Cultural Fest",
      text: "Embracing Diversity and Creativity",
      btnUrl: "/gallery",
      btnTxt: "Gallery",
    },
    {
      src: slImg3,
      heading: "Annual Sports Day",
      text: " Celebrating Excellence in Sports",
      btnUrl: "/gallery",
      btnTxt: "Gallery",
    },
    {
      src: slImg4,
      heading: "Science Exhibition",
      text: "Showcasing Student Innovations",
      btnUrl: "/gallery",
      btnTxt: "Gallery",
    },
  ];

  const facultyImages = [
    {
      src: teacher,
      name: "ABC Paul",
    },
    {
      src: teacher,
      name: "ABC Paul",
    },
    {
      src: teacher,
      name: "ABC Paul",
    },
    {
      src: teacher,
      name: "ABC Paul",
    },
    {
      src: teacher,
      name: "ABC Paul",
    },
  ];

  const noticeDetails = [
    {
      name: "Notice Heading",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quas, distinctio doloremque.",
      url: "/",
    },
    {
      name: "Notice Heading",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quas, distinctio doloremque.",
      url: "/",
    },
    {
      name: "Notice Heading",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quas, distinctio doloremque.",
      url: "/",
    },
    {
      name: "Notice Heading",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quas, distinctio doloremque.",
      url: "/",
    },
  ];

  const Events = [
    {
      name: "Event Heading",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quas, distinctio doloremque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quas, distinctio doloremque.",
      url: "/",
    },
    {
      name: "Event Heading",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quas, distinctio doloremque.",
      url: "/",
    },
    {
      name: "Event Heading",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quas, distinctio doloremque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quas, distinctio doloremque.",
      url: "/",
    },
    {
      name: "Event Heading",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quas, distinctio doloremque.",
      url: "/",
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="my-1">
      <div>
        <Slider images={sliderImages} />
        <div className="bg-gray-900 w-full h-[200px]">
          <div className="w-3/4 flex justify-between items-center mx-auto h-full">
            <div className="flex flex-col gap-1 text-center w-fit p-3">
              <PiStudent className="text-gray-400 text-2xl sm:text-5xl mx-auto" />
              <p className="text-orange-600 sm:text-4xl">2000+</p>
              <p className="text-gray-200 sm:text-2xl">Total Students</p>
            </div>
            <div className="flex flex-col gap-1 text-center w-fit p-3">
              <GrNotes className="text-gray-400 sm:text-5xl mx-auto" />
              <p className="text-orange-600 sm:text-4xl">20+</p>
              <p className="text-gray-200 text-xs sm:text-2xl">
                Number Of Courses
              </p>
            </div>
            <div className="flex flex-col gap-1 text-center w-fit p-3">
              <BiMedal className="text-gray-400 sm:text-5xl mx-auto" />
              <p className="text-orange-600 sm:text-4xl">60+</p>
              <p className="text-gray-200 sm:text-2xl">International Awards</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/4 mx-auto my-2 mt-8 flex flex-col sm:flex-row justify-center items-center gap-7 sm:gap-5">
        <img
          src={librayImg}
          className="w-full sm:w-[50%] max-h-[400px] object-cover object-left-top"
        />
        <div>
          <p className="text-2xl sm:text-5xl font-bold mb-5">Our Mission</p>
          <p className="sm:text-lg">
            To empower students with the knowledge, skills, and values needed to
            thrive in a dynamic world.
          </p>
          <div
            onClick={() => navigate("/about")}
            className=" bg-black text-white font-semibold sm:font-bold w-fit px-5 py-1 sm:py-3 rounded-md mt-2 sm:mt-8 cursor-pointer border-solid border-2 border-white hover:text-black hover:bg-white  hover:border-black"
          >
            About Us
          </div>
        </div>
      </div>

      <div className="w-3/4 mx-auto my-2 flex flex-col sm:flex-row justify-center items-center gap-5">
        <div>
          <p className="text-2xl sm:text-5xl font-bold mb-5">We Have</p>
          <ul className="list-disc sm:p-4 pl-5">
            <li>State-of-the-art science and computer labs</li>
            <li>Spacious and well-equipped classrooms</li>
            <li>
              Library with a vast collection of books and digital resources
            </li>
            <li>
              Sports facilities including a playground, gymnasium, and swimming
              pool
            </li>
          </ul>
          <div
            onClick={() => navigate("/gallery")}
            className=" bg-black text-white font-bold w-fit px-5 py-1 sm:py-3 rounded-md mt-2 sm:mt-8 cursor-pointer border-solid border-2 border-white hover:text-black hover:bg-white  hover:border-black"
          >
            View Gallery
          </div>
        </div>
        <img
          src={sports}
          className="w-full sm:w-[50%] max-h-[400px] object-cover object-left-top"
        />
      </div>

      <div className="w-3/4 mx-auto my-7 text-center">
        <p className="text-2xl sm:text-5xl font-bold">Our Faculty</p>
        <div className="flex gap-5 sm:justify-center sm:gap-[80px] overflow-x-auto w-full mx-auto mt-10">
          {facultyImages?.map((el, index) => (
            <div key={index} className="">
              <img
                src={el.src}
                alt="teacher"
                className="min-w-[100px] h-[100px] rounded-full object-center object-cover"
              />
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-3/4 mx-auto shadow-md p-5 flex flex-col gap-[20px] justify-center items-center border-solid border-2 border-gray-300 md:flex-row md:p-10">
        <img
          src={teacher}
          alt="principal"
          className="w-[200px] h-[200px] object-cover"
        />
        <div>
          <p className="max-w-[600px]">
            &quot;At Springdale, we believe in nurturing the potential of every
            student and guiding them towards a successful future.&quot;
          </p>
          <div className="w-full text-right">
            <p className="font-semibold">- Abc Paul</p>
            <p>Principal</p>
          </div>
        </div>
      </div>

      <div className="w-3/4 flex flex-col sm:flex-row justify-between mx-auto mt-2 sm:p-5 box-border">
        <div className="w-full sm:w-1/2">
          <p className="text-2xl font-bold mb-3">Recent Events</p>
          <div className="w-full p-3 box-border h-[400px] overflow-y-scroll">
            {Events?.map((el, index) => (
              <div key={index} className="mb-3">
                <p className="text-lg font-semibold">{el.name}</p>
                <p>{el.description.substring(0, 200)}...</p>
                <p className="text-blue-400 cursor-pointer">view details</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <p className="text-2xl font-bold mb-3">Notice Board</p>
          <div className="w-full p-3 box-border h-[400px] overflow-y-scroll">
            {noticeDetails?.map((el, index) => (
              <div key={index} className="mb-3">
                <p className="text-lg font-semibold">{el.name}</p>
                <p>{el.description.substring(0, 200)}</p>
                <p className="text-blue-400 cursor-pointer">view details</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
