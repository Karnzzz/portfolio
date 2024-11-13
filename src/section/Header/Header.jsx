import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons/faArrowDown";
import { data } from "../../content/header";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="text-3xl text-primaryTitle font-semibold">
          Karn Musikawat
        </div>
        <div className="text-primaryAccent font-semibold">{data.name}</div>
        <div className="text-sm w-5/6">{data.title}</div>
        <div className="mt-4">
          {/* Resume Link */}
          <a href={data.link} target="_blank">
            <span className="bg-primaryTitle text-gray-200 py-2 px-4 rounded-md">
              {data.btnText}
              <span className="rotate-90 inline-block ml-2 text-sm">
                <FontAwesomeIcon
                  className="animate-bounce"
                  icon={faArrowDown}
                />
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
