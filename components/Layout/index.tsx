import Head from 'next/head';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

import { extractPageName } from '../../utils/helpers';
import styles from './Layout.module.css';

const Layout = ({ children }: PropsWithChildren) => {
	const router = useRouter();
	const title = `Hawx Event Production ${extractPageName(router.pathname)}`;

	return (
		<div className={styles.wrapper}>
			<Head>
				<title>{title}</title>
				<meta property="og:title" content={title} key="title" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicons/32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicons/16.png" />
				<link rel="stylesheet" href="https://use.typekit.net/ild2okq.css" />
			</Head>
			<main>{children}</main>
		</div>
	);
};

export default Layout;
