import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
const Nav = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 font-semibold">
            <div>
            <FontAwesomeIcon className="mr-2 text-primaryTitle" icon={faArrowRight}/>
            About
            </div>
           <div>Experience</div>
           <div>Project</div>
           <div>Article</div>
          </div>
    </div>
  )
}

export default Nav