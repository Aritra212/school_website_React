import img from "../assets/library1.jpg";
import principal from "../assets/teacher1.jpg";

function About() {
  return (
    <div className="w-3/4 mx-auto my-5">
      <img
        src={img}
        className="w-full max-h-[200px] object-cover object-top sm:max-h-[calc(100vh-100px)]"
      />
      <div className="my-5">
        <p className="text-3xl font-bold text-gray-600 mb-3">History</p>
        <p>
          Founded in 1985, Springdale Public School has been dedicated to
          providing quality education and holistic development to students.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          nemo qui inventore, quae mollitia sit eius ipsa molestias beatae quo
          harum, iusto laborum at temporibus dolores corrupti ratione?
          Reiciendis, commodi.
        </p>
      </div>
      <div className="my-5">
        <p className="text-3xl font-bold text-gray-600 mb-3">Vision</p>
        <p>
          To create a learning environment that fosters academic excellence,
          critical thinking, and ethical values. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Accusamus ut voluptatem eum eligendi
          aliquid impedit recusandae sunt deleniti maiores? Iure sunt distinctio
          expedita modi quam itaque dolorum, doloribus ullam fuga?
        </p>
      </div>
      <div className="my-5">
        <p className="text-3xl font-bold text-gray-600 mb-3">Mission</p>
        <p>
          To empower students with the knowledge, skills, and values needed to
          thrive in a dynamic world. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eligendi veniam laborum quae pariatur neque itaque
          non sit reiciendis adipisci iste illo, eius aperiam reprehenderit rem
          distinctio dolorum necessitatibus repudiandae? Vitae.
        </p>
      </div>
      <div className="my-5">
        <p className="text-3xl font-bold text-gray-600">
          Infrastructure and Facilities
        </p>
        <ul className="list-disc p-4 pl-5">
          <li>State-of-the-art science and computer labs</li>
          <li>Spacious and well-equipped classrooms</li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>
            Sports facilities including a playground, gymnasium, and swimming
            pool
          </li>
        </ul>
      </div>

      <div className="w-3/4 mx-auto shadow-md p-5 flex flex-col gap-[20px] justify-center items-center border-solid border-2 border-gray-300 md:flex-row md:p-10">
        <img
          src={principal}
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
    </div>
  );
}

export default About;
