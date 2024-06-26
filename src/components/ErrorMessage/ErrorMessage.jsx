import styles from "./ErrorMessage.module.css";
import UiVideo from "@UI/UiVideo/UiVideo";
import video from './video/video.mp4'

const ErrorMessage = () => {
	return (
		<>
			<p className={styles.text}>
				The dark side of the force has won!!<br />  We cannot display data.<br /> Come back
				when we fix everything<br />
			</p>
			<UiVideo scr={video} classes={styles.video} playbackRate={0.5}/>
		</> 
	);
};
export default ErrorMessage;
