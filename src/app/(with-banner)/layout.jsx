import { Header } from "@/components/Header";

export default function Layout({ children }) {
	return (
		<div>
			<Header />
			<div className="px-6">{children}</div>
		</div>
	);
}
