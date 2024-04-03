import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import UiButton from "@UI/UiButton/UiButton";
import styles from "./PeopleNavigation.module.css";

const PeopleNavigation = ({
	counterPage,
	nextPage,
	prevPage,
	getResource,
	isloading,
}) => {
	const handleChangeNext = () => {
		getResource(nextPage);
	};
	const handleChangePrevious = () => {
		getResource(prevPage);
	};

	return (
		<div>
			
			<Link
				to={`/people/?page=${counterPage - 1}&limit=10`}
				className={styles.link}
			>
				<UiButton
					text="Previous"
					onClick={handleChangePrevious}
					disabled={!prevPage || isloading}
				/>
			</Link>
			<Link
				to={`/people/?page=${counterPage + 1}&limit=10`}
				className={styles.link}
			>
				<UiButton
					text="Next"
					onClick={handleChangeNext}
					disabled={!nextPage || isloading}
				/>
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
