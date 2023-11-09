import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import WrapSepolia from "~~/components/WrapSepolia";
import UnwrapSepolia from "~~/components/UnwrapSepolia";
import WrapMock from "~~/components/WrapMock";
import UnwrapMock from "~~/components/UnwrapMock";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col w-full pt-10">
        <WrapSepolia />
        <UnwrapSepolia />
        <WrapMock />
        <UnwrapMock />
      </div>
    </>
  );
};

export default Home;
