export default function Button({ children, padding, variant }) {
  const addPadding = padding ? ` ${padding} ` : "";
  const variants = {
    orange: "bg-orange border border-orange hover:bg-white hover:text-orange",
    white: "bg-white text-primary  hover:underline",
    black:
      "bg-primary text-white border border-primary hover:bg-white hover:text-primary w-full",
  };

  const pickVariant = variants[variant];
  return (
    <button
      className={`py-[15px] text-2xl ${pickVariant} font-medium rounded-[15px] ${addPadding}`}
    >
      {children}
    </button>
  );
}
