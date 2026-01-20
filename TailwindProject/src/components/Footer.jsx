const Footer = () => {
  return (
    <div className="w-full lg:h-105 bg-zinc-900 mt-20 text-white py-10 overflow-hidden">
      <div className="container px-10 lg:ml-10  ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Section 1: Let's Connect */}
          <div className="">
            <h2 className="text-4xl font-mono font-bold mb-4 tracking-tighter text-orange-500">
              Let's Connect
            </h2>
            <p className="mb-2 text-xl">
              <span className="font-bold font-[poppins]">Phone</span>: +1 (123)
              456-7890
            </p>
            <p className="mb-2 text-xl">
              <span className="font-bold font-[poppins]">Email</span>:
              info@example.com
            </p>
            <p className="text-xl">
              <span className="font-bold font-[poppins]">Address</span>: 123
              Main St, City, State 12345
            </p>
          </div>
          {/* Section 2: Social Links */}
          <div className="lg:ml-10">
            <h2 className="text-4xl font-mono font-bold mb-4 tracking-tighter text-orange-500">
              Follow Us
            </h2>
            <ul className="space-y-3 ">
              <li>
                <a
                  href="#"
                  className="w-10 h-10  font-[poppins] bg-zinc-700 rounded-lg text-lg px-2 py-1 hover:text-gray-300 transition-colors hover:underline"
                >
                  <i className="ri-twitter-x-line mr-3"></i>
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="w-10 h-10 font-[poppins] bg-zinc-700 rounded-lg text-lg px-2 py-1 hover:text-gray-300 transition-colors hover:underline"
                >
                  <i className="ri-facebook-circle-line mr-3"></i>Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="w-10 h-10 font-[poppins] bg-zinc-700 rounded-lg text-lg px-2 py-1 hover:text-gray-300 transition-colors hover:underline"
                >
                  <i className="ri-threads-line mr-3"></i>Threads
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="w-10 h-10 font-[poppins] bg-zinc-700 rounded-lg text-lg px-2 py-1 hover:text-gray-300 transition-colors hover:underline"
                >
                  <i className="ri-instagram-line mr-3"></i>Instagram
                </a>
              </li>
            </ul>
          </div>
          {/* Section 3: Our Services */}
          <div className="">
            <h2 className="text-4xl font-mono font-bold mb-4 tracking-tighter text-orange-500">
              Our Services
            </h2>
            <ul className="space-y-2 text-3xl text-zinc-300">
              <li className="font-bold font-[poppins]">Design & Freedom</li>
              <li className="font-bold font-[poppins]">Quality</li>
              <li className="font-bold font-[poppins]">Sustainability</li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex p-0">
          <h1 className="font-mono font-bold  text-orange-500 lg:text-[12rem] text-center">
            DVSY
          </h1>
          <h1 className="font-mono font-bold  text-orange-500 lg:text-[12rem] text-center ">
            DVSY
          </h1>
          <h1 className="font-mono font-bold  text-orange-500 lg:text-[12rem] text-center ">
            DVSY
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
