import s from './link-ikon.module.css'
import inst from "../../../../assets/imeges/inst.svg";
import fs from "../../../../assets/imeges/fs.svg";
import vk from "../../../../assets/imeges/vk.svg";
import git from "../../../../assets/imeges/git.svg";
import youtube from "../../../../assets/imeges/youtube.svg";
import website from "../../../../assets/imeges/website.svg";
import twit from "../../../../assets/imeges/twit.svg";
import email from "../../../../assets/imeges/mail.svg";


let LinkIcons = ({contacts}) => {
  
  let pictureLink = (src, img) => {

    let test = (testSrs) => {
      return testSrs.indexOf("https://") === -1 ? "https://" + testSrs : testSrs
    }

    return (
      !src ? null
        : <a href={test(src)}>
          <img src={img} alt=""/>
        </a>
    )
  }

  return (
    <>
      <div className={s.socialImg}>
        {pictureLink(contacts.facebook, fs)}
        {pictureLink(contacts.website, website)}
        {pictureLink(contacts.vk, vk)}
        {pictureLink(contacts.twitter, twit)}
        {pictureLink(contacts.instagram, inst)}
        {pictureLink(contacts.youtube, youtube)}
        {pictureLink(contacts.github, git)}
        {pictureLink(contacts.mainLink, email)}
      </div>
    </>
  )
}

export default LinkIcons