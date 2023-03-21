export default function AboutItem({ text, num }) {
  return (
    <div className="flex">
      <h3 className="text-5xl font-semibold text-orange">
        {num}
        {`+`}
      </h3>
      <p className="ml-2 text-base font-medium">{text}</p>
    </div>
  );
}
