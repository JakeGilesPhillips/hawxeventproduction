import { useMemo } from 'react';
import styles from './AnimatedSection.module.scss';

interface AnimatedSectionProps {
	title: string;
	scroll: number;
	scrollMin: number;
	scrollMax: number;
	color: string;
}

const AnimatedSection = (props: AnimatedSectionProps) => {
	const { title, scroll, scrollMin, scrollMax, color } = props;

	const percentage = useMemo(() => {
		const height = Math.max(0, scrollMax - scrollMin);
		const difference = Math.max(0, scrollMax - scroll);
		return Math.max(-1, 1 - difference / height);
	}, [scroll, scrollMin, scrollMax]);

	const offset = useMemo(() => {
		return `${100 - percentage * 100}%`;
	}, [percentage]);

	return (
		<div className={styles.container}>
			<div className={styles.left} style={{ top: offset, backgroundColor: color }}>
				<span>{title}</span>
			</div>
			<div className={styles.right} style={{ left: offset, opacity: percentage }}>
				<span className={styles.label}>{title}</span>
			</div>
		</div>
	);
};

export default AnimatedSection;
