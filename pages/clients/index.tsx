import type { NextPage } from "next";
import Link from "next/link";

interface Client {
  id: string;
  name: string;
}

const ClientsPage: NextPage = () => {
  const clients: Client[] = [
    {
      id: "Lucas",
      name: "Lucas Chagas",
    },
    {
      id: "Markus",
      name: "Markus Chagas",
    },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
