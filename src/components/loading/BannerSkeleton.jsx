export function BannerSkeleton({ height }) {
	return (
		<div>
			<div
				className={`h-[${height}] w-full animate-pulse bg-[#131418f7] rounded-md`}
			/>
		</div>
	);
}
