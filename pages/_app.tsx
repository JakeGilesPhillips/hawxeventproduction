import type { AppProps } from 'next/app';

import Header from '../components/Header';
import Layout from '../components/Layout';
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Header />
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
