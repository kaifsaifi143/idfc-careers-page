const navLinks = [
  "Apply ▾",
  "About the Bank ▾",
  "#TechNEXT",
  "Campus",
  "Banker Training Programs ▾",
  "Help ▾",
];

export default function Navbar() {
  return (
    <header className="bg-[#7a1c1c] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="#"
          className="border border-white/60 px-3 py-2 text-lg leading-tight font-bold"
        >
          IDFC FIRST
          <br />
          Bank
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
          {navLinks.map((link, index) => (
            <a key={index} href="#" className="hover:text-red-200">
              {link}
            </a>
          ))}
          <a href="#" className="hover:text-red-200">
            Login
          </a>
        </nav>
      </div>
    </header>
  );
}