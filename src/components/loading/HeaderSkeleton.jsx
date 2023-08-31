export function HeaderSkeleton() {
	return (
		<header className="flex h-[130px] w-full flex-col items-center justify-between bg-[#131418f7] px-6 py-2">
			<div className="flex w-full items-center justify-start gap-3 py-3">
				<span className="h-12 w-12 animate-pulse rounded-md bg-[#1b1e23]" />
				<div className="flex h-11 max-w-[70%] flex-grow-[1] animate-pulse rounded-full bg-[#1b1e23]" />
			</div>
			<div className="flex w-full flex-1 items-center justify-start gap-5 overflow-x-hidden">
				{Array(7)
					.fill({ id: crypto.randomUUID() })
					.map(({ id }) => (
						<span
							key={id}
							className="block h-10 w-[100px] animate-pulse whitespace-nowrap rounded-full bg-[#1b1e23]"
						/>
					))}
			</div>
		</header>
	);
}
