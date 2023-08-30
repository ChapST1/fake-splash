export function ImageItem({ item }) {
	const { imageId, imageColor, user, imageSources } = item;
	const { userId, username, profileImage } = user;
	const { small } = imageSources;

	return (
		<div
			key={imageId}
			style={{ background: imageColor }}
			className="block p-2 mb-4 rounded-md relative w-full"
		>
			<picture className="h-[max-content] w-full block">
				<img
					src={small}
					alt={`current images by ${username}`}
					className="w-full h-[max-content] object-cover"
					loading="lazy"
				/>
			</picture>
		</div>
	);
}
