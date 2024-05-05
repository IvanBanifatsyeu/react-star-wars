import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./SearchPageInfo.module.css";

const SearchPageInfo = ({ people }) => (
	<>
		{people.length ? (
			<ul className={styles.list__container}>
				{people.slice(0, 10).map((el) => (
					<li className={styles.list__item} key={el.id}>
						<Link to={`/people/${el.id}`}>
							<img className={styles.person__photo} src={el.img} alt={el.name} />
							<p className={styles.person__name}>{el.name}</p>
						</Link>
					</li>
				))}
			</ul>
		) : (
			<h2 className={styles.person__comment}>No results</h2>
		)}
	</>
);

SearchPageInfo.propTypes = {
	people: PropTypes.array,
};

export default SearchPageInfo;
