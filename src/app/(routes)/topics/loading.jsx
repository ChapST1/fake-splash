import { GallerySkeleton } from "@/components/loading/GallerySkeleton";

export default function loading() {
	return (
		<div className="pt-[65px]">
			<span className="h-1 w-3 block m-auto animate-pulse rounded-md bg-[#1b1e23]" />

			<div className="flex w-full items-center justify-start gap-3 py-3">
				<span className="h-12 w-12 animate-pulse rounded-md bg-[#1b1e23]" />
			</div>

			<GallerySkeleton itemsCount={15} />
		</div>
	);
}
