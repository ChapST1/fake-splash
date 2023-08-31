import { BannerSkeleton } from "@/components/loading/BannerSkeleton";
import { GallerySkeleton } from "@/components/loading/GallerySkeleton";

export default function loading() {
	return (
		<div className="py-[150px]">
			<BannerSkeleton height="350px" />
			<GallerySkeleton />
		</div>
	);
}
