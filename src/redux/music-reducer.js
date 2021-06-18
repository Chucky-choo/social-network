import song1 from '../assets/audio/background-loop-melodic-techno-03-2691.mp3'
import Song2 from '../assets/audio/fluidity-100-ig-edit-4558.mp3'


const CHANGE_SONG = 'CHANGE_SONG'
const PREV_NEXT_SONG = 'PREV_NEXT_SONG'
const SET_IS_PLAYING = 'SET_IS_PLAYING'
const IS_MUTED = 'IS_MUTED'
const SHUFFLE_ARR = 'SHUFFLE_ARR'
const SET_TREK_PROGRESS = 'SET_TREK_PROGRESS'
const CHANGE_VOLUME = 'CHANGE_VOLUME'
const SET_VOLUME = 'SET_VOLUME'


const initialState = {
  audio: new Audio(song1),
  musicData: [
    {
      name: "Background Loop Melodic Techno #03",
      src: song1,
      img: 'https://apimeme.com/meme?meme=Ancient-Aliens&top=&bottom=good',
      time: '0:46',
      performer: 'Zen Man',
      id: 'te241'
    }, {
      name: "Fluidity (1:00 IG Edit)",
      src: Song2,
      img: 'http://placekitten.com/2020/2020',
      time: '1:00',
      performer: 'tobylane',
      id: 't124'
    }, {
      name: "newer forget",
      src: 'https://freesound.org/data/previews/96/96543_7037-hq.mp3',
      img: 'http://placekitten.com/2000/2000',
      time: '0:2',
      performer: 'some girl',
      id: 'test1'
    }, {
      name: "Magic night",
      src: 'https://freesound.org/data/previews/96/96527_7037-hq.mp3',
      img: 'https://apimeme.com/meme?meme=Advice-Dog&top=&bottom=hi',
      time: '0:4',
      performer: 'some girl',
      id: 'test2'
    }, {
      name: 'Your car',
      src: 'https://freesound.org/data/previews/96/96531_7037-hq.mp3',
      img: 'http://placekitten.com/2005/2001',
      time: "0:3",
      performer: 'some girl',
      id: 'test3'
    }, {
      name: "clash of the gods",
      src: 'https://freesound.org/data/previews/96/96534_7037-hq.mp3',
      img: 'http://placekitten.com/2002/2000',
      time: '0:6',
      performer: 'i d n',
      id: 'test4'
    },
  ],
  trackIndex: 0,
  isPlaying: false,
  isMuted: false,
  trackProgress: 0,
  volume: 1,
}

export const musicReducer = (state = initialState, action) => {

  const createNewAudio = (index) => {
    let myAudio = new Audio(state.musicData[index].src)
    myAudio.muted = state.isMuted
    myAudio.volume = state.volume
    return myAudio
  }

  switch (action.type) {
    case CHANGE_SONG:
      const SongNowPlay = state.musicData.findIndex(p => p.id === action.id)
      return {
        ...state, trackIndex: SongNowPlay, isPlaying: false,
        audio: createNewAudio(SongNowPlay)
      }
    case PREV_NEXT_SONG: {
      // if the user wants to go beyond the array
      if (state.trackIndex === 0 && action.value === false) {
        return {...state}
      } else if (state.musicData.length === (state.trackIndex + 1) && action.value === true) {
        return {...state}
        // if within the array
      } else {
        return {
          ...state,
          trackIndex: action.value ? state.trackIndex + 1
            : state.trackIndex - 1,
          audio: action.value
            ? createNewAudio(state.trackIndex + 1)
            : createNewAudio(state.trackIndex - 1),
          isPlaying: false,
        }
      }
    }
    case SET_IS_PLAYING: {
      return {...state, isPlaying: !state.isPlaying}
    }
    case IS_MUTED: {
      return {...state, isMuted: !state.isMuted}
    }
    // case SHUFFLE_ARR: {
    //   function shuffle(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //       let j = Math.floor(Math.random() * (i + 1));
    //       [array[i], array[j]] = [array[j], array[i]];
    //     }
    //   }
    //   debugger
    //   return {...state, musicData: shuffle(state.musicData) }
    // }
    case SET_TREK_PROGRESS: {
      return {...state, trackProgress: state.audio.currentTime}
    }
    case CHANGE_VOLUME: {
      return {...state, volume: action.valueVolume}
    }
    case SET_VOLUME: {
      return {...state, audio: {...state.audio, volume: state.volume}}
    }


    default:
      return state
  }
}


export const ChangeTrackIndexAC = (id) => ({type: CHANGE_SONG, id})
export const PrevOrNextSongIndexAC = (value) => ({type: PREV_NEXT_SONG, value})
export const SetIsPLaying = () => ({type: SET_IS_PLAYING})
export const SetIsMuted = () => ({type: IS_MUTED})
//export const shuffleArr = () => ({type: SHUFFLE_ARR})
export const SetTrackProgress = () => ({type: SET_TREK_PROGRESS})
export const ChangeVolume = (valueVolume) => ({type: CHANGE_VOLUME, valueVolume})
export const SetVolume = () => ({type: SET_VOLUME})


// export const startTimer = (dispatch) => {
//   // Clear any timers already running
//   clearInterval(intervalRef.current);
//
//   intervalRef.current = setInterval(() => {
//     if (audio.ended) {
//       dispatch(PrevOrNextSongIndexAC(true));
//     } else {
//       dispatch(SetTrackProgress());
//     }
//   }, [1000]);
// };
//


