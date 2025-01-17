import About from "./components/About";
import Footer from "./components/Footer";
import Telegram from "./components/icons/telegram";
import X from "./components/icons/x";
import Main from "./components/Main";

const App = () => {
  const text =
    "Lorem ipsum dolor sit amet consectetur. Purus vel egestas augue nisl. Non cras commodo ultrices nunc scelerisque enim gravida convallis. Ut duis ac faucibus dui sed cras eu dolor. Mauris tristique scelerisque sed consequat varius vitae lorem. Diam consectetur dui nisl quis ultricies et massa.  Nisl sit sit ullamcorper molestie vitae semper pellentesque. Turpis rhoncus nullam posuere facilisi ac risus vitae.";

  const images = {
    logo: "",
    main: "",
    about: "",
  };

  const links = {
    followUs: "",
    x: "",
    telegram: "",
  };

  const contractId = "0x9F5d4479b783327b61718fa13B3a0583869a80c1";

  return (
    <div className="h-full w-full p-4 2xl:p-10 2xl:pb-7 flex flex-col">
      <div className="flex-1 relative flex gap-2 h-full">
        <Main main={images.main} logo={images.logo} contractId={contractId} />
        <div className="flex flex-col gap-2 pb-5">
          <About text={text} img={images.about} />
          <div className="h-36 2xl:h-[172px] flex gap-2 shrink-0 justify-end">
            <a
              href={links.followUs}
              className="flex flex-1 h-full flex-col justify-center items-center shrink-0 [background:#404040] rounded-full text-2xl font-medium leading-[normal] uppercase"
              // className="z-10 absolute flex -left-[255px] 2xl:-left-[310px] w-[450px] 2xlw-[523px] h-full flex-col justify-center items-center gap-[8.993px] shrink-0 [background:#404040] rounded-full text-2xl font-medium leading-[normal] uppercase"
            >
              Follow us
            </a>
            <a
              href={links.telegram}
              className="flex w-36 2xl:w-[172px] flex-col justify-center items-center gap-2 shrink-0 [background:#404040] rounded-full"
            >
              <Telegram />
            </a>
            <a
              href={links.x}
              className="flex w-36 2xl:w-[172px] flex-col justify-center items-center gap-2 shrink-0 [background:#404040] rounded-full"
            >
              <X />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
