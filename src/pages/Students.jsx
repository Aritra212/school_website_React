import img from "../assets/sports1.jpg";
import img2 from "../assets/teacher1.jpg";
import AchievementCard from "../components/AchievementCard";

function Students() {
  const achievements = [
    {
      image: img2,
      name: "John Smith",
      win: "National Level Math Olympiad Winner",
    },
    {
      image: img2,
      name: "Sarah Lee",
      win: "Gold Medalist in State Swimming Championship",
    },
    {
      image: img2,
      name: "Tech Innovators Club",
      win: "Winners of Inter-School Robotics Competition",
    },
  ];
  return (
    <div className="w-3/4 mx-auto my-5">
      <div className="my-2 flex flex-col sm:flex-row items-center gap-5">
        <div>
          <p className="text-xl sm:text-4xl font-bold mb-2">
            Life at Springdale
          </p>
          <ul className="mb-3 list-disc list-inside p-4">
            <li className="mb-2">
              <span className="font-semibold">
                Extracurricular Activities:{" "}
              </span>{" "}
              Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science
              Club
            </li>
            <li>
              <span className="font-semibold">Clubs and Societies: </span>{" "}
              Literary Society, Environmental Club, Astronomy Club, Coding Club
            </li>
          </ul>
        </div>
        <img
          src={img}
          alt=""
          className="w-full sm:w-[70%] max-h-[400px] object-cover object-left-top"
        />
      </div>

      <div>
        <p className="text-xl sm:text-4xl font-bold mb-4">Achievements</p>
        <div className="w-full flex flex-wrap gap-4 justify-center xl:justify-start">
          {achievements?.map((el) => (
            <AchievementCard
              key={el.name}
              image={el.image}
              name={el.name}
              win={el.win}
            />
          ))}
        </div>
      </div>
      <div className="mt-5">
        <p className="text-xl sm:text-4xl font-bold mb-4">Student Council</p>
        <ul className="mb-3 list-disc list-inside p-4">
          <li>
            <span className="font-semibold">President: </span> Amy Parker, Grade
            12
          </li>
          <li>
            <span className="font-semibold">Vice President: </span>Rajiv Mehta,
            Grade 11
          </li>
          <li>
            <span className="font-semibold">Secretary: </span>Lisa Wong, Grade
            10
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Students;
