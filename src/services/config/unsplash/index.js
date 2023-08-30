export const UNSPLASH_ACCESS_KEY = process.env.NEXT_APP_UNSPLASH_ACCESS_KEY;
export const UNSPLASH_SECRET_KEY = process.env.NEXT_APP_UNSPLASH_SECRET_KEY;

export const UNSPLASH_GET_PHOTOS_API_URL = (page) => {
	return `https://api.unsplash.com/photos?page=${page}&per_page=30&client_id=${UNSPLASH_ACCESS_KEY}`;
};

export const UNSPLASH_SEARCH_PHOTOS_API_URL = (page, query) => {
	return `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=30&client_id=${UNSPLASH_ACCESS_KEY}`;
};

export const UNSPLASH_GET_TOPICS_API_URL = (page, perPage) => {
	return `https://api.unsplash.com//topics?page=${page}&per_page=${perPage}&client_id=${UNSPLASH_ACCESS_KEY}`;
};

export const UNSPLASH_GET_RANDOM_PHOTO_API_URL = (query) => {
	return `https://api.unsplash.com/photos/random?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`;
};

export const UNSPLASH_GET_PHOTOS_BY_TOPIC_API_URL = (slugOrId, page = 1) => {
	return `https://api.unsplash.com//topics/${slugOrId}/photos?page=${page}&per_page=20&client_id=${UNSPLASH_ACCESS_KEY}`;
};
