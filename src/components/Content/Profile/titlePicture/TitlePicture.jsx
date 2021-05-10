
let TitlePicture= ({pictureArr}) => {

  let pictureForDate = () => {
    let date = new Date().getMonth() + 1
    switch (date) {
      case 12:
      case 1:
      case 2:
        return pictureArr.winter;
      case 3:
      case 4:
      case 5:
        return pictureArr.spring;
      case 6:
      case 7:
      case 8:
        return pictureArr.summer;
      case 9:
      case 10:
      case 11:
        return pictureArr.autumn;
      default:
        return 'https://regnum.ru/uploads/pictures/news/2018/10/03/regnum_picture_15385669132464517_big.png'
    }
  }

  return (<img src={pictureForDate()} alt={'https://regnum.ru/uploads/pictures/news/2018/10/03/regnum_picture_15385669132464517_big.png'}/>)
}
export default TitlePicture


