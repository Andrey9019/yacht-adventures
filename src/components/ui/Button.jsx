import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Button = ({
  text,
  textColor = "#f6f5ef",
  hoverTextColor = "#93abae",
  backgroundColor = "",
  hoverBackgroundColor = "",
  borderColor = "1px solid #F6F5EF",
  hoverBorderColor = "1px solid #BEC7C2",
  icon = null,
  onClick,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      onClick={onClick}
      className={`flex items-center px-7 py-[14px] font-bold text-${textColor} border-2 rounded-full cursor-pointer transition-all duration-300 
      text-sm md:text-lg w-max`}
      style={{
        backgroundColor: backgroundColor,
        border: borderColor,
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = hoverBackgroundColor;
        e.target.style.color = hoverTextColor;
        e.target.style.border = hoverBorderColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = backgroundColor;
        e.target.style.color = textColor;
        e.target.style.border = borderColor;
      }}
    >
      {text}
      {icon && <span style={{ marginLeft: "16px" }}>{icon}</span>}
    </motion.button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  hoverBorderColor: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

export default Button;
