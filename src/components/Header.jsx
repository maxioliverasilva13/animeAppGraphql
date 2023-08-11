import clsx from "clsx";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

import { useRouter } from "next/router";

const LinkItem = ({ href, text, isIcon = false, children }) => {
  const { pathname } = useRouter();
  const isActivePath = pathname === href;

  return (
    <Link href={href}>
      {isIcon ? (
        children
      ) : (
        <span
          className={clsx(
            "font-medium transition-all hover:text-gray-500 text-[26px] ",
            isActivePath ? "!text-indigo-600" : "text-gray-700"
          )}
        >
          {text}
        </span>
      )}
    </Link>
  );
};

const Header = () => {
  const { pathname } = useRouter();

  return (
    <div className="relative w-full !shadow-lg px-5 py-3 flex flex-row items-center justify-between gap-5 bg-white">
      <div className="w-auto h-auto flex items-center gap-5 justify-start">
        <LinkItem isIcon href="/">
          <AiOutlineHome
            className={clsx(
              "text-[30px] font-semibold -mt-[2px] cursor-pointer",
              pathname === "/" && "text-indigo-600"
            )}
          />
        </LinkItem>
        <LinkItem href="/films" text="Films" />
        <LinkItem href="/anime" text="Anime" />
      </div>

      <div className="flex flex-row gap-4 items-center justify-center">
        <Link href="/login">
          <span>Sign In</span>
        </Link>
        <Link href="/signup">
          <span>Sign Up</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
