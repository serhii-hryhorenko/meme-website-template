type Props = {
  text: string;
  img: string;
};

const About = ({ text, img }: Props) => {
  return (
    <div className="h-full flex flex-col justify-between bg-accent rounded-[60px] xl:rounded-[120px] p-2 xl:max-w-[500px] 2xl:max-w-none">
      <div className="flex flex-col gap-5 2xl:gap-10 p-8 pb-5 2xl:p-16 2xl:pb-9">
        <p className="text-4xl font-medium leading-[normal] uppercase text-start">
          About
        </p>
        <p className="2xl:max-w-[414px] text-base font-medium leading-[120%] 2xl:max-h-36 2xl:overflow-y-auto">
          {text}
        </p>
      </div>
      <img
        src={img}
        alt="About"
        className="rounded-[50px] xl:rounded-[112px] object-cover w-full xl:max-w-[556px] h-[500px] xl:h-auto xl:max-h-[407px] shrink-0 [background:#737373]"
      />
    </div>
  );
};

export default About;
