import { faGithub,faLinkedin,faMedium } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Contract = () => {
  return (
    <div>
      <div className="flex items-end">
    <FontAwesomeIcon className="hover:scale-125 hover:bg-primaryTitle transition-all duration-300"icon={faGithub}/>
    <FontAwesomeIcon className="hover:scale-125  hover:bg-primaryTitle transition-all"icon={faMedium}/>
    <FontAwesomeIcon className="hover:scale-125  hover:bg-primaryTitle transition-all"icon={faLinkedin}/>
    </div>
    </div>
  )
}

export default Contract