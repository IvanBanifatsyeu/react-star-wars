import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./PeopleNavigation.module.css";

const PeopleNavigation = ({ counterPage, nextPage, prevPage, getResource }) => {
	const handleChangeNext = () => {
		getResource(nextPage);
	};
	const handleChangePrevious = () => {
		getResource(prevPage);
	};

	return (
		<div>
			{console.log("rerend Nav", counterPage)}
			<Link to={`/people/?page=${counterPage - 1}&limit=10`} className={styles.link}>
				<button onClick={handleChangePrevious} disabled={!prevPage} className={styles.button}>
					Previous
				</button>
			</Link>
			<Link to={`/people/?page=${counterPage + 1}&limit=10`} className={styles.link}>
				<button onClick={handleChangeNext} disabled={!nextPage} className={styles.button}>
					Next
				</button>
			</Link>
		</div>
	);
};

PeopleNavigation.propTypes = {
	counterPage: PropTypes.number,
	nextPage: PropTypes.string,
	prevPage: PropTypes.string,
	getResource: PropTypes.func,
};

export default PeopleNavigation;
