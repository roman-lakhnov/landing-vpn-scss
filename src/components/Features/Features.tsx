import styles from './Features.module.scss'
import illustration2 from '../../assets/images/Illustration 2.svg'
import checkIcon from '../../assets/images/Group 1120.svg'

const Features = () => {
	return (
		<section className={styles.features}>
			<div className={styles.container}>
				<div className={styles.image}>
					<img src={illustration2} alt='Hero Illustration' />
				</div>
				<div className={styles.content}>
					<h1>We Provide Many Features You Can Use</h1>
					<p>
						You can explore the features that we provide with fun and have their
						own functions each feature.
					</p>
					<div className={styles.list}>
						<div className={styles.listItem}>
							<img src={checkIcon} alt='check' />
							<p>Powerfull online protection.</p>
						</div>
						<div className={styles.listItem}>
							<img src={checkIcon} alt='check' />
							<p>Internet without borders.</p>
						</div>
						<div className={styles.listItem}>
							<img src={checkIcon} alt='check' />
							<p>Supercharged VPN</p>
						</div>
						<div className={styles.listItem}>
							<img src={checkIcon} alt='check' />
							<p>No specific time limits.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Features
