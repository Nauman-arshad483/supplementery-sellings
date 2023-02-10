import React from "react";
import { useNavigate } from "react-router-dom";
import ClientsList from "../Home/ClientsList";
import "./MyClients.css";

const MyClients = () => {
  const clients = [
    {
      id: 1,
      img: "/Icons/avatar4.png",
      name: "Client 001",
      status: "in Progress",
      isOnline: true,
    },
    {
      id: 2,
      img: "/Icons/avatar4.png",
      name: "Client 002",
      status: "in Progress",
      isOnline: false,
    },
    {
      id: 3,
      img: "/Icons/avatar4.png",
      name: "Client 003",
      status: "in Progress",
      isOnline: false,
    },
    {
      id: 4,
      img: "/Icons/avatar4.png",
      name: "Client 004",
      status: "Haven't Started Yet",
      isOnline: true,
    },
    {
      id: 5,
      img: "/Icons/avatar4.png",
      name: "Client 005",
      status: "Haven't Started Yet",
      isOnline: true,
    },
    {
      id: 6,
      img: "/Icons/avatar4.png",
      name: "Client 006",
      status: "Haven't Started Yet",
      isOnline: false,
    },
    {
      id: 7,
      img: "/Icons/avatar4.png",
      name: "SClient 007",
      status: "Haven't Started Yet",
      isOnline: false,
    },
    {
      id: 8,
      img: "/Icons/avatar4.png",
      name: "Client 008",
      status: "Haven't Started Yet",
      isOnline: false,
    },
    {
      id: 9,
      img: "/Icons/avatar4.png",
      name: "Client 009",
      status: "Haven't Started Yet",
      isOnline: false,
    },
    {
      id: 10,
      img: "/Icons/avatar4.png",
      name: "Client 010",
      status: "Haven't Started Yet",
      isOnline: false,
    },
  ];
  return (
    <div className="text-accent">
      <h1 className="lg:ml-20 ml-10 mt-5 mb-14 lg:text-2xl text-xl font-semibold text-accent uppercase">
        My Clients
      </h1>
      <div className="md:flex gap-10">
        <div className="md:w-[70%] w-full ">
          <div className="bg-white rounded-md md:mx-5 mx-0 md:mb-0 mb-5 py-5">
            <h1 className="text-xl my-5 mx-5 text-secondary">
              Assigned Clients
            </h1>
            <div className="h-[700px] overflow-y-auto scrollbar">
              {clients.map((client) => (
                <SingleClient key={client.id} client={client} />
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-[30%] w-full">
          <ClientsList />
        </div>
      </div>
    </div>
  );
};

export default MyClients;

const SingleClient = ({ client }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex gap-3 items-center my-5 px-5 py-2 border-b-2 mx-2 cursor-pointer"
      onClick={() =>
        navigate("/graphic-designer/clients/assign", {
          state: { client, assign: false },
        })
      }
    >
      <div className="w-16 ">
        <div className="relative">
          <img className="w-full" src={client.img} alt="" />
          {client.isOnline && (
            <div className="bg-primary bottom-0 right-3 w-3 h-3 rounded-md absolute"></div>
          )}
        </div>
      </div>
      <div>
        <h1 className="text-sm mb-2">{client.name}</h1>
        <p
          className={`text-xs ${
            client.status === "in Progress" && "text-primary"
          }`}
        >
          {client.status}
        </p>
      </div>
    </div>
  );
};
