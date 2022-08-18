import type { NextPage } from "next";
import type { MouseEventHandler } from "react";
import { useRouter } from "next/router";

const ClientProjectsPage: NextPage = () => {
  const router = useRouter();

  const loadProjectHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/clients/[id]/[projectid]",
      query: {
        id: "Lucas",
        projectid: "a",
      },
    });
  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
