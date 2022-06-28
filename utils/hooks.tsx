import { useEffect, useState } from 'react';
import { Size } from './models';

export const useWindowSize = (): Size => {
	const initial: Size = { width: 0, height: 0 };
	const [windowSize, setWindowSize] = useState<Size>(initial);

	useEffect(() => {
		const handleResize = () => {
			const { innerWidth, innerHeight } = window;
			setWindowSize({ width: innerWidth ?? 0, height: innerHeight ?? 0 });
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return windowSize;
};

export const useScrollPosition = (): number => {
	const initial: number = 0;
	const [scrollPosition, setScrollPosition] = useState<number>(initial);

	useEffect(() => {
		const handleScroll = () => {
			const { scrollY } = window;
			setScrollPosition(scrollY);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return scrollPosition;
};
