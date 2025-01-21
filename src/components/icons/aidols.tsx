import { Icon } from "./icons";

const AidolsIcon: Icon = ({ className, color = "currentColor" }) => {
  return (
    <svg
      width="57"
      height="57"
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M23.5434 20.2871C26.1703 23.4325 26.4123 27.9375 24.1195 31.3364L23.6586 32.0277L21.0778 35.8529L15.893 43.5494L10.5008 51.5685C9.19888 53.654 6.6065 54.6909 4.12934 53.8383C1.89413 53.0663 0.5 50.8427 0.5 48.4922V8.89215C0.5 5.91956 2.91956 3.5 5.90368 3.5H6.99824C8.58823 3.5 10.0861 4.20282 11.1115 5.4126L23.5434 20.2871Z"
        fill={color}
      />
      <path
        d="M56.4999 9.07581V48.7335C56.4999 51.7176 54.0803 54.1372 51.0962 54.1372H50.0016C48.4116 54.1372 46.9138 53.4344 45.8884 52.2246L33.4565 37.3385C30.8295 34.1931 30.5991 29.6881 32.8804 26.2892L33.3413 25.5979L35.9221 21.7842L41.8097 13.0393L46.5106 6.06865C47.7895 3.99474 50.3588 2.95779 52.8475 3.78735C55.0827 4.52474 56.4999 6.72538 56.4999 9.07581Z"
        fill={color}
      />
    </svg>
  );
};
export default AidolsIcon;
