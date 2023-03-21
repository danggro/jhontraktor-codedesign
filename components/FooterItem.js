export default function FooterItem({ title, children }) {
  return (
    <div>
      <h3 className="text-base font-medium 2xl:text-xl">{title}</h3>
      <div className="2xl:text-sm text-xs mt-[14px]">{children}</div>
    </div>
  );
}
