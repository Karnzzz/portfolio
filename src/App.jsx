
import LeftSection from "./section/LeftSection/LeftSection";
import RightSection from "./section/RightSection/RightSection";

function App() {
  return (
    <>
    <div className="mt-14 mx-auto max-w-6xl grid gap-y-4 lg:grid-cols-[40%_60%] ">
      <LeftSection/>
      <RightSection />
      
    </div>
    </>
  );
}

export default App;
