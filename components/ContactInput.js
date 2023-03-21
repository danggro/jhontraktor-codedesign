export default function ContactInput({ place }) {
  return (
    <>
      <input
        type="text"
        placeholder={place}
        className="rounded-[15px] 2xl:px-16 px-10 2xl:text-xl text-base text-primary/50 2xl:py-6 py-3 w-full "
      />
    </>
  );
}
