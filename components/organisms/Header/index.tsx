import { Entry } from "contentful";

import { ISection } from "../../../utils/models";

import AnimatedLogo from "../../molecules/AnimatedLogo";
import HeaderLinks from "../../molecules/HeaderLinks";

import styles from "./Header.module.scss";

interface HeaderProps {
	sections: Entry<ISection>[];
	sectionHeight: number;
}

const Header = (props: HeaderProps) => {
	return (
		<div id={styles.header}>
			<AnimatedLogo {...props} />
			{/* <HeaderLinks /> */}
		</div>
	);
};

export default Header;
