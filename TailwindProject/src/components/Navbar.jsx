import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navbtn = [
    "Designer",
    "Collabs",
    "Events",
    "Blogs",
    "Cards",
    "Get in Touch",
  ];

  return (
    <nav className="w-full px-4 py-3 font-bebas">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h2 className="text-2xl md:text-3xl">DVSY</h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3">
          {navbtn.map((elem, idx) => (
            <button
              key={idx}
              className="bg-zinc-800 hover:bg-orange-600 px-3 py-1 rounded-sm text-lg transition"
            >
              {elem}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mt-4 flex flex-col gap-3 md:hidden">
          {navbtn.map((elem, idx) => (
            <button
              key={idx}
              className="bg-gray-800 hover:bg-orange-600 px-4 py-2 rounded-sm text-lg transition"
              onClick={() => setOpen(false)}
            >
              {elem}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
