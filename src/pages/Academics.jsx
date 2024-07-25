import img from "../assets/classroom1.jpg";
import img2 from "../assets/library1.jpg";

function Academics() {
  return (
    <div className="w-3/4 mx-auto my-5">
      <img
        src={img}
        className="w-full max-h-[200px] object-cover object-top sm:max-h-[calc(100vh-200px)]"
      />

      <div className="my-5">
        <p className="text-xl sm:text-4xl font-bold my-2">Curriculum</p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 justify-center sm:w-[90%] sm:mb-3">
          <div className="w-full sm:w-1/2">
            <p className="text-xl font-semibold">Primary (Grades 1-5)</p>
            <p>
              <span className="font-semibold">Subjects - </span> English,
              Mathematics, Science, Social Studies, Art, Physical Education
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-xl font-semibold">Secondary (Grades 6-10)</p>
            <p>
              <span className="font-semibold">Subjects - </span> English,
              Mathematics, Science (Physics, Chemistry, Biology), Social
              Studies, Computer Science, Physical Education, Art
            </p>
          </div>
        </div>
        <div>
          <p className="text-xl font-semibold">
            Senior Secondary (Grades 11-12)
          </p>
          <ul>
            <li>
              <span className="font-semibold">Science Stream: </span>Physics,
              Chemistry, Biology, Mathematics, Computer Science, English
            </li>
            <li>
              <span className="font-semibold">Commerce Stream: </span>{" "}
              Accountancy, Business Studies, Economics, Mathematics, English
            </li>
          </ul>
        </div>
      </div>

      <div className="my-2 flex flex-col sm:flex-row items-center gap-5">
        <img
          src={img}
          className="w-full sm:w-[50%] max-h-[400px] object-cover object-left-top"
        />
        <div>
          <p className="text-xl sm:text-4xl font-bold mb-3">
            Teaching Methodologies
          </p>
          <p>
            We use a blend of traditional and modern teaching techniques to
            cater to different learning styles.
          </p>
        </div>
      </div>

      <div className=" my-2 flex flex-col sm:flex-row items-center gap-5">
        <div className="sm:text-right">
          <p className="text-xl sm:text-4xl font-bold mb-3">
            Educational Resources
          </p>
          <p>
            Digital classrooms, interactive learning modules, and access to
            online educational platforms.
          </p>
        </div>
        <img
          src={img2}
          className="w-full sm:w-[50%] max-h-[400px] object-cover object-left-top"
        />
      </div>
    </div>
  );
}

export default Academics;
