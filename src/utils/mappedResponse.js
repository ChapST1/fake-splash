export function mappedResponse(data) {
	const mappedData = data.map((item) => {
		const { id, color, blur_hash, alt_description, user, urls, width, height } =
			item;
		const { id: userId, username, profile_image } = user;

		const userMapped = {
			userId,
			username,
			profileImage: profile_image.medium,
		};

		return {
			imageId: id,
			imageColor: color,
			imageBlurHash: blur_hash,
			imageWidth: width,
			imageHeight: height,
			imageAltDescription: alt_description,
			user: userMapped,
			imageSources: urls,
		};
	});

	return {
		mappedData,
	};
}
