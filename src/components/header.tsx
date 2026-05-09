import React from 'react';
import clsx from 'clsx';
import { AppAcceleratorLogo } from './icons/logos';
import { Link } from 'react-router';

export function Header({
	className,
	children,
}: React.ComponentProps<'header'>) {
	return (
		<header
			className={clsx(
				'h-13 shrink-0 w-full px-4 border-b flex items-center',
				className,
			)}
		>
			<h1 className="flex items-center gap-2 mx-4">
				<Link to="/" className="flex items-center gap-2">
					<AppAcceleratorLogo
						className="h-5 w-5"
						aria-label="The App Accelerator"
					/>
					<span className="text-sm font-semibold tracking-tight text-text-primary">The App Accelerator</span>
				</Link>
			</h1>
			<div className="flex-1"></div>
			<div className="flex items-center gap-4">
				{children}
			</div>
		</header>
	);
}
