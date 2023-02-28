import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="h-full w-full">
      <Image priority fill className="-z-50 opacity-50 object-cover" src='/bg.jpg' alt={"FONDO"} />
      <div className="text-center w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 server">
        <h1 className="text-5xl my-8 font-bold">Explora comidas de  todo el mundo</h1>
        <Link
          className="shadow-gray-50 bg-gray-300 rounded text-xl py-2 px-4 cursor-pointer hover:bg-black hover:text-white"
          href="/types"
        >
          Lista de cocinas
        </Link>
      </div>
    </div>
  );
}