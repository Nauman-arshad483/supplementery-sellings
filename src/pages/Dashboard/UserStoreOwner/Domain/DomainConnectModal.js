import React, { useRef } from "react";

const DomainConnectModal = () => {
  const modalRef = useRef(null);
  const closeSelf = () => {
    modalRef.current.click();
  };
  return (
    <div>
      <input
        ref={modalRef}
        type="checkbox"
        id="domainConnectModal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className=" w-11/12 max-w-2xl bg-white md:py-10 py-5 px-5 flex flex-col ">
          <h3 className="text-center text-secondary text-3xl font-bold my-5">
            Connect
          </h3>
          <h3 className="text-accent text-center md:text-lg text-sm mb-5">
            Please understand that all domain companies are different. So, to
            connect your domain, there will be a manual process by our tech
            support team. Please delegate admin access to the following e-mail
            adress, so we can connect your site ASAP.
          </h3>
          <h3 className="text-center text-secondary md:text-xl text-xs font-bold my-5">
            domainsupport@suplementssellingsecrets.com
          </h3>
          <h3 className="text-center md:text-xl text-sm my-2">
            Select the completed button once you have done so
          </h3>

          <div className=" text-white flex justify-center mt-10">
            <label
              onClick={() => closeSelf()}
              htmlFor="domainCompletedModal"
              className="rounded-md px-9 py-3 bg-primary text-lg cursor-pointer"
            >
              Completed
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainConnectModal;
