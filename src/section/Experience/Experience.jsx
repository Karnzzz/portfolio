import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons";
import projectpng from '../../assets/project.png';
import dog from '../../assets/dog.jpg';
import { useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  const [isMouseEnter, setIsMouseEnter] = useState({ exp1: false, exp2: false });

  return (
    <div>
      <div className="text-primaryAccent font-medium">Experience</div>

      {/* First Experience */}
      <div
        className={`grid grid-cols-[25%_75%] px-2 py-6 transition-all ${
          isMouseEnter.exp1 ? "bg-primaryBase" : ""
        }`}
        onMouseEnter={() => setIsMouseEnter((prev) => ({ ...prev, exp1: true }))}
        onMouseLeave={() => setIsMouseEnter((prev) => ({ ...prev, exp1: false }))}
      >
        <div>
          <div className="text-1xl">
            <span className={`text-sm ${isMouseEnter.exp1 ? "text-primaryTitle" : ""}`}>2023-2024</span>
          </div>
          <div>
            <img className="rounded w-5/6 border-2" src={projectpng} alt="Experience Project" />
          </div>
        </div>
        <div className="grid gap-y-4">
          <div className={isMouseEnter.exp1 ? "text-primaryTitle" : ""}>E-Commerce
            <FontAwesomeIcon className={`text-xs -rotate-45 duration-300 ${isMouseEnter ['exp1'] ? "translate-x-1 -translate-y-1": ""}`} icon={faArrowRight}/>
          </div>

          <div className="flex gap-4 text-lg">
            <a href="https://github.com/karnzzz" target="_blank"><FontAwesomeIcon
              className="hover:scale-125 hover:bg-primaryTitle transition-all duration-300"
              icon={faGithub}
            />
            </a>
            <a href="" target="_blank">
            <FontAwesomeIcon
              className="hover:scale-125 hover:bg-primaryTitle transition-all"
              icon={faMedium}
            />
            </a>

            <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin" target="_blank">
            <FontAwesomeIcon
              className="hover:scale-125 hover:bg-primaryTitle transition-all"
              icon={faLinkedin}
            />
            </a>

          </div>
          <div>A simple E-commerce Website</div>
          <div className="flex gap-3 text-sm">
            <div className={`bg-primarySubcontent px-2 py-1 rounded-sm ${isMouseEnter.exp1 ? "text-primaryTitle" : ""}`}>React</div>
            <div className={`bg-primarySubcontent px-2 py-1 rounded-sm ${isMouseEnter.exp1 ? "text-primaryTitle" : ""}`}>Tailwind</div>
          </div>
        </div>
      </div>

      {/* Second Experience */}
      <div
        className={`grid grid-cols-[25%_75%] px-2 py-6 transition-all ${
          isMouseEnter.exp2 ? "bg-primaryBase" : ""
        }`}
        onMouseEnter={() => setIsMouseEnter((prev) => ({ ...prev, exp2: true }))}
        onMouseLeave={() => setIsMouseEnter((prev) => ({ ...prev, exp2: false }))}
      >
        <div>
          <div className="text-1xl">
            <span className={`text-sm ${isMouseEnter.exp2 ? "text-primaryTitle" : ""}`}>2023-2024</span>
          </div>
          <div>
            <img className="rounded w-5/6 border-2 border-primarySubcontent" src={dog} alt="Experience Dog" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className={isMouseEnter.exp2 ? "text-primaryTitle" : ""}>Developer Portfolio
          <FontAwesomeIcon className={`text-xs -rotate-45 duration-300 ${isMouseEnter ['exp2'] ? "translate-x-1 -translate-y-1": ""}`} icon={faArrowRight}/>
          </div>
          <div className="flex gap-4 text-lg">
          <a href="https://github.com/karnzzz" target="_blank" className="hover:scale-110">
            <FontAwesomeIcon
              className="hover:scale-125 hover:bg-primaryTitle transition-all duration-300"
              icon={faGithub}
            />
            </a>

            <a href="" target="_blank">
            <FontAwesomeIcon
              className="hover:scale-125 hover:bg-primaryTitle transition-all"
              icon={faMedium}
            />
            </a>

            <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin" target="_blank">
            <FontAwesomeIcon
              className="hover:scale-125 hover:bg-primaryTitle transition-all"
              icon={faLinkedin}
            />
            </a>
          </div>
          <div>A simple and minimalist portfolio built with React and TailwindCSS</div>
          <div className="flex gap-3 text-sm">
            <div className={`bg-primarySubcontent px-2 py-1 rounded-sm ${isMouseEnter.exp2 ? "text-primaryTitle" : ""}`}>React</div>
            <div className={`bg-primarySubcontent px-2 py-1 rounded-sm ${isMouseEnter.exp2 ? "text-primaryTitle" : ""}`}>Tailwind</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
