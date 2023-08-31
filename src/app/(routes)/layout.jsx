import { Header } from "@/components/Header";
import { HeaderSkeleton } from "@/components/loading/HeaderSkeleton";
import { Suspense } from "react";

export default function Layout({ children }) {
	const name = "chris";

	return (
		<div>
			<Suspense fallback={<HeaderSkeleton />}>
				<Header />
			</Suspense>
			<div className="px-6">{children}</div>
		</div>
	);
}
