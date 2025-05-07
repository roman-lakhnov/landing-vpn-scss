import styles from './Features.module.scss'

const Features = () => {
	return (
		<section className={styles.features}>
			<div className={styles.container}>
				<div className={styles.image}>
					<img
						src='/src/assets/images/Illustration 2.svg'
						alt='Hero Illustration'
					/>
				</div>
				<div className={styles.content}>
					<h1>We Provide Many Features You Can Use</h1>
					<p>
						You can explore the features that we provide with fun and have their
						own functions each feature.
					</p>
					<div className={styles.list}>
						<div className={styles.listItem}>
							<img src='/src/assets/images/Group 1120.svg' alt='check' />
							<p>Powerfull online protection.</p>
						</div>
						<div className={styles.listItem}>
							<img src='/src/assets/images/Group 1120.svg' alt='check' />
							<p>Internet without borders.</p>
						</div>
						<div className={styles.listItem}>
							<img src='/src/assets/images/Group 1120.svg' alt='check' />
							<p>Supercharged VPN</p>
						</div>
						<div className={styles.listItem}>
							<img src='/src/assets/images/Group 1120.svg' alt='check' />
							<p>No specific time limits.</p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.bgBox} />
		</section>
	)
}

export default Features
