import { NextPage } from "next";
import { useRouter } from "next/router";

const PortfolioProjectPage: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>The Portfolio Project Page: {router.query.id}</h1>
    </div>
  );
};

export default PortfolioProjectPage;
