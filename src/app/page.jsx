import Link from "next/link";

export default function Home() {
	return (
		<main className="bg-[#131418] h-screen w-full flex items-center justify-center">
			<div className="flex flex-col justify-center gap-4">
				<h1 className="text-center font-bold bg-gradient-to-b from-neutral-600 via-fuchsia-600 to-indigo-400 bg-clip-text text-transparent text-7xl ">
					FakeSplash
				</h1>

				<p className="text-center text-[#cecece] w-[70%] m-auto">
					Bienvenido a FakeSplash, tu galería de imágenes de alta calidad. Aquí
					puedes explorar, compartir y descargar imágenes impresionantes de
					nuestra extensa colección. Ya sea que estés buscando inspiración para
					tu próximo proyecto o simplemente quieras disfrutar de la belleza
					visual, FakeSplash es el lugar perfecto para ti. Haz clic en 'Empezar'
					para sumergirte en un mundo de imágenes impresionantes.
				</p>

				<Link
					href="/gallery?page=1"
					className="bg-[#1b1e23] py-2 px-5 rounded-md block w-[max-content] m-auto"
				>
					Empezar
				</Link>
			</div>
		</main>
	);
}
