import { GallerySkeleton } from "@/components/loading/GallerySkeleton";

export default function loading() {
	return (
		<div className="pt-[150px]">
			<GallerySkeleton itemsCount={10} />
		</div>
	);
}
