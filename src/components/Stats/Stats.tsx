import styles from './Stats.module.scss'
import user from '../../assets/images/user.svg'
import location from '../../assets/images/location.svg'
import vectorLine from '../../assets/images/Vector 14.svg'
import server from '../../assets/images/Server.svg'

const Stats = () => {
	return (
		<div className={styles.statsWrapper}>
			<section className={styles.stats}>
				<div className={styles.container}>
					<div className={styles.statItem}>
						<img src={user} alt='Stat 1' />
						<div className={styles.itemText}>
							<h3>90+</h3>
							<p>Users</p>
						</div>
					</div>
					<div className={styles.line}>
						<img src={vectorLine} alt='line' />
					</div>
					<div className={styles.statItem}>
						<img src={location} alt='Stat 2' />
						<div className={styles.itemText}>
							<h3>30+</h3>
							<p>Locations</p>
						</div>
					</div>
					<div className={styles.line}>
						<img src={vectorLine} alt='line' />
					</div>
					<div className={styles.statItem}>
						<img src={server} alt='Stat 3' />
						<div className={styles.itemText}>
							<h3>50+</h3>
							<p>Servers</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Stats
