import { Icon } from "./icons";

const Telegram: Icon = ({ className, color = "currentColor" }) => {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="telegram 1" clipPath="url(#clip0_78_105)">
        <g id="Layer_x0020_1">
          <path
            id="Vector"
            d="M51.1814 5.78508L43.2159 45.9448C43.2159 45.9448 42.1025 48.7295 39.0384 47.3927L20.5747 33.2609C23.0564 31.03 42.309 13.721 43.151 12.9361C44.4524 11.7213 43.6448 10.9983 42.132 11.917L13.6942 29.9765L2.72273 26.283C2.72273 26.283 0.995468 25.6702 0.829234 24.3334C0.662017 22.9967 2.77879 22.2727 2.77879 22.2727L47.5056 4.72669C47.5056 4.72669 51.1814 3.11157 51.1814 5.78508Z"
            fill={color}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_78_105">
          <rect
            width="50.362"
            height="50.362"
            fill={color}
            transform="translate(0.819092 0.819336)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default Telegram;
