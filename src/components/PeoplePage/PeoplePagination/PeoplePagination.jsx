import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classnames from "classnames";
import styles from "./PeoplePagination.module.css";

const PeoplePagination = ({ arrNumPages, getResource, counterPage }) => {
	function handleClick(e) {
		getResource(
			`https://swapi.tech/api/people/?page=${+e.target.innerText}&limit=10`
		);
	}

	return (
		<div className={styles.pagination__container}>
			{arrNumPages.map((num, ind) => {
				return (
					<Link
						className={styles.pagination__link}
						key={ind}
						to={`/people/?page=${num}&limit=10`}
					>
						<button
							className={classnames(styles.pagination__button, {
								[styles.pagination__button_active]: counterPage === num,
							})}
							onClick={handleClick}
						>
							{num}
						</button>
					</Link>
				);
			})}
		</div>
	);
};

// PeoplePagination.propTypes = {
// //	test: PropTypes.string,
// };

export default PeoplePagination;
