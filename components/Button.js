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
      className={`2xl:py-[15px] py-[8px] 2xl:text-2xl text-lg ${pickVariant} font-medium rounded-[15px] ${addPadding}`}
    >
      {children}
    </button>
  );
}
