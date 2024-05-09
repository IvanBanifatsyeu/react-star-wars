import { useState, useEffect } from "react";
import { setLocalStorage, getLocalStorage } from "@utils/localStore";
import PropTypes from "prop-types";
import styles from "./PersonViewCounter.module.css";
import gold_medal from "./img/gold_medal.svg";
import silver_medal from "./img/silver_medal.svg";
import bronze_medal from "./img/bronze_medal.svg";

const PersonViewCounter = ({ personPhoto, personName, personId }) => {
	const [counterView, setCounterView] = useState(null);
	const [placeInTop3, setPlaceInTop3] = useState(null);

	useEffect(() => {
		const counterStore = getLocalStorage("counter");

		if (counterStore.hasOwnProperty(personId)) {
			setLocalStorage("counter", {
				...counterStore,
				[personId]: {
					...counterStore[personId],
					counter: counterStore[personId].counter + 1,
				},
			});
			setCounterView(getLocalStorage("counter")[personId].counter);
		} else {
			{
				setLocalStorage("counter", {
					...counterStore,
					[personId]: {
						counter: 1,
						personName: personName,
						personPhoto: personPhoto,
					},
				});
				setCounterView(1);
			}
		}

		const arrDataStory = Object.entries(counterStore);
		const sortedArrDataStory = arrDataStory
			.sort((a, b) => b[1].counter - a[1].counter)
			.slice(0, 3);

		switch (personId) {
			case sortedArrDataStory[0][0]:
				setPlaceInTop3(gold_medal);

				break;
			case sortedArrDataStory[1][0]:
				setPlaceInTop3(silver_medal);

				break;
			case sortedArrDataStory[2][0]:
				setPlaceInTop3(bronze_medal);

				break;
		}
	}, [placeInTop3]);

	return (
		<>
			<div className={styles.text}>
				number of views of this character is {counterView}
			</div>
			{placeInTop3 && (
				<img className={styles.medal} src={placeInTop3} alt="medal" />
			)}
		</>
	);
};

PersonViewCounter.propTypes = {
	personPhoto: PropTypes.string,
	personName: PropTypes.string,
	personId: PropTypes.string,
};

export default PersonViewCounter;
