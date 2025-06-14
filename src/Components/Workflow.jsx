import codeImg from "../assets/code.jpg";
import { checklistItems } from "../assets/constants";
import { CheckCircle2 } from "lucide-react";

const Workflow = () => {
  return (
    <div className="mt-20 border-b border-neutral-800 pb-5">
      <h2
        className="mt-6 text-3xl sm:text-5xl lg:text-6xl
        text-center tracking-wide"
      >
        Accelerate your{" "}
        <span
          className="
        bg-gradient-to-r from-orange-500 to-orange-800
        text-transparent bg-clip-text"
        >
          coding workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center py-5 px-10 mt-10">
        <div className="w-full lg:w-1/2">
          <img src={codeImg} alt="Code Image" />
        </div>
        <div className="pt-15 w-full lg:w-1/2 space-y-6">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex space-x-3">
              <div className="flex items-center justify-center h-10 w-10 
              bg-neutral-900 rounded-full">
                <CheckCircle2 className="text-green-400" />
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="">{item.title}</h3>
                <p className="text-neutral-500 text-md">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
