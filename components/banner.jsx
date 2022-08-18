import styles from './banner.module.css'

const Banner = ({ buttonText, handlOnClick }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<span className={styles.title1}>Coffee</span>
				<span className={styles.title2}>Connoisseur</span>
			</h1>
			<p className={styles.subTitle}>Discover youre local coffee shop</p>
			<button className={styles.btn} onClick={handlOnClick}>
				{buttonText}
			</button>
		</div>
	)
}

export default Banner
