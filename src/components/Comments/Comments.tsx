import styles from './Comments.module.scss'

const Comments = () => {
	return (
		<section className={styles.comments}>
			<h1>Trusted by Thousands of Happy Customer</h1>
			<p>
				These are the stories of our customers who have joined us with great
				pleasure when using this crazy feature.
			</p>
			<div className={styles.list}>
				<div className={styles.listItem}>
					<div className={styles.header}>
						<div className={styles.profile}>
							<img
								src='/src/assets/images/Ellipse 175.svg'
								alt='profile photo'
							/>
							<div className={styles.profileInfo}>
								<h2>Viezh Robert</h2>
								<p>Warsaw, Poland</p>
							</div>
						</div>
						<div className={styles.rating}>
							<p>4.5</p>
							<img src='/src/assets/images/Group 1161.svg' alt='star' />
						</div>
					</div>
					<p>
						“Wow... I am very happy to use this VPN, it turned out to be more
						than my expectations and so far there have been no problems.
						LaslesVPN always the best”.
					</p>
				</div>
				<div className={styles.listItem}>
					<div className={styles.header}>
						<div className={styles.profile}>
							<img
								src='/src/assets/images/Ellipse 176.svg'
								alt='profile photo'
							/>
							<div className={styles.profileInfo}>
								<h2>Yessica Christy</h2>
								<p>Shanxi, China</p>
							</div>
						</div>
						<div className={styles.rating}>
							<p>4.5</p>
							<img src='/src/assets/images/Group 1161.svg' alt='star' />
						</div>
					</div>
					<p>
						“I like it because I like to travel far and still can connect with
						high speed.”.
					</p>
				</div>
				<div className={styles.listItem}>
					<div className={styles.header}>
						<div className={styles.profile}>
							<img
								src='/src/assets/images/Ellipse 177.svg'
								alt='profile photo'
							/>
							<div className={styles.profileInfo}>
								<h2>Kim Young Jou</h2>
								<p>Seoul, South Korea</p>
							</div>
						</div>
						<div className={styles.rating}>
							<p>4.5</p>
							<img src='/src/assets/images/Group 1161.svg' alt='star' />
						</div>
					</div>
					<p>
						“This is very unusual for my business that currently requires a
						virtual private network that has high security.”.
					</p>
				</div>
			</div>
			<div className={styles.buttonContainer}>
				<img src='/src/assets/images/Group 1300.svg' alt='dots' />
				<div className={styles.arrowButtons}>
					<a className={styles.arrowLeft} href='#'></a>
					<a className={styles.arrowRight} href='#'></a>
				</div>
			</div>
			<div className={styles.bgBox} />
		</section>
	)
}

export default Comments
