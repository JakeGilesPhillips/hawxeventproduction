import type { NextPage } from "next";
import { createClient, Entry } from "contentful";

import { IScrollSection, ISection } from "../utils/models";
import { useWindowSize } from "../utils/hooks";
import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from "../utils/constants";

import Scroller from "../components/atoms/Scroller";
import Header from "../components/organisms/Header";
import HeroSection from "../components/molecules/HeroSection";
import AnimatedSection from "../components/molecules/AnimatedSection";

import styles from "../pages/home/Home.module.scss";
import { useMemo } from "react";
import { getScrollMinMax } from "../utils/helpers";

export async function getStaticProps() {
	const client = createClient({ space: CONTENTFUL_SPACE_ID, accessToken: CONTENTFUL_ACCESS_TOKEN });
	const res = await client.getEntries({ content_type: "section" });
	return { props: { sections: res.items } };
}

interface HomeProps {
	sections: Entry<ISection>[];
}

const Home = (props: HomeProps) => {
	const { sections } = props;

	const window = useWindowSize();

	const sectionHeight = window?.height ?? 0;
	const scrollerHeight = sectionHeight * (sections?.length + 1);

	return (
		<div className={styles.container}>
			<Header sections={sections} sectionHeight={sectionHeight} />
			<Scroller height={scrollerHeight} />
			<HeroSection scrollMin={0} scrollMax={sectionHeight} />
			{sections
				.sort((a, b) => a.fields.order - b.fields.order)
				.map((section, index) => (
					<AnimatedSection key={index} index={index} section={section} {...getScrollMinMax(sectionHeight, index)} />
				))}
		</div>
	);
};

export default Home;
