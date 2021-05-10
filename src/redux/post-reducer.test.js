import postReducer, {addPostActionCreator, deletePostAC} from "./post-reducer";

let state = {
  postDate: [
    {massage: "даров бик", id: 1, likes: 20},
    {massage: "i am write TodoList", id: 2, likes: 2124,},
    {massage: "i am the best", id: 3, likes: 91,},
  ],
}

test('test add nev post', () => {
  // 1 test data
  let action = addPostActionCreator('test post')

  // 2 action
  let newState = postReducer(state, action);
  // 3 expections
  expect(newState.postDate.length).toBe(4)
});

test(`post should be deleted`, () => {
  //1
  let action = deletePostAC(1);
  //2
  let newState = postReducer(state, action);
  //3
  expect(newState.postDate.length).toBe(2)
  }
)