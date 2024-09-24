import Link from "next/link";

const Footer = () => {
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
    <footer className="max-w-screen-lg mx-auto mt-16">
      <div className="w-full flex justify-center">
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

      <div className="w-full flex justify-center mt-10 mb-10">
      <p className="tracking-wider">Copyright © 2024 Ahnaf hossain Abir. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
