import Image from "next/image"
import Image_2 from "../../public/images/blog_img_2.png"

export default function Hero() {
  return (
    <div>
    <div className="lg:flex lg:flex-row md:flex  md:flex-row lg:justify-around md:justify-around flex flex-col justify-center items-center bg-[#7C4EE4] text-white lg:h-[600px] md:h-[600px] h-[900px] lg:mt-5 md:mt-5 ">
        <div className="space-y-4 ml-3">
        
            <span className="text-sm font-semibold">Featured Post</span>
            <h2 className="text-6xl font-semibold ">How AI will </h2>
            <h2 className="text-6xl font-semibold ">Change the Future</h2>
            <p className="text-lg font-extralight w-96">The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction</p>
            <button className="font-semibold text-sm bg-white text-black h-11 w-32 rounded-md">Read more</button>
        </div>
        <div>
      <Image src={Image_2} alt="img_2" height={396} width={507}  className="lg:h-[396px] lg:w-[507px] md:h-[396px] md:w-[507px] sm:h-[396px] sm:w-[507px] h-[396px] w-[337px]  pt-5 "/>
        </div>
    </div>
    <div>
        
    </div>
    </div>
  )
}
