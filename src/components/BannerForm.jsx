"use client";

import { useState } from "react";
import { SearchIcon } from "./Icons";
import { useRouter } from "next/navigation";

export function BannerForm() {
	const [keyword, setKeyword] = useState("");
	const router = useRouter();

	const handleChange = (e) => {
		setKeyword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (keyword.trim() === "") return;
		router.push(`/search?q=${keyword}&page=1`);
		setKeyword("");
	};

	return (
		<form className="md:w-[65%] flex flex-col gap-4" onSubmit={handleSubmit}>
			<h2 className="text-4xl">FakeSplash</h2>
			<div>
				<p>La fuente de imágenes de internet</p>
				<p>Con recursos de creadores de todo el mundo</p>
			</div>
			<label
				htmlFor=""
				className="flex rounded-md overflow-hidden bg-[#131419] items-center gap-2 px-5"
			>
				<SearchIcon />
				<input
					type="search"
					className="w-full py-4 px-3 outline-none bg-[#131419]"
					placeholder="Busca imágenes de alta resolución"
					value={keyword}
					onChange={handleChange}
				/>
			</label>
		</form>
	);
}
