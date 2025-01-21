import { Icon } from "./icons";

const XIcon: Icon = ({ className, color = "currentColor" }) => {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M29.993 22.7863L45.6166 5.01562H41.9143L28.3483 20.4457L17.5132 5.01562H5.01611L21.401 28.3486L5.01611 46.984H8.71863L23.0447 30.6893L34.4874 46.984H46.9844L29.9921 22.7863H29.993ZM24.9219 28.5542L23.2617 26.2308L10.0527 7.74288H15.7395L26.3994 22.6632L28.0595 24.9866L41.9161 44.3807H36.2292L24.9219 28.5551V28.5542Z"
        fill={color}
      />
    </svg>
  );
};
export default XIcon;
