"use client";

import { useRouter } from "next/navigation";
import { SearchIcon } from "./Icons";
import { useState } from "react";

export function FormSearch() {
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
		<form
			className="flex gap-4 items-center justify-start flex-grow-[1]"
			onSubmit={handleSubmit}
		>
			<label className=" flex items-center bg-[#1b1e23] w-[70%] px-3 rounded-full ">
				<SearchIcon className="stroke-[#99a0ac]" />
				<input
					type="text"
					placeholder="Que quieres buscar?"
					className="py-3 px-3 outline-none w-full bg-transparent"
					value={keyword}
					onChange={handleChange}
				/>
			</label>
		</form>
	);
}
