import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { withErrorApi } from "@hoc/withErrorApi";
import { useParams } from "react-router-dom";
import { getApiResource } from "@utils/network";
import { API_PERSON } from "@constants/api";
import { getPeopleImg } from "@services/getPeopleData";
import PersonInfo from "@components/PersonPAge/PersonInfo";
import PersonPhoto from "@components/PersonPAge/PersonPhoto/PersonPhoto";
import styles from "./PersonPage.module.css";

const PersonPage = ({ setErrorApi }) => {
	const { id } = useParams();
	const [personInfo, setPersonInfo] = useState(null);
	const [personName, setPersonName] = useState(null);
	const [personPhoto, setPersonPhoto] = useState(null);

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

	return (
		<>
			<div className={styles.wrapper}>
				<span className={styles.person__name}>{personName}</span>
				<div className={styles.container}>{<PersonPhoto personPhoto={personPhoto} personName={personName} />}
				{personInfo && <PersonInfo personInfo={personInfo} />}</div>
				
			</div>
		</>
	);
};

PersonPage.propTypes = {
	setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
