import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import ExpandedAnime from "./ExpandedAnime";
import { getStars } from "../utils/animeUtils";

const AnimeItem = ({ item }) => {
  const average = item?.averageScore;
  const stars = getStars(average);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      window.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
          setIsExpanded(false);
        }
      });
    }
  }, [isExpanded]);

  return (
    <div
    onClick={() => !isExpanded && setIsExpanded(true)}
    className={clsx("transition-all", "w-auto h-auto relative")}>
      {isExpanded && (
        <ExpandedAnime
          item={item}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
      )}

        <div
          onClick={() => () => setIsExpanded(true)}
          role="button"
          className={clsx(
            "transition-all",
            "w-[230px] overflow-hidden h-[300px] relative rounded-md transform hover:scale-110 cursor-pointer shadow-md flex flex-col items-start gap-2 justify-start"
          )}
          key={item?.id}
        >
          <Image
            layout="fill"
            objectFit="cover"
            className="z-[4]"
            alt="Anime Image"
            src={item?.coverImage?.large || item?.coverImage?.medium}
            loader={() => item?.coverImage?.large || item?.coverImage?.medium}
          />
          <div className="z-[4] w-[230px] h-[300px]">

          </div>
          <span className="text-base flex flex-grow max-w-full flex-row items-center justify-between bg-black bg-opacity-50 px-4 py-2 text-white font-medium absolute bottom-0 left-0 right-0 mx-auto gap-2 z-[5]">
            <span className="flex flex-grow max-w-full truncate">
              {item?.title?.english || item?.title?.romaji || "No-Name"}
            </span>

            <div className="flex flex-row items-center justify-start gap-1">
              <AiFillStar color="yellow" className="text-yellow" />
              <span className="text-[18px] font-semibold text-white">
                {stars}
              </span>
            </div>
          </span>
        </div>
    </div>
  );
};

export default AnimeItem;
