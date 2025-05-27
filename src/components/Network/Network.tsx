import styles from './Network.module.scss'
import hugeGlobal from '../../assets/images/Huge Global.svg'
import sponsored from '../../assets/images/Sponsored.svg'

const Network = () => {
	return (
		<section className={styles.network}>
			<h1>Huge Global Network of Fast VPN</h1>
			<p>
				See LaslesVPN everywhere to make it easier for you when you move
				locations.
			</p>
			<img src={hugeGlobal} alt='Global map' />
			<img src={sponsored} alt='Sponsored' />
		</section>
	)
}

export default Network
