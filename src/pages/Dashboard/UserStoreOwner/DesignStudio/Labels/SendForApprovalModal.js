import { useNavigate } from "react-router-dom";

const SendForApprovalModal = ({ handleGoNext }) => {
  const navigate = useNavigate();
  return (
    <div>
      <input
        type="checkbox"
        id="sendForApprovalModal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className=" w-11/12 max-w-2xl bg-white md:py-10 py-5 px-5 flex flex-col ">
          <h3 className="text-center text-secondary text-2xl font-bold my-5">
            Success!
          </h3>
          <img
            className="mx-auto w-20 inline-block mb-10"
            src="/Icons/tick5.png"
            alt=""
          />
          <h3 className="text-accent text-center text-lg mb-10">
            Thank you very much! Our compliance tipically takes 4-6 business
            days to approve all labels.
          </h3>

          <div className=" text-white flex justify-center mt-10 gap-10">
            <label
              onClick={() => navigate("/store-owner/home")}
              htmlFor="sendForApprovalModal"
              className="rounded-md px-9 py-2 bg-gray-400 cursor-pointer"
            >
              Home
            </label>
            <label
              htmlFor="sendForApprovalModal"
              onClick={handleGoNext}
              className="rounded-md px-9 py-2 bg-primary cursor-pointer"
            >
              Next
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendForApprovalModal;
