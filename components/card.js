import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="max-w-xs rounded-xl p-5 overflow-hidden bg-slate-400 ">
      <Image
        src="/image/arch_image.png"
        alt="Gambar"
        width={300}
        height={200}
        className="w-full rounded hover:scale-105 duration-300"
      />
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-8 ">Denah rumah</div>
        <p className="text-gray-700 mb-8">
         Desain denah rumah dengan konsep milenial suka mageran tapi bagus aja untuk di buat rumah
        </p>
        <Link href={"#"} className="bg-none flex justify-center ring-4 hover:bg-slate-50
        duration-500 hover:ring-0 hover:text-gray-300 ring-gray-300 ring-inset text-grey-500 text-gray-300 font-bold py-4 p-16 rounded-lg"
> Learn More 
  </Link>      </div>
    </div>
  );
};

export default Card;