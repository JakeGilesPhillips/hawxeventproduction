import Link from "next/link";

import styles from "./HeaderLinks.module.scss";

const HeaderLinks = () => {
	return (
		<div className={styles.links}>
			<span className={styles.link}>
				<Link href="/">Home</Link>
			</span>
			<span className={styles.link}>
				<Link href="/services">Services</Link>
			</span>
			<span className={styles.link}>
				<Link href="/events">Events</Link>
			</span>
			<span className={styles.link}>
				<Link href="/about">About Us</Link>
			</span>
			<span className={styles.link}>
				<Link href="/contact">Contact</Link>
			</span>
		</div>
	);
};

export default HeaderLinks;
