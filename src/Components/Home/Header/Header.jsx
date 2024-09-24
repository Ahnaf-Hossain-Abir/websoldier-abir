import Link from "next/link";

const Header = () => {
  const links = [
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Experience",
      path: "/",
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
            <li key={link.path}>
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
