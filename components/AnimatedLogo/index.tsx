import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './AnimatedLogo.module.css';

const AnimatedLogo = () => {
	const router = useRouter();

	return (
		<div className={styles.logoWrappper}>
			<div className={styles.logoGreyscale}>
				<Image
					src="/images/logos/white.png"
					alt="logo"
					width={6349}
					height={1959}
					layout="responsive"
					style={{ cursor: 'pointer' }}
					onClick={() => router.push('/')}
				/>
			</div>
			<div className={styles.logoColor}>
				<Image
					src="/images/logos/color.png"
					alt="logo"
					width={6349}
					height={1959}
					layout="responsive"
					style={{ cursor: 'pointer' }}
					onClick={() => router.push('/')}
				/>
			</div>
		</div>
	);
};

export default AnimatedLogo;
