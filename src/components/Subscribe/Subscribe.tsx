import styles from './Subscribe.module.scss'
const Subscribe = () => {
	return (
		<div className={styles.wrapper}>
			<section className={styles.subscribe}>
				<div className={styles.content}>
					<h1>Subscribe Now for Get Special Features!</h1>
					<p>Let's subscribe with us and find the fun.</p>
				</div>
				<div className={styles.btn}>
					<a href='#'>Subscribe Now</a>
				</div>
			</section>
		</div>
	)
}

export default Subscribe
