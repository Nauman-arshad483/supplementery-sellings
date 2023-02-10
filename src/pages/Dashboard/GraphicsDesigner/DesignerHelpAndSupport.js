import React, { useId } from "react";

const DesignerHelpAndSupport = () => {
  const id = useId();
  return (
    <div>
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        HELP & SUPPORT
      </h1>

      <div className="md:flex gap-5">
        <div className="md:w-1/2 w-full p-5 bg-white">
          <h1 className="mx-5 my-5 font-bold">FAQ</h1>
          <div className="mx-5  text-primary mb-5">
            Here you can find some of the most frequently asked questions
          </div>
          {[...new Array(6)].map((a, i) => (
            <div
              key={i + id}
              tabIndex="0"
              className="collapse collapse-plus border-b border-base-300 bg-base-100 "
            >
              <div className="collapse-title text-xl font-medium">
                Frequently asked question #1
              </div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis aut natus labore expedita quo pariatur!
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-1/2 w-full p-5 bg-white">
          {[...new Array(8)].map((a, i) => (
            <div
              key={i}
              tabIndex="0"
              className="collapse collapse-plus border-b border-base-300 bg-base-100 "
            >
              <div className="collapse-title text-xl font-medium">
                Frequently asked question #1
              </div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis aut natus labore expedita quo pariatur!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignerHelpAndSupport;
