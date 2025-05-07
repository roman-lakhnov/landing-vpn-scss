import styles from './Stats.module.scss'

const Stats = () => {
	return (
		<div className={styles.statsWrapper}>
			<section className={styles.stats}>
				<div className={styles.container}>
					<div className={styles.statItem}>
						<img src='/src/assets/images/user.svg' alt='Stat 1' />
						<div className={styles.itemText}>
							<h3>90+</h3>
							<p>Users</p>
						</div>
					</div>
					<div className={styles.line}>
						<img src='/src/assets/images/Vector 14.svg' alt='line' />
					</div>
					<div className={styles.statItem}>
						<img src='/src/assets/images/location.svg' alt='Stat 2' />
						<div className={styles.itemText}>
							<h3>30+</h3>
							<p>Locations</p>
						</div>
					</div>
					<div className={styles.line}>
						<img src='/src/assets/images/Vector 14.svg' alt='line' />
					</div>
					<div className={styles.statItem}>
						<img src='/src/assets/images/Server.svg' alt='Stat 3' />
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
