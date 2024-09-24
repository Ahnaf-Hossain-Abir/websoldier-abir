import Link from "next/link";

const Header = () => {
  const links = [
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Experience",
      path: "#experience",
    },
    {
      name: "Projects",
      path: "/",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ];
  return (
    <nav className=" h-[17vh] flex justify-around items-center">
      <div>
        <Link href="/">
          <h1 className="text-3xl ">WebSoldier</h1>
        </Link>
      </div>

      <div>
        <ul className="flex items-center gap-x-10 ">
          {links.map((link) => (
            <li className="border-b-2 border-transparent hover:border-gray-300 transition duration-300 hover:text-gray-400 hover:duration-300" key={link.path}>
              <Link className=" text-[24px] font-normal" href={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
