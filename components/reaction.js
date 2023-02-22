import react from "react";
import Image from "next/image";
import img_1 from '@/public/image/image_1.png'
import img_2 from '@/public/image/image_2.png'

export default function Reaction(){

    return(
        <div className="w-full flex justify-center ">
            <div className="max-w-screen-lg">

                 <section className="p-4 lg:p-8 bg-stone-400 flex justify-center dark:text-gray-100">
                           <div className="container mx-auto space-y-12">
                           <div className="flex flex-col hover:duration-300  duration-500 lg:hover:scale-105 
        md:hover:scale-95  overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-slate-50">
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
			</div>
		</div>

		<div className="flex flex-col hover:duration-300  duration-500 lg:hover:scale-105 
        md:hover:scale-95 overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="https://source.unsplash.com/200xauto/?2" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-slate-50">
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
			</div>
		</div>


        <div className="flex flex-col hover:duration-300  duration-500 lg:hover:scale-105 
        md:hover:scale-95 overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-slate-50">
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
			</div>
		</div>


        </div>
        </section>
        </div> 
        </div>
    )
}