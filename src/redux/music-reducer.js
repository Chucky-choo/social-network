import song1 from '../assets/audio/background-loop-melodic-techno-03-2691.mp3'
import Song2 from '../assets/audio/fluidity-100-ig-edit-4558.mp3'
import Song3 from '../assets/audio/future-bass-beat-4999.mp3'
import Song4 from '../assets/audio/background-loop-melodic-techno-04-3822.mp3'
import Img1 from '../assets/imegesForAudio/cloud-5946381_1920.jpg'
import Img2 from '../assets/imegesForAudio/cosmos-5809271_1920.png'
import Img3 from '../assets/imegesForAudio/man-6253257_1920.jpg'
import Img4 from '../assets/imegesForAudio/walls-6157947_1920.jpg'



const CHANGE_SONG = 'CHANGE_SONG'
const PREV_NEXT_SONG = 'PREV_NEXT_SONG'
const SET_IS_PLAYING = 'SET_IS_PLAYING'
const IS_MUTED = 'IS_MUTED'
const SHUFFLE_ARR = 'SHUFFLE_ARR'
const SET_TREK_PROGRESS = 'SET_TREK_PROGRESS'
const CHANGE_VOLUME = 'CHANGE_VOLUME'
const SET_REPEAT = 'SET_REPEAT'


const initialState = {
  audio: new Audio(song1),
  // All of these artists are at https://pixabay.com/music/search/mood/laid%20back/
  musicData: [
    {
      name: "Background Loop Melodic Techno #03",
      src: song1,
      img: Img1,
     time: '0:46',
      performer: 'Zen Man',
      id: 'te241'
    }, {
      name: "Fluidity (1:00 IG Edit)",
      src: Song2,
      img: Img2,
      time: '1:00',
      performer: 'tobylane',
      id: 't124'
    }, {
      name: "Future Bass Beat",
      src: Song3,
      img: Img3,
      time: '1:10',
      performer: 'jorikbasov',
      id: 'test1'
    }, {
      name: "Background Loop Melodic Techno #04",
      src: Song4,
      img: Img4,
      time: '1:16',
      performer: 'Zen Man',
      id: 'test2'
    }, {
      name: "Background Loop Melodic Techno #03",
      src: song1,
      img: Img1,
      time: '0:46',
      performer: 'Zen Man',
      id: '123'
    }, {
      name: "Fluidity (1:00 IG Edit)",
      src: Song2,
      img: Img2,
      time: '1:00',
      performer: 'tobylane',
      id: '55554'
    }, {
      name: "Future Bass Beat",
      src: Song3,
      img: Img3,
      time: '1:10',
      performer: 'jorikbasov',
      id: 't632162t1'
    }, {
      name: "Background Loop Melodic Techno #04",
      src: Song4,
      img: Img4,
      time: '1:16',
      performer: 'Zen Man',
      id: 't236232'
    }, {
      name: "Background Loop Melodic Techno #03",
      src: song1,
      img: Img1,
      time: '0:46',
      performer: 'Zen Man',
      id: '23623241'
    }, {
      name: "Fluidity (1:00 IG Edit)",
      src: Song2,
      img: Img2,
      time: '1:00',
      performer: 'tobylane',
      id: '236234'
    }, {
      name: "Future Bass Beat",
      src: Song3,
      img: Img3,
      time: '1:10',
      performer: 'jorikbasov',
      id: 'hgtrh'
    }, {
      name: "Background Loop Melodic Techno #04",
      src: Song4,
      img: Img4,
      time: '1:16',
      performer: 'Zen Man',
      id: 'tdfndest2'
    }, {
      name: "Background Loop Melodic Techno #03",
      src: song1,
      img: Img1,
      time: '0:46',
      performer: 'Zen Man',
      id: 'dfnd'
    }, {
      name: "Fluidity (1:00 IG Edit)",
      src: Song2,
      img: Img2,
      time: '1:00',
      performer: 'tobylane',
      id: 'wt5we'
    }, {
      name: "Future Bass Beat",
      src: Song3,
      img: Img3,
      time: '1:10',
      performer: 'jorikbasov',
      id: '235325t5ge'
    }, {
      name: "Background Loop Melodic Techno #04",
      src: Song4,
      img: Img4,
      time: '1:16',
      performer: 'Zen Man',
      id: 'sdhbsdg'
    },
  ],
  trackIndex: 0,
  isPlaying: false,
  isMuted: false,
  trackProgress: 0,
  volume: 0.1,
  interval: null,
  isReady: false,
  //if 0 no repeat, if 1 repeat all list, if 2 repeat one song
  isRepeat: 0,
  loopSong: false,
}

export const musicReducer = (state = initialState, action) => {

  const createNewAudio = (index, loop = false, currentTime = 0) => {
    let myAudio = new Audio(state.musicData[index].src)
    myAudio.muted = state.isMuted
    myAudio.volume = state.volume
    myAudio.loop = (state.isRepeat === 2)
    myAudio.currentTime = currentTime
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
      //if loop arr
      if (state.musicData.length === (state.trackIndex + 1)
        && state.isRepeat === 1
        && action.value === true) {
        return {...state, trackIndex: 0, audio: createNewAudio(0), isPlaying: false}
      }
      // if the user wants to go beyond the array
      else if (state.trackIndex === 0 && action.value === false) {
        return {...state}
      } else if (state.musicData.length === (state.trackIndex + 1) && action.value === true) {
        return {...state}
      }
      // if within the array
      else {
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
    case SHUFFLE_ARR: {
      function shuffle(array) {
        let newArr = array.filter((item, index) => {
          return index != action.trackIndex
        });
        for (let i = newArr.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        newArr.unshift(state.musicData[action.trackIndex])
        return newArr
      }

      return {
        ...state, musicData: shuffle(state.musicData),
        trackIndex: 0, isPlaying: !state.isPlaying
      }
    }
    case SET_TREK_PROGRESS: {
      return {...state, trackProgress: state.audio.currentTime}
    }
    case CHANGE_VOLUME: {
      return {...state, volume: action.valueVolume}
    }
    case SET_REPEAT: {
      if (action.value === 3) {
        return {...state, isRepeat: 0}
      } else {
        return {...state, isRepeat: action.value}
      }
    }

    default:
      return state
  }
}


export const ChangeTrackIndexAC = (id) => ({type: CHANGE_SONG, id})
export const PrevOrNextSongIndexAC = (value) => ({type: PREV_NEXT_SONG, value})
export const SetIsPLaying = () => ({type: SET_IS_PLAYING})
export const SetIsMuted = () => ({type: IS_MUTED})
export const shuffleArr = (trackIndex) => ({type: SHUFFLE_ARR, trackIndex})
export const SetTrackProgress = () => ({type: SET_TREK_PROGRESS})
export const ChangeVolume = (valueVolume) => ({type: CHANGE_VOLUME, valueVolume})
export const SetRepeat = (value) => ({type: SET_REPEAT, value})

