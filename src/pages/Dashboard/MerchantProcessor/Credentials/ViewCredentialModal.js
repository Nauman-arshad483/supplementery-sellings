import React, { useId } from "react";

const ViewCredentialModal = ({ selectedFile }) => {
  const id1 = useId();
  const id2 = useId();
  return (
    <div>
      <input
        type="checkbox"
        id="viewCredentialModal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="w-11/12 max-w-3xl bg-white md:px-10 md:py-10 py-5 px-5 flex flex-col justify-start ">
          <div className="flex gap-2 text-accent">
            <div className="relative">
              <img width={80} src="/Icons/avatar4.png" alt="" />
              <span className="absolute bottom-1 right-4 inline-block w-3 h-3 bg-primary rounded-full"></span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-secondary">
                James Hendrix
              </h1>
              <p>client since 28 Jun 2021</p>
            </div>
          </div>
          <div className="md:px-14 px-5 py-10 md:py-5 my-5 text-accent">
            {[
              { id: 1, label: "USERNAME", type: "text" },
              { id: 2, label: "PASSWORD", type: "text" },
            ].map((d, i) => (
              <div key={i + id1} className="w-full my-3">
                <label className="w-full mb-2 inline-block" htmlFor="">
                  {d.label}
                </label>
                <input
                  className="w-full bg-gray-200 py-1.5 px-3"
                  type={d.type}
                  name=""
                  id=""
                />
              </div>
            ))}
            {[
              { id: 1, label: "API KEY", type: "text", placeholder: "" },
              { id: 2, label: "AUTH KEY", type: "text", placeholder: "Hide" },
            ].map((d, i) => (
              <div key={i + id2} className="w-full my-3">
                <label className="w-full mb-2 inline-block" htmlFor="">
                  {d.label}
                </label>
                <div className="relative">
                  <input
                    className="w-full bg-gray-200 py-1.5 px-3"
                    type={d.type}
                    placeholder={d.placeholder}
                    name=""
                    id=""
                  />
                  <img
                    className="w-5 absolute top-2 right-2 cursor-pointer"
                    src="/Icons/copytoclipboard.png"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <label
              htmlFor="viewCredentialModal"
              className="rounded-lg px-9 py-2 bg-gray-400 cursor-pointer text-white"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCredentialModal;
