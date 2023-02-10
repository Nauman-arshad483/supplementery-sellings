import React from "react";

const OpenFormModal = ({ selectedFile }) => {
  return (
    <div>
      <input type="checkbox" id="openFormModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="w-11/12 max-w-3xl bg-white md:px-10 py-5 px-5 flex flex-col justify-start ">
          <h3 className="text-accent text-center text-lg md:my-10 my-5">
            <img
              className="w-6 inline-block mr-2"
              src="/Icons/file.png"
              alt=""
            />
            {selectedFile?.fileName}
          </h3>
          <div className="md:flex items-start gap-5 mb-5">
            <div className="border p-2">
              <img className="w-72" src="/Icons/form_sample.png" alt="" />
              <div className="flex justify-center">
                <button className="rounded-full px-9 py-2 text-slate-400 cursor-pointer border border-slate-400">
                  Open
                </button>
              </div>
            </div>
            <div className="md:mt-0 mt-5">
              <label className="rounded-lg px-9 py-2 bg-slate-400 cursor-pointer text-white">
                Contact Client about this doc
              </label>
              <p className="text-xs text-accent mt-3">
                This will automatically send you to thechat with James Hendrix
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <label
              htmlFor="openFormModal"
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

export default OpenFormModal;
