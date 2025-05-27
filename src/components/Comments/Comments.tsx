import styles from './Comments.module.scss'
import profile1 from '../../assets/images/Ellipse 175.svg'
import profile2 from '../../assets/images/Ellipse 176.svg'
import profile3 from '../../assets/images/Ellipse 177.svg'
import starIcon from '../../assets/images/Group 1161.svg'
import dotsIcon from '../../assets/images/Group 1300.svg'

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
							<img src={profile1} alt='profile photo' />
							<div className={styles.profileInfo}>
								<h2>Viezh Robert</h2>
								<p>Warsaw, Poland</p>
							</div>
						</div>
						<div className={styles.rating}>
							<p>4.5</p>
							<img src={starIcon} alt='star' />
						</div>
					</div>
					<p>
						"Wow... I am very happy to use this VPN, it turned out to be more
						than my expectations and so far there have been no problems.
						LaslesVPN always the best".
					</p>
				</div>
				<div className={styles.listItem}>
					<div className={styles.header}>
						<div className={styles.profile}>
							<img src={profile2} alt='profile photo' />
							<div className={styles.profileInfo}>
								<h2>Yessica Christy</h2>
								<p>Shanxi, China</p>
							</div>
						</div>
						<div className={styles.rating}>
							<p>4.5</p>
							<img src={starIcon} alt='star' />
						</div>
					</div>
					<p>
						"I like it because I like to travel far and still can connect with
						high speed.".
					</p>
				</div>
				<div className={styles.listItem}>
					<div className={styles.header}>
						<div className={styles.profile}>
							<img src={profile3} alt='profile photo' />
							<div className={styles.profileInfo}>
								<h2>Kim Young Jou</h2>
								<p>Seoul, South Korea</p>
							</div>
						</div>
						<div className={styles.rating}>
							<p>4.5</p>
							<img src={starIcon} alt='star' />
						</div>
					</div>
					<p>
						"This is very unusual for my business that currently requires a
						virtual private network that has high security.".
					</p>
				</div>
			</div>
			<div className={styles.buttonContainer}>
				<img src={dotsIcon} alt='dots' />
				<div className={styles.arrowButtons}>
					<a className={styles.arrowLeft} href='#'></a>
					<a className={styles.arrowRight} href='#'></a>
				</div>
			</div>
		</section>
	)
}

export default Comments
