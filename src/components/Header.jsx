"use client";

import Link from "next/link";
import { FormSearch } from "./FormSearch";
import { ListOfTopics } from "./ListOfTopics";
import { usePathname } from "next/navigation";
import { LogoIcon } from "./Icons";

export function Header() {
	const pathname = usePathname();
	const isInTopicsPage = pathname === "/topics";

	return (
		<header
			className={`${
				isInTopicsPage ? "h-[65px]" : "h-[130px]"
			} w-full bg-[#131418f7] flex flex-col items-center justify-between px-6 py-2 fixed top-0 left-0 backdrop-blur-sm z-30`}
		>
			<div className="w-full flex-1 flex items-center justify-evenly gap-5">
				<Link href="/gallery?page=1" className="text-2xl">
					<LogoIcon className="fill-[#f2f2f2]" />
				</Link>

				<FormSearch />

				{/* <div className="flex gap-4">
					<Link href="/topics">Colecciones</Link>
				</div> */}
			</div>

			{!isInTopicsPage && <ListOfTopics />}
		</header>
	);
}
