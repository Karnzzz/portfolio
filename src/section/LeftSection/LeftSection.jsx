import Header from "../Header/Header"
import Nav from "../Nav/Nav"
import Contract from "../Contract/Contract"


const LeftSection = () => {
  return (
    <div className="px-3">
        <div className="sticky top-14 grid gap-y-5 lg:grid-rows-[35%_45%_20%] lg:h-[87vh] ">
          <Header />
          <Nav/>
          <Contract />
        </div>
    </div>
  )
}

export default LeftSection