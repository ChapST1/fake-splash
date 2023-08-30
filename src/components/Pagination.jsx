import Link from "next/link";

export function Pagination({ nextPagePath, prevPagePath, currentPage }) {
	return (
		<div className="flex gap-2 items-center justify-center py-3">
			<Link
				href={prevPagePath}
				className={`bg-[#131419] py-2 px-4 rounded ${
					Number(currentPage) - 1 === 0
						? "opacity-40 pointer-events-none"
						: " opacity-100 pointer-events-auto"
				}`}
			>
				Anterior pagina
			</Link>
			<Link href={nextPagePath} className="bg-[#131419] py-2 px-4 rounded">
				Siguiente pagina
			</Link>
		</div>
	);
}
