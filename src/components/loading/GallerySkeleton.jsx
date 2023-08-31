export function GallerySkeleton({ itemsCount = 5 }) {
	return (
		<div className="my-3 gap-4 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
			{Array(itemsCount)
				.fill({ id: crypto.randomUUID() })
				.map(({ id }) => (
					<article
						key={id}
						className="flex-1 rounded-md h-[250px] animate-pulse bg-[#131418f7]"
					/>
				))}
		</div>
	);
}
