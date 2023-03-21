export default function ContactInput({ place }) {
  return (
    <>
      <input
        type="text"
        placeholder={place}
        className="rounded-[15px] px-16 text-xl text-primary/50 py-6 w-full "
      />
    </>
  );
}
