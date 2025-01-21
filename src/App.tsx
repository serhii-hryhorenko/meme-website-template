import textAbout from "./assets/about.png";
import config from "./assets/config.json";
import logoImg from "./assets/logo.png";
import mainImg from "./assets/main.png";
import About from "./components/About";
import Footer from "./components/Footer";
import Telegram from "./components/icons/telegram";
import X from "./components/icons/x";
import Main from "./components/Main";

const App = () => {
  const text = config.description;
  const contractId = config.address;

  const images = {
    logo: logoImg,
    main: mainImg,
    about: textAbout,
  };

  const links = {
    followUs: "",
    x: config.twitter,
    telegram: config.telegram,
  };

  return (
    <div className="xl:min-h-screen w-full p-4 2xl:p-10 2xl:pb-7 flex flex-col blurred-bg">
      <div className="flex-1 flex flex-col xl:flex-row gap-2 h-full">
        <Main main={images.main} logo={images.logo} contractId={contractId} />
        <div className="flex flex-col-reverse xl:flex-col gap-2 pb-5">
          <About text={text} img={images.about} />
          <div className="h-36 2xl:h-[172px] flex gap-2 shrink-0">
            <a
              href={links.telegram}
              target="_blank"
              className="flex-1 flex justify-center items-center gap-2 bg-primary text-accent rounded-full transition-transform transform hover:scale-105 hover:rotate-3 hover:bg-gradient-to-r hover:from-[#0088cc] hover:to-[#4c9efb] shadow-lg hover:shadow-2xl duration-300 ease-out"
            >
              <Telegram />
            </a>
            <a
              target="_blank"
              href={links.x}
              className="flex-1 flex justify-center items-center gap-2 bg-primary text-accent rounded-full transition-transform transform hover:scale-105 hover:-rotate-3 hover:bg-gradient-to-r hover:from-[#000000] hover:to-[#434343] shadow-lg hover:shadow-2xl duration-300 ease-out"
            >
              <X />
            </a>
          </div>
        </div>
      </div>
      <Footer text={config.footerText} />
    </div>
  );
};

export default App;
