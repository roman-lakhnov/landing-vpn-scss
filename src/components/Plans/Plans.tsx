import styles from './Plans.module.scss'

const Plans = () => {
	return (
		<section className={styles.plans}>
			<h1>Choose Your Plan</h1>
			<p>
				Let's choose the package that is best for you and explore it happily and
				cheerfully.
			</p>
			<div className={styles.container}>
				<div className={styles.plan}>
					<div>
						<div className={styles.planIcon}>
							<img src='/src/assets/images/Plan.svg' alt='plan' />
						</div>
						<h2>Free Plan</h2>
						<div className={styles.list}>
							<div className={styles.listItem}>
								<div className={styles.check}>
									<img src='/src/assets/images/Group 1223.svg' alt='check' />
								</div>
								<p>Unlimited Bandwitch</p>
							</div>
							<div className={styles.listItem}>
								<div className={styles.check}>
									<img src='/src/assets/images/Group 1223.svg' alt='check' />
								</div>
								<p>Encrypted Connection</p>
							</div>
							<div className={styles.listItem}>
								<div className={styles.check}>
									<img src='/src/assets/images/Group 1223.svg' alt='check' />
								</div>
								<p>No Traffic Logs</p>
							</div>
							<div className={styles.listItem}>
								<div className={styles.check}>
									<img src='/src/assets/images/Group 1223.svg' alt='check' />
								</div>
								<p>Works on All Devices</p>
							</div>
						</div>
					</div>
					<div className={styles.selectBox}>
						<p className={styles.price}>Free</p>
						<a className={styles.btn} href='#'>
							Select
						</a>
					</div>
				</div>
				<div className={styles.plan}>
					<div>
						<div className={styles.planIcon}>
							<img src='/src/assets/images/Plan.svg' alt='plan' />
						</div>
						<h2>Standard Plan</h2>
						<div className={styles.list}>
							<div className={styles.listItem}>
								<div className={styles.check}>
									<img src='/src/assets/images/Group 1223.svg' alt='check' />
								</div>
								<p>Unlimited Bandwitch</p>
							</div>
							<div className={styles.listItem}>
								<div className={styles.check}>
									<img src='/src/assets/images/Group 1223.svg' alt='check' />
								</div>
								<p>Encrypted Connection</p>
							</div>
							<div className={styles.listItem}>
								<div className={styles.check}>
									<img src='/src/assets/images/Group 1223.svg' alt='check' />
								</div>
								<p>Yes Traffic Logs</p>
							</div>
							<div className={styles.listItem}>
								<div className={styles.check}>
									<img src='/src/assets/images/Group 1223.svg' alt='check' />
								</div>
								<p>Works on All Devices</p>
							</div>
							<div className={styles.listItem}>
								<div className={styles.check}>
									<img src='/src/assets/images/Group 1223.svg' alt='check' />
								</div>
								<p>Connect Anyware</p>
							</div>
						</div>
					</div>
					<div className={styles.selectBox}>
						<p className={styles.price}>
							$9<span> / mo</span>
						</p>
						<a className={styles.btn} href='#'>
							Select
						</a>
					</div>
				</div>
				<div className={styles.plan}>
					<div>
						<div className={styles.planIcon}>
							<img src='/src/assets/images/Plan.svg' alt='plan' />
						</div>
						<h2>Premium Plan</h2>
						<div className={styles.list}>
							<div className={styles.listItem}>
								<div className={styles.check}>
									<img src='/src/assets/images/Group 1223.svg' alt='check' />
								</div>
								<p>Unlimited Bandwitch</p>
							</div>
							<div className={styles.listItem}>
								<div className={styles.check}>
									<img src='/src/assets/images/Group 1223.svg' alt='check' />
								</div>
								<p>Encrypted Connection</p>
							</div>
							<div className={styles.listItem}>
								<div className={styles.check}>
									<img src='/src/assets/images/Group 1223.svg' alt='check' />
								</div>
								<p>Yes Traffic Logs</p>
							</div>
							<div className={styles.listItem}>
								<div className={styles.check}>
									<img src='/src/assets/images/Group 1223.svg' alt='check' />
								</div>
								<p>Works on All Devices</p>
							</div>
							<div className={styles.listItem}>
								<div className={styles.check}>
									<img src='/src/assets/images/Group 1223.svg' alt='check' />
								</div>
								<p>Connect Anyware</p>
							</div>
							<div className={styles.listItem}>
								<div className={styles.check}>
									<img src='/src/assets/images/Group 1223.svg' alt='check' />
								</div>
								<p>Get New Features</p>
							</div>
						</div>
					</div>
					<div className={styles.selectBox}>
						<p className={styles.price}>
							$12<span> / mo</span>
						</p>
						<a className={styles.btn} href='#'>
							Select
						</a>
					</div>
				</div>
			</div>

		</section>
	)
}

export default Plans
