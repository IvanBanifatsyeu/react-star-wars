import PropTypes from "prop-types";
import { useEffect, useState, lazy, Suspense } from "react";
import { withErrorApi } from "@hoc/withErrorApi";
import { useParams } from "react-router-dom";
import { getApiResource } from "@utils/network";
import { API_PERSON, API_FILM } from "@constants/api";
import { getPeopleImg } from "@services/getPeopleData";
import PersonLinkBack from "@components/PersonPAge/PersonLinkBack";
import PersonInfo from "@components/PersonPAge/PersonInfo";
import PersonPhoto from "@components/PersonPAge/PersonPhoto/PersonPhoto";
import UiLoading from "@UI/UiLoading";
import styles from "./PersonPage.module.css";

const PersonFilms = lazy(() => import("@components/PersonPAge/PersonFilms"));
const PersonPage = ({ setErrorApi, arrFood }) => {
	const { id } = useParams();
	const [personInfo, setPersonInfo] = useState(null);
	const [personName, setPersonName] = useState(null);
	const [personPhoto, setPersonPhoto] = useState(null);
	const [personFilms, setPersonFilms] = useState(null);

	useEffect(() => {
		(async () => {
			const res = await getApiResource(API_PERSON + `/${id}`);

			const personData = res.result.properties;
			if (res) {
				setPersonInfo([
					{ title: "Height", data: personData.height },
					{ title: "Mass", data: personData.mass },
					{ title: "Hair Color", data: personData.hair_color },
					{ title: "Skin Color", data: personData.skin_color },
					{ title: "Eye Color", data: personData.eye_color },
					{ title: "Birth Year", data: personData.birth_year },
					{ title: "Gender", data: personData.gender },
				]);
				setPersonName(personData.name);
				setPersonPhoto(getPeopleImg(id));
				setErrorApi(false);
			} else {
				setErrorApi(true);
			}
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const resFilms = await getApiResource(API_FILM);

			const filmsThisCharacter = resFilms.result
				.map((item) => {
					if (
						item.properties.characters.includes(
							`https://www.swapi.tech/api/people/${id}`
						)
					) {
						return { title: item.properties.title, episode: item.uid };
					}
				})
				.filter((item) => !!item);
			setPersonFilms(filmsThisCharacter);
		})();
	}, []);

	return (
		<>
			<PersonLinkBack />
			<div className={styles.wrapper}>
				<span className={styles.person__name}>{personName}</span>
				<div className={styles.container}>
					{<PersonPhoto personPhoto={personPhoto} personName={personName} />}
					{personInfo && <PersonInfo personInfo={personInfo} />}
					{personFilms && (
						<Suspense fallback={<UiLoading />}>
							<PersonFilms personFilms={personFilms} />
						</Suspense>
					)}
				</div>
			</div>
		</>
	);
};

PersonPage.propTypes = {
	setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
