interface ButtonProps {
  text: string;
  white?: boolean;
  className: string;
}

const Button = ({text, white, className}: ButtonProps) => {
  return (
    <button>
      <a
        href="#_"
        className={
          `${className} text-base` +
          (white
            ? " text-[#1F1F1F] bg-[#CCCCCC] font-medium hover:bg-[#CCCCCC]/80"
            : " text-white bg-[#1F1F1F]/40 hover:bg-[#1F1F1F] border border-[#CCCCCC]/20")
        }
      >
        {text}
      </a>
    </button>
  );
}

export default Button