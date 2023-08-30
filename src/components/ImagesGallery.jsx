import { ImageItem } from "./ImageItem";

export async function ImageGallery({ data }) {
	return (
		<section className="pt-5">
			<div className=" columns-1 sm:columns-2 md:columns-4 ">
				{data?.map((item) => {
					return <ImageItem item={item} />;
				})}
			</div>
		</section>
	);
}
