import { BannerForm } from "./BannerForm";

export function Banner() {
	return (
		<div className=" w-full  h-[550px] bg-[#131418d1] bg-[url('https://images.unsplash.com/photo-1687673718479-68f6549671eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-blend-overlay bg-cover object-top bg-no-repeat flex items-center justify-center ">
			<BannerForm />
		</div>
	);
}
