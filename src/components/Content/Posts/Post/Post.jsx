import s from './Post.module.css';

function Post(props) {
  return (
    <div className={s.body}>
      <div className={s.post}>
        <img src="https://www.smileexpo.com.ua/public/upload/news/vstrechayte_sab_ziro_skoro_i_v_injustice_2_video_1497606634446_image.jpg" alt=""/>
        <div id={props.id}>{props.massage}</div>
      </div>
      <div className={s.like}>
        <img src="https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-vector-like-icon-png-image_695362.jpg" alt=""/>
        <div>
          {props.likes}
        </div>
      </div>
    </div>
  );
}




export default Post;
