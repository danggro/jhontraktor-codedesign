import Image from "next/image";

export default function ProjectCard({ image, title, text }) {
  return (
    <div className="relative  rounded-[15px] 2xl:w-[485px] w-[390px] overflow-hidden">
      <div className="absolute w-full h-full gradient-project"></div>
      <Image src={image} width="485" height="613" alt="" className="" />

      <div className="absolute left-[50%] w-full -translate-x-[50%] text-center bottom-6">
        <h4 className="text-lg font-medium 2xl:text-2xl">{title}</h4>
        <p className="font-medium 2xl:text-xl text-base mt-[3px]">{text}</p>
      </div>
    </div>
  );
}
