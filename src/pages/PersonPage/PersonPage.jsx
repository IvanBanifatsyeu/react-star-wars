import UiLoading from "@UI/UiLoading";
import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack";
import PersonPhoto from "@components/PersonPage/PersonPhoto/PersonPhoto";
import { API_FILM, API_PERSON } from "@constants/api";
import { withErrorApi } from "@hoc/withErrorApi";
import { getPeopleImg } from "@services/getPeopleData";
import { getApiResource } from "@utils/network";
import PropTypes from "prop-types";
import { Suspense, lazy, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./PersonPage.module.css";

const PersonFilms = lazy(() => import("@components/PersonPage/PersonFilms"));

const PersonPage = ({ setErrorApi }) => {
	const { id } = useParams();
	const [personInfo, setPersonInfo] = useState(null);
	const [personName, setPersonName] = useState(null);
	const [personPhoto, setPersonPhoto] = useState(null);
	const [personFilms, setPersonFilms] = useState(null);
	const [personFavorite, setPersonFavorite] = useState(false);
	const [isReady, setIsReady] = useState(false)

	const StoreData = useSelector((state) => state.favoriteReducer);

	useEffect(() => {
		StoreData[id] ? setPersonFavorite(true) : setPersonFavorite(false);
	}, [personFavorite]);

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
				setIsReady(true)
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
					{
						<PersonPhoto
							personPhoto={personPhoto}
							personName={personName}
							personId={id}
							personFavorite={personFavorite}
							setPersonFavorite={setPersonFavorite}
							isReady={isReady}
						/>
					}
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
