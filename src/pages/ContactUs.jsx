function ContactUs() {
  return (
    <div className="w-3/4 mx-auto my-5 h-[calc(100vh-150px)]">
      <div className=" my-2 flex flex-col sm:flex-row items-center justify-center gap-5">
        <div className="sm:w-[40%]">
          <p className="text-xl sm:text-4xl font-bold mb-2">Contant Us</p>
          <ul>
            <li>
              <span className="font-bold">Address: </span>Springdale Public
              School, 123 Education Lane, Cityville, State, ZIP Code
            </li>
            <li>
              <span className="font-bold">Phone: </span>+1 (123) 456-7890
            </li>
            <li>
              <span className="font-bold">Email: </span>info@springdale.edu
            </li>
          </ul>
        </div>
        <div className="sm:w-[50%] h-[300px] mb-5">
          <iframe
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(Springdale%20Public%20School)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
