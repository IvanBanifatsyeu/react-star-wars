import styles from "./PeopleList.module.css";

const PeopleList = ({ people }) => {
     console.log(people)
	return (
		<ul className={styles.list__container}>
			{people.map(({ name, url, id, urlImg }) => (
				<li className={styles.list__item} key={id}>
					<a href='#'>
						<img className={styles.person__photo} src={urlImg} alt={name} />{" "}
						<p>{name}</p>{" "}
					</a>
				</li>
			))}
		</ul>
	);
};
export default PeopleList;