import { useMemo } from "react";
import { createInterpolator } from "range-interpolator";

import { getScrollPercentage } from "../../../utils/helpers";
import { useScrollPosition } from "../../../utils/hooks";

import styles from "./HeroSection.module.scss";

interface HeroSectionProps {
	scrollMin: number;
	scrollMax: number;
}

const HeroSection = (props: HeroSectionProps) => {
	const { scrollMin, scrollMax } = props;

	const scroll = useScrollPosition();

	const percentage = useMemo(() => {
		return getScrollPercentage(scroll, scrollMin, scrollMax);
	}, [scroll, scrollMin, scrollMax]);

	const offsetLerp = createInterpolator({ inputRange: [0, 0.2], outputRange: [0, -100] });
	const opacityLerp = createInterpolator({ inputRange: [0, 0.2], outputRange: [1, 0] });

	return (
		<div className={styles.container}>
			<div className={styles.heroContainer} style={{ left: offsetLerp(percentage) }}>
				<span className={styles.hero} style={{ opacity: opacityLerp(percentage) }}>
					We strive to create the best audio and visual experience for our customers from plug and play ipod system to a
					festival stage with full lighting show, every show is special to us.
				</span>
			</div>
			<div
				className={styles.arrowContainer}
				style={{ right: offsetLerp(percentage), opacity: opacityLerp(percentage) }}
			>
				<span className={styles.arrow}>▼</span>
			</div>
		</div>
	);
};

export default HeroSection;
