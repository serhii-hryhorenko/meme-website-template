import logoImg from "../assets/logo-ByfGf1y5.png";
import mainImg from "../assets/main-BrYlGmJF.png";
import SendIcon from "./icons/send";

type Props = {
  logo: string;
  main: string;
  contractId: string;
};

const Main = ({ logo, main, contractId }: Props) => {
  return (
    <div className="flex-1 h-full flex flex-col justify-between bg-neutral-700 rounded-[120px] relative">
      <img
        src={mainImg}
        alt="main"
        className="absolute w-full h-full object-cover rounded-[120px]"
      />
      <img
        src={logoImg}
        alt="logo"
        className="max-w-[350px] h-48 shrink-0 [background:#404040] rounded-[96px] object-cover z-10 border-8 border-solid border-neutral-800 shadow-2xl"
      />
      <div className="w-[60%] 2xl:h-80 safari-blur border border-solid rounded-[80px] z-10 p-2 ms-10 mb-10 flex flex-col gap-10">
        <a
          href=""
          className="absolute w-36 h-36 flex justify-center items-center gap-2.5 shrink-0 [background:#A6A6A6] rounded-[96px] -top-11 -right-11"
        >
          <SendIcon />
        </a>
        <p className="text-2xl 2xl:text-4xl font-medium leading-[100%] uppercase ms-10 mt-10 2xl:ms-12 2xl:mt-12">
          Token Contract:
        </p>
        <div className="[background:#A6A6A6] rounded-[72px] text-2xl font-medium leading-[normal] break-words p-10">
          {contractId}
        </div>
      </div>
    </div>
  );
};

export default Main;
