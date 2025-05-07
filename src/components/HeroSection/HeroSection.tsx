import styles from './HeroSection.module.scss'

const HeroSection = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1>
						Want anything to be easy with
						<span> LaslesVPN.</span>
					</h1>
					<p>
						Provide a network for all your needs with ease and fun using
						<span> LaslesVPN</span> discover interesting features from us.
					</p>
					<div className={styles.wrapper}>
						<a href='#' className={styles.btn}>
							Get Started
						</a>
					</div>
				</div>
				<div className={styles.image}>
					<img
						src='/src/assets/images/Illustration 1.svg'
						alt='Hero Illustration'
					/>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
