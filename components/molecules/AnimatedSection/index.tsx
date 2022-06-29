import { useMemo } from "react";
import { createInterpolator } from "range-interpolator";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { IScrollSection, ISection } from "../../../utils/models";
import { useScrollPosition } from "../../../utils/hooks";
import { getScrollPercentage } from "../../../utils/helpers";

import styles from "./AnimatedSection.module.scss";
import { Entry } from "contentful";

interface AnimatedSectionProps {
	section: Entry<ISection>;
	scrollMin: number;
	scrollMax: number;
}

const AnimatedSection = (props: AnimatedSectionProps) => {
	const { section, scrollMin, scrollMax } = props;
	const { title, description, color } = section?.fields;

	const scroll = useScrollPosition();

	const percentage = useMemo(() => {
		return getScrollPercentage(scroll, scrollMin, scrollMax);
	}, [scroll, scrollMin, scrollMax]);

	const leftOffsetLerp = createInterpolator({ inputRange: [0.4, 0.8, 1.2, 1.6], outputRange: [-100, 0, 0, 100] });
	const leftOpacityLerp = createInterpolator({ inputRange: [0.4, 0.8, 1.2, 1.6], outputRange: [0, 1, 1, 0] });
	const scrollOffsetLerp = createInterpolator({ inputRange: [0.4, 0.8, 1.0, 1.0], outputRange: [100, 0, 0, 0] });

	const left = leftOffsetLerp(percentage);
	const opacity = leftOpacityLerp(percentage);
	const top = scrollOffsetLerp(percentage);

	return (
		<div className={styles.container}>
			<div className={styles.left} style={{ left, opacity }}>
				{documentToReactComponents(description)}
			</div>
			<div className={styles.right} style={{ top: `${top}%`, backgroundColor: color }}>
				<span className={styles.title}>{title}</span>
			</div>
		</div>
	);
};

export default AnimatedSection;
