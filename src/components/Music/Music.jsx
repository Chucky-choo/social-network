import s from './Music.module.scss';
import {useDispatch, useSelector} from "react-redux";
import AudioPlayer from "./audio-player/AudioPlayer";
import PlayList from "./Play-list/PlayList";
import {useEffect, useRef} from "react";
import {PrevOrNextSongIndexAC, SetIsPLaying, SetTrackProgress} from "../../redux/music-reducer";

function Music() {
  const dispatch = useDispatch()

  const {
    trackIndex, isPlaying,
    musicData, isMuted, audio
  } = useSelector(store => store.music)
  const intervalRef = useRef();
  const isReady = useRef(false);

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audio.ended) {
        dispatch(PrevOrNextSongIndexAC(true));
      } else {
        dispatch(SetTrackProgress());
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audio.currentTime = value;
    dispatch(SetTrackProgress());
  };

  const pauseSpase = (e) => {
    if (e.code === "Space") {
      dispatch(SetIsPLaying())
    }
  }

  useEffect(() => {
    audio.muted = isMuted
  }, [isMuted])

  useEffect(() => {
    if (isPlaying) {
      audio.play();
      startTimer();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

 // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audio.pause();
    // dispatch(SetTrackProgress());

    if (isReady.current) {
      audio.play();
      dispatch(SetIsPLaying());
      // startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audio.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className={s.main}
         tabIndex={0}
         onKeyPress={(e) => {pauseSpase(e)}}>
      <h1>Music</h1>
      <div className={s.body}>
      <img src={musicData[trackIndex].img} alt=""
           className={s.intro}
           onClick={() => {
             dispatch(SetIsPLaying())
           }}
      />
      {/*<img src={play} alt="" className={s.imgimg}/>*/}
      <PlayList musicData={musicData}/>
      </div>
      <AudioPlayer onScrub={onScrub}
                  // onScrubEnd={onScrubEnd}
                   startTimer={startTimer}
      />
    </div>);

}

export default Music;
