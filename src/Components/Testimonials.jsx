import { testimonials } from "../assets/constants";

const Testimonials = () => {
  return (
    <div className="mt-20 ">
      <h2 className=" text-center text-3xl sm:text-5xl lg:text-6xl my-10 lg:my-20">
        What people are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div
              className="bg-neutral rounded-3xl p-6 text-md border
                    border-neutral-800 font-thin "
            >
              <p className="text-neutral-500">{testimonial.text}</p>
              <div className="flex mt-8 items-start space-x-4">
                <img
                  className="h-12 w-12 rounded-full 
                            object-cover overflow-hidden"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  <p className="text-neutral-300">{testimonial.user}</p>
                  <p className="text-neutral-600 italic text-sm tracking-tight">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
