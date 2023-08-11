import clsx from "clsx";
import { AiFillStar } from "react-icons/ai";
import { getStars } from "../utils/animeUtils";
import Image from "next/image";
import { SharedElement, MotionScene } from "react-motion-layout";
import { defaultImageBanner } from "../utils/imageUtils";
import { IoMdClose } from "react-icons/io";
import ImageWithLoader from "./ImageWithLoader";

const ExpandedAnime = ({ isExpanded, setIsExpanded, item }) => {
  const average = item?.averageScore;
  const stars = getStars(average);

  return (
    <div
      className={clsx(
        "transition-all expandedAnimeAnimation",
        "fixed w-screen z-[999999] transition-all flex items-center justify-center h-screen inset-0 bg-black bg-opacity-70"
      )}
    >
      <button
        className="absolute z-[99999] top-5 right-5"
        onClick={() => {
            setIsExpanded(false);
            console.log("xd")
        }}
      >
        <IoMdClose role="button" className="text-white" color="white" />
      </button>
      <div
        className={clsx(
          "transition-all flex flex-col items-start justify-start",
          "relative z-[99999] w-[80%] h-[70%]"
        )}
        key={item?.id}
      >
        <div className="w-full relative h-[300px] z-[4]">
          <ImageWithLoader
            layout="fill"
            objectFit="cover"
            className="rounded-t-[20px] select-none rounded-b-[10px]"
            src={item?.bannerImage || defaultImageBanner}
            loader={() => item?.bannerImage || defaultImageBanner}
          />
          <div className="w-[120px] h-[120px] border-4 border-white rounded-full left-0 right-0 -bottom-[50px] mx-auto overflow-hidden z-[4] absolute flex flex-col">
            <ImageWithLoader
              layout="fill"
              className="select-none"
              objectFit="cover"
              src={item?.coverImage?.large || item?.coverImage?.medium}
              loader={() => item?.coverImage?.large || item?.coverImage?.medium}
            />
          </div>
        </div>

        <div className="w-full h-full flex max-h-full overflo-auto pt-14 font-medium flex-grow bg-gray-900 bg-opacity-40">
          <span className="text-center px-10 text-white text-base ">
            {item?.description}
          </span>
        </div>

        <span className="text-base w-full rounded-b-[20px] flex flex-grow max-w-full flex-row items-center justify-between bg-black bg-opacity-50 px-4 py-2 text-white font-medium bottom-0 left-0 right-0 mx-auto gap-2 z-[5]">
          <span className="flex flex-grow max-w-full truncate">
            {item?.title?.english || item?.title?.romaji || "No-Name"}
          </span>

          <div className="flex flex-row items-center justify-start gap-1">
            <AiFillStar color="yellow" className="text-yellow" />
            <span className="text-[20px] font-bold text-white">{stars}</span>
          </div>
        </span>
      </div>
    </div>
  );
};

export default ExpandedAnime;
