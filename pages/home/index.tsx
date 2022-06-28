import type { NextPage } from 'next';
import AnimatedSection from '../../components/AnimatedSection';
import { useScrollPosition, useWindowSize } from '../../utils/hooks';
import styles from './Home.module.scss';

const sections = [
	{ title: 'audio', color: '#2CD5C4' },
	{ title: 'visual', color: '#00B5E2' },
	{ title: 'special fx', color: '#9B26B6' },
	{ title: 'more', color: '#DA1884' },
];

const Home: NextPage = () => {
	const window = useWindowSize();
	const scroll = useScrollPosition();

	const numSections = sections?.length ?? 0;

	return (
		<div className={styles.container}>
			<div id="scroller" style={{ height: window.height * sections.length }} />
			<div style={{ height: window.height }} />
			{sections.map((section, index) => {
				return (
					<AnimatedSection
						key={index}
						title={section.title}
						color={section.color}
						scroll={scroll}
						scrollMin={window.height * index}
						scrollMax={window.height * (index + 1)}
					/>
				);
			})}
		</div>
	);
};

export default Home;
