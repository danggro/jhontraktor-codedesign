export default function AboutItem({ text, num }) {
  return (
    <div className="flex">
      <h3 className="text-4xl font-semibold 2xl:text-5xl text-orange">
        {num}
        {`+`}
      </h3>
      <p className="ml-2 text-sm font-medium 2xl:text-base">{text}</p>
    </div>
  );
}
