import PropTypes from "prop-types";
import styles from "./PersonFilms.module.css";

const PersonFilms = ({ personFilms }) => {
	return (
		<div className={styles.wrapper}>
			<ul className={styles.list__container}>
				{personFilms.map((item, ind) => (
					<li className={styles.list__item} key={ind}>
						<span className={styles.item__episode}>Episode {item.episode}</span>
						<span className={styles.item__colon}> : </span>
						<span className={styles.item__title}>{item.title}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

PersonFilms.propTypes = {
	personFilms: PropTypes.array,
};

export default PersonFilms;
