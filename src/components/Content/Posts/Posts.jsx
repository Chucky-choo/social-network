import React from "react";
import Post from "./Post/Post";


let Posts = React.memo(({postDate}) => {
  let posts = postDate.map(el =>
    <Post key={el.id + "post"}
          id={el.id}
          massage={el.message}
          likes={el.likes}
    />)

  return(
    <div>
      {posts}
    </div>

  )

})

export default Posts