import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cn from "classnames";

import styles from "./PeoplePagination.module.css";

const PeoplePagination = ({ arrNumPages, getResource, counterPage ,theme = "dark" }) => {
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
							className={cn(styles.pagination__button, {
								[styles.pagination__button_active]: counterPage === num,
							}, styles[theme])}
							onClick={handleClick}
							disabled={counterPage === num}
						>
							{num}
						</button>
					</Link>
				);
			})}
		</div>
	);
};

 PeoplePagination.propTypes = {
	arrNumPages: PropTypes.array,
	getResource: PropTypes.func,
	counterPage: PropTypes.number,
 };

export default PeoplePagination;
