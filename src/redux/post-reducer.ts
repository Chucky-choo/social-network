const CREATE_NEW_POST = "post/CREATE-NEW-POST"
const CHANGE_NEW_POST_VALUE = "post/CHANGE-NEW-POST-VALUE"
const DELETE_POST = "post/DELETE_POST"


type imgTemaType = {
    winter: string
    spring: string
    summer: string
    autumn: string
}

type MessageType = { message: string | null, id: number, likes: number }

type PostDate = Array<MessageType>

let initialState = {
    imgTemaData: {
        winter: 'https://pm1.narvii.com/6685/19e561f0332f5a270f9d96a63ffcfc2231b9d82c_hq.jpg',
        spring: 'https://www.tui.ru/getmedia/a948242d-a830-43a1-ab3c-11576e4e4b49/japan-visa-main',
        summer: 'https://media.nomadicmatt.com/japanguide.jpg',
        autumn: 'https://s2.best-wallpaper.net/wallpaper/1920x1080/1301/Japan-Kyoto-Daigo-autumn-landscape_1920x1080.jpg'
    } as imgTemaType,
    postDate: [
        {message: "даров бик", id: 1, likes: 20},
        {message: "i am write TodoList", id: 2, likes: 2124,},
        {message: "i am the best", id: 3, likes: 91,},
    ] as PostDate,
    newPostValue: "" as null | string,
}

const postReducer = (state = initialState, action: any): typeof initialState => {
    switch (action.type) {
        case CREATE_NEW_POST:
            let newPost = {
                message: state.newPostValue,
                id: Math.round(Math.random() * 1000),
                likes: 0,
            }
            return {...state, postDate: [...state.postDate, newPost], newPostValue: ""}
        case CHANGE_NEW_POST_VALUE:
            return {...state, newPostValue: action.text}
        case DELETE_POST:
            return {...state, postDate: state.postDate.filter(p => p.id !== action.postId)}
        default:
            return state
    }
}


export const addPostActionCreator = () => ({type: CREATE_NEW_POST})

type PostChangeType = { type: typeof CHANGE_NEW_POST_VALUE, text: string }
export const onPostChangeActionCreator = (text: string): PostChangeType => ({type: CHANGE_NEW_POST_VALUE, text})

type DeletePostType = { type: typeof DELETE_POST, postId: number}
export const deletePostAC = (postId: number): DeletePostType => ({type: DELETE_POST, postId})


export default postReducer