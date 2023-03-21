import Image from "next/image";

export default function ProjectCard({ image, title, text }) {
  return (
    <div className="relative  rounded-[15px] w-[485px] h-[613px] overflow-hidden">
      <div className="absolute w-full h-full gradient-project"></div>
      <Image src={image} width="485" height="613" alt="" className="" />

      <div className="absolute left-[50%] w-full -translate-x-[50%] text-center bottom-6">
        <h4 className="text-2xl font-medium">{title}</h4>
        <p className="font-medium text-xl mt-[3px]">{text}</p>
      </div>
    </div>
  );
}
