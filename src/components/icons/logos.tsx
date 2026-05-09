export function AppAcceleratorLogo(props: React.SVGProps<SVGSVGElement> & { color1?: string, color2?: string}) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			fill="none"
			{...props}
		>
			{/* Sprout/seed mark — soft rounded leaves rising from a base */}
			<path
				fill={props.color1 ?? "#034F46"}
				d="M16 30c-1.1 0-2-.9-2-2v-8.5c0-.55.45-1 1-1s1 .45 1 1V28c0 1.1-.9 2 0 2Z"
			/>
			<path
				fill={props.color1 ?? "#034F46"}
				d="M16 22c-5.5 0-10-4.5-10-10 0-1.1.9-2 2-2 5.5 0 10 4.5 10 10 0 1.1-.9 2-2 2Z"
			/>
			<path
				fill={props.color2 ?? "#6FA59C"}
				d="M16 22c5.5 0 10-4.5 10-10 0-1.1-.9-2-2-2-5.5 0-10 4.5-10 10 0 1.1.9 2 2 2Z"
			/>
		</svg>
	);
}

export function TypeScriptIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 400 400" id="Layer_1" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path className="st0" d="M0 200V0h400v400H0" fill="#007acc" />
			<path className="st1" d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z" fill="#fff" />
		</svg>);
}

export function CSSIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" />
			<path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" />
			<path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white" />
		</svg>
	);
}

