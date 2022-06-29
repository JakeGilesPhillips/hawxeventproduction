import { Entry } from "contentful";
import { useMemo } from "react";
import { useRouter } from "next/router";
import { createInterpolator } from "range-interpolator";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { ISection } from "../../../utils/models";
import { useScrollPosition } from "../../../utils/hooks";
import { getScrollPercentage } from "../../../utils/helpers";

import styles from "./AnimatedSection.module.scss";

interface AnimatedSectionProps {
	index: number;
	section: Entry<ISection>;
	scrollMin: number;
	scrollMax: number;
}

const AnimatedSection = (props: AnimatedSectionProps) => {
	const { index, section, scrollMin, scrollMax } = props;
	const { title, description, color } = section?.fields;

	const router = useRouter();
	const scroll = useScrollPosition();

	const percentage = useMemo(() => {
		return getScrollPercentage(scroll, scrollMin, scrollMax);
	}, [scroll, scrollMin, scrollMax]);

	const id = title.replaceAll(" ", "");

	const leftOffsetLerp = createInterpolator({ inputRange: [0.4, 0.8, 1.2, 1.6], outputRange: [-100, 0, 0, 100] });
	const leftOpacityLerp = createInterpolator({ inputRange: [0.4, 0.8, 1.2, 1.6], outputRange: [0, 1, 1, 0] });
	const scrollOffsetLerp = createInterpolator({ inputRange: [0.4, 0.8, 1.0, 1.0], outputRange: [100, 0, 0, 0] });
	const textOffsetLerp = createInterpolator({ inputRange: [0.0, 1.2, 1.6, 100.0], outputRange: [50, 50, 0, 0] });

	const left = leftOffsetLerp(percentage);
	const opacity = leftOpacityLerp(percentage);
	const top = scrollOffsetLerp(percentage);
	const text = textOffsetLerp(percentage);

	const scrollToSection = () => {
		window.scroll({ top: scrollMax, behavior: "smooth" });
	};

	return (
		<div id={id} className={styles.container} style={{ height: `calc(100% - ${50 * index}px)`, zIndex: index * 10 }}>
			<div className={styles.left} style={{ left, opacity }}>
				{documentToReactComponents(description)}
			</div>
			<div className={styles.right} style={{ top: `${top}%`, backgroundColor: color }}>
				<div className={styles.titleWrapper} style={{ top: `calc(${text}% + 25px)` }} onClick={scrollToSection}>
					<span className={styles.title}>{title}</span>
				</div>
			</div>
		</div>
	);
};

export default AnimatedSection;
