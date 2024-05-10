import PropTypes from "prop-types";
import styles from "./UiVideo.module.css";
import cn from "classnames";
import { useEffect, useRef } from "react";

const UiVideo = ({ scr, classes, playbackRate = 1 }) => {
    const videoRef = useRef(null)
	useEffect(() => {
	    videoRef.current.playbackRate = playbackRate;

	},[])

	return (
		<video
		    ref={videoRef}
			loop
			autoPlay
			muted
			className={cn(styles.video, classes)}
		>
			<source src={scr} />
		</video>
	);
};

UiVideo.propTypes = {
	scr: PropTypes.string,
	playbackRate: PropTypes.number,
	classes: PropTypes.string,
};

export default UiVideo;
