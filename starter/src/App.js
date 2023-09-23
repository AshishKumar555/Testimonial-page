import React from "react";
import Testimonals from "./components/Testimonials";
import reviews from "./data"

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw] bg-gray-200">

        <div className="text-center">

          <h1 className="text-4xl font-bold ">Our Testimonals</h1>

          <div className="bg-violet-400 h-[4px] w-1/5 mx-auto mt-1"></div>

          <Testimonals reviews={reviews}/>
          
        </div>
    </div>
  );
};

export default App;
