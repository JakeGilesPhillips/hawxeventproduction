import { Entry } from "contentful";
import Image from "next/image";
import { useRouter } from "next/router";
import { createInterpolator } from "range-interpolator";
import { useScrollPosition } from "../../../utils/hooks";
import { ISection } from "../../../utils/models";
import Img from "../../atoms/Img";

import styles from "./AnimatedLogo.module.scss";

interface AnimatedLogoProps {
	sections: Entry<ISection>[];
	sectionHeight: number;
}

const AnimatedLogo = (props: AnimatedLogoProps) => {
	const { sections, sectionHeight } = props;

	const router = useRouter();
	const scroll = useScrollPosition();

	const percentage = scroll / sectionHeight;

	const inputs = sections.map((a, index) => [index, index + 0.5, index + 0.8, index + 1]).flat();
	const outputs = sections.map((a, index) => [100 * index, 100 * index, 100 * index + 50, 100 * index + 100]).flat();

	const offsetLerp = createInterpolator({ inputRange: inputs, outputRange: outputs });
	const offset = offsetLerp(percentage);

	return (
		<div className={styles.logoWrappper}>
			<div className={styles.logoScroller} style={{ top: `${-offset}%` }}>
				<div className={styles.logo}>
					<Image
						src="/images/logos/color.png"
						alt="logo"
						width={6349}
						height={1959}
						layout="responsive"
						style={{ cursor: "pointer" }}
						onClick={() => router.push("/")}
					/>
				</div>
				{sections.map(({ fields }, index) => {
					return (
						<div key={index} className={styles.logo}>
							<Img image={fields.logo} layout="responsive" />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AnimatedLogo;
