import song1 from '../assets/audio/background-loop-melodic-techno-03-2691.mp3'
import Song2 from '../assets/audio/fluidity-100-ig-edit-4558.mp3'


const CHANGE_SONG = 'CHANGE_SONG'
const PREV_NEXT_SONG = 'PREV_NEXT_SONG'

const initialState = {
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
  nowPlayingSongIndex: 0,
}

export const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SONG:
      let arrSongNowPlay = state.musicData.findIndex(p => p.id === action.id)
      return {...state, nowPlayingSongIndex: arrSongNowPlay}
    case PREV_NEXT_SONG: {
      if (state.nowPlayingSongIndex === 0 && action.value === false) {
        return {...state}
      } else if (state.musicData.length === (state.nowPlayingSongIndex + 1) && action.value === true) {
        return {...state}
      } else {
        return {
          ...state, nowPlayingSongIndex: action.value ? state.nowPlayingSongIndex + 1
            : state.nowPlayingSongIndex - 1
        }
      }
    }

    default:
      return state
  }
}


export const ChangeNowPlayingSongIndexAC = (id) => ({type: CHANGE_SONG, id})
export const PrevOrNextSongIndexAC = (value) => ({type: PREV_NEXT_SONG, value})


