export default function FooterItem({ title, children }) {
  return (
    <div>
      <h3 className="text-xl font-medium">{title}</h3>
      <div className="text-sm mt-[14px]">{children}</div>
    </div>
  );
}
