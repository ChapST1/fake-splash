export function SearchIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			className="icon icon-tabler icon-tabler-search"
			{...props}
		>
			<title>Search</title>
			<path stroke="none" d="M0 0h24v24H0z" />
			<path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0M21 21l-6-6" />
		</svg>
	);
}

export function LogoIcon(props) {
	return (
		<svg
			width="32"
			height="32"
			{...props}
			viewBox="0 0 32 32"
			version="1.1"
			aria-labelledby="página-de-inicio-de-unsplash"
			aria-hidden="false"
		>
			<desc lang="en-US">Unsplash logo</desc>
			<title id="página-de-inicio-de-unsplash">
				Página de inicio de Unsplash
			</title>
			<path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
		</svg>
	);
}
