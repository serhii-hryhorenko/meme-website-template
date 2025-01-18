import AidolsIcon from "./icons/aidols";

type Props = {
  contractId: string;
};

const TokenContract = ({ contractId }: Props) => {
  return (
    <div className="xl:max-w-fit safari-blur border-2 border-solid rounded-[60px] z-10 p-2 m-5 xl:m-10 flex flex-col justify-between gap-10">
      <a
        target="_blank"
        href={`https://aidols.bot/agents/${contractId}`}
        className="absolute w-24 h-24 xl:w-36 xl:h-36 flex justify-center items-center gap-2.5 shrink-0 [background:#6A68D2] text-white rounded-[96px] -top-8 -right-4 xl:-top-11 xl:-right-11 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
      >
        <AidolsIcon />
      </a>
      <p className="text-[#252525] text-2xl 2xl:text-4xl font-medium leading-[100%] uppercase ms-10 me-14 mt-10 2xl:ms-12 2xl:mt-12">
        Token Contract:
      </p>
      <div className="text-[#252525] bg-white rounded-[72px] text-xl xl:text-2xl font-medium leading-[normal] break-words p-10 text-center">
        {contractId}
      </div>
    </div>
  );
};

export default TokenContract;
