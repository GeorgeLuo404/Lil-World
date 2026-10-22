"use client";

import type { ImageLoaderProps } from "next/image";

// Let Sanity's image CDN resize and convert images instead of the Next.js optimizer.
export default function sanityImageLoader({ src, width, quality }: ImageLoaderProps) {
	const url = new URL(src);
	url.searchParams.set("auto", "format");
	url.searchParams.set("fit", "max");
	url.searchParams.set("w", width.toString());
	url.searchParams.set("q", (quality ?? 75).toString());
	return url.href;
}
