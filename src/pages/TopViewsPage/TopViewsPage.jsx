import PropTypes from "prop-types";
import styles from "./TopViewsPage.module.css";
import { getLocalStorage } from "@utils/localStore";
import { Link } from "react-router-dom";

const TopViewsPage = () => {
	const dataStory = getLocalStorage("counter");
	const arrDataStory = Object.entries(dataStory);
	const sortedArrDataStory = arrDataStory
		.sort((a, b) => b[1].counter - a[1].counter)
		.slice(0, 10);

	return (
		<>
			<h1 className="header__text "> Top 10 Views</h1>
			<ol className={styles.wrapper}>
				{sortedArrDataStory.map((person, ind) => (
					
						<Link key={person[0]} to={`/people/${person[0]}`} className={styles.container__person}>
							<span className={styles.person__number}>{ind + 1}</span>
							<img
								className={styles.person__image}
								src={person[1].personPhoto}
								alt="personPhoto"
							/>

							<span className={styles.person__name}>
								{person[1].personName}{" "}
							</span>
							<span className={styles.person__views}>
								{person[1].counter} views
							</span>
						</Link>
					
				))}
			</ol>
		</>
	);
};

TopViewsPage.propTypes = {
	//	test: PropTypes.string,
};

export default TopViewsPage;
