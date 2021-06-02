import s from './audioPlayer.module.scss'
import MiddleControls from "./MiddleControls/MiddleControls";
import LeftControl from "./LeftControls/LeftControl";
import RightControl from "./RightControls/RightControl";


let AudioPlayer = ({isPlaying, audioRef, isLoop, playPause}) => {

  return (
    <div className={s.body}>
      <input type="range" id="seek" value="0" max={audioRef.current.duration} className={s.paperProgres}/>
      <div className={s.footer}>
        <LeftControl isPlaying={isPlaying}
                     audioRef={audioRef}
                     playPause={playPause}
        />
        <MiddleControls/>
        <RightControl isLoop={isLoop} />
      </div>
    </div>
  )


}

export default AudioPlayer
