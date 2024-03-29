import type { AppProps } from "next/app";

import Layout from "../components/organisms/Layout";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
