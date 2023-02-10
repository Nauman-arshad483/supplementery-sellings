import React from "react";
import pdfIcon from "../../../../icons/pdf_icon.png";
import uploadIcon from "../../../../icons/upload_icon.png";

const UploadModal = () => {
  const files = [
    {
      id: 1,
      fileName: "Document.pdf",
      fileSize: "7.5mb",
      progress: "37%",
      uploadRate: "90KB",
    },
    {
      id: 2,
      fileName: "Document.pdf",
      fileSize: "7.5mb",
      progress: "37%",
      uploadRate: "90KB",
    },
    {
      id: 3,
      fileName: "Document.pdf",
      fileSize: "7.5mb",
      progress: "37%",
      uploadRate: "90KB",
    },
  ];
  return (
    <div>
      <input type="checkbox" id="uploadModal" className="modal-toggle" />
      <div className="modal ">
        <div className="w-11/12 max-w-4xl md:max-h-screen max-h-[500px] overflow-y-auto relative bg-white md:px-16 md:py-10 py-0">
          <label
            htmlFor="uploadModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="text-gray-400 md:mb-10 mb-0 p-5">
            <h1 className="text-gray-500 text-2xl md:mb-9 mb-3 md:pb-7 pb-3 text-center border-b">
              File upload
            </h1>
            <div className="md:flex w-full">
              <div className="md:w-2/5 w-full md:mb-0 mb-3">
                <div className="flex justify-center items-center md:w-80 w-full md:mb-10 mb-5">
                  <label
                    htmlFor="uploadRevisedFile"
                    className="flex flex-col justify-center items-center w-full md:h-64 h-40 bg-gray-50 rounded-lg border-2 border-gray-300  cursor-pointer "
                  >
                    <div className="flex flex-col justify-center items-center pt-5 pb-6">
                      <img width={40} src={uploadIcon} alt="" />
                      <p className="mb-2 text-sm text-gray-600 mt-5 ">
                        Drag files to upload
                      </p>
                    </div>
                    <input
                      id="uploadRevisedFile"
                      type="file"
                      className="hidden"
                    />
                  </label>
                </div>
                <div className="flex justify-center">
                  <label
                    htmlFor="uploadRevisedFile"
                    type="file"
                    className="bg-primary text-white px-7 py-3 text-center  rounded-md "
                  >
                    Choose file
                  </label>
                </div>
              </div>
              <div className="md:w-3/5 w-full md:ml-28 ml-0">
                <h1>Uploading</h1>
                {files.map((file) => (
                  <div key={file.id} className="flex items-center gap-x-5 my-5">
                    <img width={30} src={pdfIcon} alt="" />
                    <div>
                      <div className="flex justify-between gap-5">
                        <p>{file.fileName}</p>
                        <span>{file.fileSize}</span>
                        <button>X</button>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1 my-2">
                        <div
                          className="bg-primary h-1 rounded-full"
                          style={{ width: file.progress }}
                        ></div>
                      </div>
                      <p className="text-left">{file.progress}% done</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
