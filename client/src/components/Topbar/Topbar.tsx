import { auth } from "@/firebase/firebase";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Logout from "../Buttons/Logout";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight,FaBarcode } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import Timer from "../Timer/Timer";
import { useRouter } from "next/router";
import { problems } from "@/utils/problems";
import { Problem } from "@/utils/types/problem";
import useWindowSize from "@/hooks/useWindowSize";
type TopbarProps = {
  problemPage?: boolean;
};
type navLinksProp = {
  name: string;
  path: string;
};
const navLinks: navLinksProp[] = [
  { name: "Problems", path: "/" },
  { name: "Contest", path: "/contest" },
  { name: "Discuss", path: "/discuss" },
  { name: "Interview", path: "/interview" },
  { name: "Store", path: "/store" },
];
const Topbar: React.FC<TopbarProps> = ({ problemPage }) => {
  const windowSize = useWindowSize();
  const [mobShow, setMobShow] = useState<boolean>();
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);
  const router = useRouter();
  const [path] = useState<string>(router.pathname);
  useEffect(() => {
    if (windowSize.width <= 768) {
      setMobShow(false);
    } else {
      setMobShow(true);
    }
  }, [windowSize]);
  const handleProblemChange = (isForward: boolean) => {
    const { order } = problems[router.query.pid as string] as Problem;
    const direction = isForward ? 1 : -1;
    const nextProblemOrder = order + direction;
    const nextProblemKey = Object.keys(problems).find(
      (key) => problems[key].order === nextProblemOrder
    );

    if (isForward && !nextProblemKey) {
      const firstProblemKey = Object.keys(problems).find(
        (key) => problems[key].order === 1
      );
      router.push(`/problems/${firstProblemKey}`);
    } else if (!isForward && !nextProblemKey) {
      const lastProblemKey = Object.keys(problems).find(
        (key) => problems[key].order === Object.keys(problems).length
      );
      router.push(`/problems/${lastProblemKey}`);
    } else {
      router.push(`/problems/${nextProblemKey}`);
    }
  };

  return (
    <nav className="relative flex h-[55px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
      <div className={`flex w-full items-center justify-between`}>
        <Link href="/" className="h-[22px] -mt-24">
          <Image src="/logo-full.png" alt="Logo" height={130} width={130} className="cursor-pointer" />
        </Link>
        {mobShow && (
          <div
            className={`z-50 flex items-center gap-3 text-gray-500 w-auto px-5 py-3 md:py-0 md:mt-3 mt-0 md:pl-5 md:relative absolute top-14 md:top-0  md:flex-row flex-col font-sans font-medium`}
          >
            {navLinks.map((link, idx) => (
              <Link
                href={link.path}
                key={idx}
                className={`${
                  path === link.path
                    ? "text-white border-white border-b-2 transition-all ease-linear duration-100"
                    : ""
                } text-lg font-medium pb-4`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}

        {problemPage && (
          <div className="items-center gap-4 flex-1 hidden md:flex justify-center">
            <div
              className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
              onClick={() => handleProblemChange(false)}
            >
              <FaChevronLeft />
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer"
            >
              <div>
                <BsList />
              </div>
              <p>Problem List</p>
            </Link>
            <div
              className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
              onClick={() => handleProblemChange(true)}
            >
              <FaChevronRight />
            </div>
          </div>
        )}

        <div className="flex items-center space-x-4 flex-1 justify-end">
          <div>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange md:block hidden hover:bg-dark-fill-2"
            >
              Premium
            </a>
          </div>
          {!user && (
            <Link
              href="/auth"
              onClick={() =>
                setAuthModalState((prev) => ({
                  ...prev,
                  isOpen: true,
                  type: "login",
                }))
              }
            >
              <button className="bg-dark-fill-3 py-1 px-2 cursor-pointer rounded ">
                Sign In
              </button>
            </Link>
          )}
          {user && problemPage && <Timer />}
          {user && (
            <div className="cursor-pointer group relative">
              <Image
                src="/avatar.png"
                alt="Avatar"
                width={30}
                height={30}
                className="rounded-full"
              />
              <div
                className="absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg 
								z-40 group-hover:scale-100 scale-0 
								transition-all duration-300 ease-in-out"
              >
                <p className="text-sm">{user.email}</p>
              </div>
            </div>
          )}
          {user && <Logout />}
          <IoMenu className="text-2xl cursor-pointer md:hidden" onClick={()=>setMobShow((prev)=>!prev)}/>
        </div>
      </div>
    </nav>
  );
};
export default Topbar;
