import react from "react";
import {HiOutlineLocationMarker } from "react-icons/hi";

const Contact = () => {
    return(
        <section className="py-6  text-lime-600">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 lg:grid-cols-2 lg:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Pertanyaan Isi disini !!</h1>
			<p className="pt-2 pb-4">Tolong bertanyalah yang wajar jangan kurang <span className="font-bold text-red-500">ajar</span></p>
	
		</div>
		<form novalidate="" className="flex flex-col py-6  space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" placeholder="ciboox.id_name" className="block text-gray-600 w-full rounded-md shadow-sm  h-10 p-4 ring-1 ring-lime-600 "/>
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" placeholder="ciboox_id.com" className="block text-gray-600  w-full rounded-md shadow-sm focus:ring h-10 p-4  ring-1 ring-lime-600 dark:bg-gray-500" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3" className="block w-full rounded-md   p-4   focus:ring ring-1 ring-lime-600 dark:bg-gray-500 bg-slate-50 text-gray-800"></textarea>
			</label>
			<button type="button" className="self-center px-8 py-3 text-lg rounded  bg-lime-600 hover:bg-slate-50 border-2 border-green-600 hover:text-lime-600 text-slate-50 focus:divide-none">Submit</button>
		</form>
	</div>
</section>
    )
}

export default Contact;