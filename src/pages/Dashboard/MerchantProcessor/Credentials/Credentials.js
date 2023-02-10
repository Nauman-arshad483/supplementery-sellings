import Search from "../../../Shared/Search";
import ResendCredentialModal from "./ResendCredentialModal";
import ViewCredentialModal from "./ViewCredentialModal";

const Credentials = () => {
  const tableData = [
    {
      id: 1,
      clientName: "James Hendrix",
      statusOfCredentials: "NONE",
    },
    {
      id: 2,
      clientName: "James Hendrix",
      statusOfCredentials: "NONE",
    },
    {
      id: 3,
      clientName: "James Hendrix",
      statusOfCredentials: "NONE",
    },
    {
      id: 4,
      clientName: "James Hendrix",
      statusOfCredentials: "pending",
    },
    {
      id: 5,
      clientName: "James Hendrix",
      statusOfCredentials: "pending",
    },
    {
      id: 6,
      clientName: "James Hendrix",
      statusOfCredentials: "completed",
    },
    {
      id: 7,
      clientName: "James Hendrix",
      statusOfCredentials: "completed",
    },
    {
      id: 8,
      clientName: "James Hendrix",
      statusOfCredentials: "completed",
    },
    {
      id: 9,
      clientName: "James Hendrix",
      statusOfCredentials: "completed",
    },
  ];
  return (
    <div>
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        Credentials
      </h1>
      <div className="bg-[#ECF2F7] lg:px-5 p-0 mt-5 pt-5 pb-10">
        <ViewCredentialModal />
        <ResendCredentialModal />
        <div className="flex flex-wrap justify-between w-full">
          <button
            className={`font-bold text-secondary md:px-5 px-3  border-b-4 border-white marker:md:text-md text-sm py-5 bg-white`}
          >
            By Client
          </button>
        </div>
        <div className="flex flex-wrap justify-between items-start w-full bg-white px-5 pt-10">
          <div className="flex gap-2 text-accent">
            <p>Choose a client who you want to provide credentials</p>
          </div>
          <div className="md:w-2/5 w-full">
            <Search />
          </div>
        </div>
        {<ClientCredentialsTable tableData={tableData} />}
      </div>
    </div>
  );
};

export default Credentials;

const ClientCredentialsTable = ({ tableData }) => {
  return (
    <div className="md:mb-0 mb-5">
      <div className="bg-white pt-5 pb-16 px-5 md:block hidden">
        <table className="w-full pt-5">
          <thead className="table w-full table-fixed ">
            <tr className="text-left text-secondary ">
              {["Client's Name", "Status of Credentials", "Action"].map(
                (th) => (
                  <th key={th} className="border-0 pl-3">
                    {th}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="block h-[500px] scrollbar overflow-y-auto">
            {tableData.map((data) => (
              <TableRow key={data.id + "promoter"} data={data} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-5 md:hidden block text-xs">
        {tableData.map((data) => (
          <TableRow key={data.id + "hew"} data={data} mobileVersion />
        ))}
      </div>
    </div>
  );
};

const TableRow = ({ data, mobileVersion }) => {
  if (mobileVersion) {
    return (
      <div className="grid grid-cols-2 gap-2 border-b border-gray-400 text-gray-400 pb-4 mb-5">
        <p className="font-bold">Client's Name</p>
        <p>{data.clientName}</p>
        <p className="font-bold">Status of Credentials</p>
        <p
          className={` ${
            data.statusOfCredentials === "completed"
              ? "text-primary"
              : "text-gray-400"
          }`}
        >
          {data.statusOfCredentials}
        </p>
        <p>Action</p>
        <p className="">
          {data.statusOfCredentials === "pending" && (
            <ActionLabel name={"resend"} id="resendCredentialModal" />
          )}
          {data.statusOfCredentials === "completed" && (
            <ActionLabel name={"view"} id="viewCredentialModal" />
          )}
          {data.statusOfCredentials === "NONE" && (
            <ActionLabel name={"send to fill"} id="" />
          )}
        </p>
      </div>
    );
  }

  return (
    <tr className="table w-full table-fixed text-accent ">
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3  ">
        {data.clientName}
      </td>
      <td
        className={`border-b border-gray-400 pt-5 pb-4 pl-3 ${
          data.statusOfCredentials === "completed"
            ? "text-primary"
            : "text-gray-400"
        }`}
      >
        {data.statusOfCredentials}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        {data.statusOfCredentials === "pending" && (
          <ActionLabel name={"resend"} id="resendCredentialModal" />
        )}
        {data.statusOfCredentials === "completed" && (
          <ActionLabel name={"view"} id="viewCredentialModal" />
        )}
        {data.statusOfCredentials === "NONE" && (
          <ActionLabel name={"send to fill"} id="" />
        )}
      </td>
    </tr>
  );
};

const ActionLabel = ({ name, id }) => {
  return (
    <label
      className="cursor-pointer w-32 text-center inline-block px-5 text-blue-500 border-blue-500 border rounded-full"
      htmlFor={id}
    >
      {name}
    </label>
  );
};
