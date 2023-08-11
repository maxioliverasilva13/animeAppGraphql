import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen relative">
      <div className="w-full h-full bg-white flex flex-col items-start font-semibold text-[30px] justify-start gap-5 md:p-10 p-4">
        <h1>Star wars API with GraphQL</h1>
      </div>
    </div>
  );
}
