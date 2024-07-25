import img from "../assets/science1.jpg";
import pdf from "../assets/form.pdf";
function Admissions() {
  return (
    <div className="w-3/4 mx-auto my-5">
      <div className="my-2 flex flex-col sm:flex-row items-center gap-5">
        <div>
          <p className="text-xl sm:text-4xl font-bold mb-2">
            Admission Process
          </p>
          <p className="mb-3">
            Admission forms are available for download. Submit the completed
            form along with required documents at the school office.
          </p>
          <a href={pdf} target="_blank">
            <div className=" bg-black text-white font-bold w-fit px-5 py-1 sm:py-3 rounded-md mt-2 sm:mt-8 cursor-pointer border-solid border-2 border-white hover:text-black hover:bg-white  hover:border-black">
              Download Form
            </div>
          </a>
        </div>
        <img
          src={img}
          className="w-full sm:w-[70%] max-h-[400px] object-cover object-left-top"
        />
      </div>

      <div>
        <p className="text-xl sm:text-4xl font-bold text-gray-800">
          Important Dates
        </p>
        <ul className="list-disc p-4 pl-5">
          <li>
            Admission Form Availability{" "}
            <span className="font-semibold text-red-500">March 1st</span>
          </li>
          <li>
            Last Date for Submission{" "}
            <span className="font-semibold text-red-500">March 31st</span>
          </li>
          <li>
            Entrance Test{" "}
            <span className="font-semibold text-red-500">April 15th</span>
          </li>
          <li>
            Announcement of Results{" "}
            <span className="font-semibold text-red-500">April 30th</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Admissions;
