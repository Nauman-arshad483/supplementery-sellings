import React from "react";
import { useNavigate } from "react-router-dom";

const ClientsList = () => {
  const clients = [
    {
      id: 1,
      img: "/Images/client1.png",
      name: "Client 001",
      status: "done",
      time: "09:30 AM",
    },
    {
      id: 2,
      img: "/Images/client2.png",
      name: "Client 002",
      status: "pending",
      time: "09:30 AM",
    },
    {
      id: 3,
      img: "/Images/client3.png",
      name: "Client 003",
      status: "pending",
      time: "09:30 AM",
    },
    {
      id: 4,
      img: "/Images/client4.png",
      name: "Client 004",
      status: "pending",
      time: "09:30 AM",
    },
    {
      id: 5,
      img: "/Images/client5.png",
      name: "Client 005",
      status: "pending",
      time: "09:30 AM",
    },
    {
      id: 6,
      img: "/Images/client6.png",
      name: "Client 006",
      status: "pending",
      time: "09:30 AM",
    },
    {
      id: 7,
      img: "/Images/client7.png",
      name: "SClient 007",
      status: "pending",
      time: "09:30 AM",
    },
    {
      id: 8,
      img: "/Images/client7.png",
      name: "Client 008",
      status: "pending",
      time: "09:30 AM",
    },
  ];

  return (
    <div className="ml-auto bg-white text-accent w-72 rounded-lg pb-1">
      <div className="flex justify-between items-center pt-10 px-5">
        <h1 className="text-xl text-secondary">Not Yet Assigned</h1>
        <span className="text-2xl font-bold inline-block mb-2">...</span>
      </div>
      <div>
        {clients.map((client) => (
          <SingleClient key={client.id} client={client} />
        ))}
      </div>
    </div>
  );
};

export default ClientsList;

const SingleClient = ({ client }) => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-3 items-center my-5 px-5 py-2 border-b-2 hover:bg-primary hover:text-white hover:rounded-md hover:-translate-x-5 duration-200 group">
      <div className="flex gap-2 items-center">
        <div className="w-16 ">
          <img className="w-full" src={client.img} alt="" />
        </div>
        <div>
          <h1 className="text-sm mb-2">{client.name}</h1>
          <p className="text-xs">{client.time}</p>
        </div>
      </div>

      {client.status === "done" ? (
        <div className="ml-3 mt-3">
          <img className="w-4 inline-block" src="/Icons/tick4.png" alt="" />{" "}
          <span className="text-primary text-sm group-hover:text-white">
            Done
          </span>
        </div>
      ) : (
        <div className="ml-3 mt-3 cursor-pointer">
          <span className="group-hover:hidden w-3 h-3 bg-blue-200 rounded-full inline-block"></span>
          <span className="group-hover:hidden inline-block  text-blue-200 ml-1 text-sm">
            Pending
          </span>
          <img
            onClick={() =>
              navigate("/graphic-designer/clients/assign", {
                state: { client, assign: true },
              })
            }
            className="w-6 mb-2 ml-auto cursor-pointer group-hover:inline-block hidden"
            src="/Icons/plus.png"
            alt=""
          />
        </div>
      )}
    </div>
  );
};
