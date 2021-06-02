import s from './Music.module.scss';
import {useSelector} from "react-redux";
import AudioPlayer from "./audio-player/AudioPlayer";
import PlayList from "./Play-list/PlayList";
import {useEffect, useRef, useState} from "react";

function Music() {
  let nowPlayingSongIndex = useSelector(store => store.music.nowPlayingSongIndex)
  const musicData = useSelector(store => store.music.musicData)

  const [isPlaying, setPlay] = useState(false)

  const audioRef = useRef(new Audio(musicData[nowPlayingSongIndex].src));


  const isLoop = () => {
    audioRef.current.loop = !audioRef.current.loop
  }


  useEffect(() => {
    stopAudio()
    audioRef.current = new Audio(musicData[nowPlayingSongIndex].src)
    playAudio()
  }, [nowPlayingSongIndex])

  const playAudio = () => {
    setPlay(true)
    audioRef.current.play()
  }

  const stopAudio = () => {
    audioRef.current.pause()
    setPlay(false)
    audioRef.current.loop = false
  }

  const playPause = () => {
    isPlaying ? stopAudio() : playAudio()
  }

  return (
    <div className={s.main}>

      <header>
        <h1>Music</h1>
      </header>
      <body className={s.body}>
      <img src={musicData[nowPlayingSongIndex].img} alt=""
           className={s.intro}
           onClick={() => {playPause()}}
      />
      {/*<img src={play} alt="" className={s.imgimg}/>*/}
      <PlayList musicData={musicData}/>
      </body>
      <AudioPlayer isPlaying={isPlaying}
                   audioRef={audioRef}
                   isLoop={isLoop}
                   playPause={playPause}
      />

    </div>);

}

export default Music;


//""/static/media/background-loop-melodic-techno-03-2691.f35b72f0.mp3""