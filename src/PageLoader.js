import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Определите customEase здесь, используя любую подходящую функцию easing GSAP
const customEase = gsap.parseEase("power2.inOut");

export function PageLoader({ onLoadingComplete }) {
	const pageBgWrapRef = useRef(null);
	const pageOverlayRef = useRef(null);
	const redBgRef = useRef(null);
	const greyBgRef = useRef(null);

	useEffect(() => {
		const pageBgWrap = pageBgWrapRef.current;
		const redBg = redBgRef.current;
		const greyBg = greyBgRef.current;

		const pageToPageAnim = gsap.timeline({
			onComplete: () => {
				onLoadingComplete();
			}
		});

		pageToPageAnim.to(redBg, {
			y: "0%",
			rotate: 0,
			onStart: () => {
				pageBgWrap.style.opacity = "1";
			},
			duration: 1.5,
			ease: customEase,
		});

		pageToPageAnim.to(greyBg, {
			y: "0%",
			rotate: 0,
			duration: 1.5,
			ease: customEase,
			onComplete: () => {
				pageBgWrap.style.opacity = "0";
			},
		}, "-=1.35");

		return () => {
			pageToPageAnim.kill();
		};
	}, [onLoadingComplete]);

	return (
		<div id="loader" ref={pageBgWrapRef}>
			<div id="loaderOverlay" ref={pageOverlayRef}></div>
			<div className="pink-bg" ref={redBgRef}></div>
			<div className="grey-bg" ref={greyBgRef}></div>
		</div>
	);
}
export default PageLoader;