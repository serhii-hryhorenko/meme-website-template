type Props = {
  text: string;
};
const Footer = ({ text }: Props) => {
  return (
    <p className="shrink-0 text-base font-normal leading-[normal] text-right">
      {text}
    </p>
  );
};

export default Footer;
