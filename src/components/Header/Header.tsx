import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<a href='/'>
						<img src='/src/assets/images/logo.svg' alt='LaslesVPN_Logo' />
					</a>
					<span>
						Lasles
						<span>VPN</span>
					</span>
				</div>
				<nav className={styles.nav}>
					<ul>
						<li>
							<a href='#'>About</a>
						</li>
						<li>
							<a href='#'>Features</a>
						</li>
						<li>
							<a href='#'>Pricing</a>
						</li>
						<li>
							<a href='#'>Testimonials</a>
						</li>
						<li>
							<a href='#'>Help</a>
						</li>
					</ul>
				</nav>
				<div className={styles.auth}>
					<a href='#' className={styles.signIn}>
						Sign In
					</a>
					<div className={styles.wrapper}>
						<a href='#' className={styles.signUp}>
							Sign Up
						</a>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
