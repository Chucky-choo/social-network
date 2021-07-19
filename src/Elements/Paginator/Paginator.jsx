import React, {useEffect, useState} from "react";
import s from './paginator.module.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';
import {ButtonGroup} from "@material-ui/core";


const Paginator = React.memo(({totalCount, pageSize, currentPage,
                     ChangePageNow, buttonsAmount = 6}) => {

  let numberOfAllPages = Math.ceil(totalCount / pageSize)
  const pages = [];
  for (let i = 1; i <= numberOfAllPages; i++) {
    pages.push(i)
  }

  const [leftBorder, changeLeftBorder] = useState(1)

  const moveLeft = () => {
    (leftBorder < 6)
      ? changeLeftBorder(1)
      : changeLeftBorder(leftBorder - buttonsAmount)
  }
  const moveRight = () => {
    (leftBorder + 5 > pages.length - 5)
      ? changeLeftBorder(pages.length - 5)
      : changeLeftBorder(leftBorder + buttonsAmount)
  }

  useEffect(() => { if (numberOfAllPages < currentPage)
  {ChangePageNow(1)}
  }, [numberOfAllPages])

  useEffect(() => {
    if(pages.length === 0){
      changeLeftBorder(1)
    }else if(currentPage + buttonsAmount > pages.length){
      changeLeftBorder(pages.length + 1 - buttonsAmount)
    }else changeLeftBorder(currentPage)
  }, [currentPage])

  return (
    <div className={s.main}>
      <ButtonGroup  className={s.button__group} size="small" aria-label="outlined primary button group">
        {(leftBorder > 1) &&
        <Button onClick={() => {moveLeft()}}>
          {<ArrowBackIosIcon/>}
        </Button>}
        {pages
        .filter(p => p >= leftBorder && p <= leftBorder + buttonsAmount - 1)
        .map(p => {
          return <Button key={p}
                         className={currentPage === (p) ? s.selectedPages : undefined}
                         onClick={() => {ChangePageNow(p)}}>
            {p}
          </Button>
        })
      }
      {(leftBorder + buttonsAmount <= numberOfAllPages)
        ? <Button onClick={() => {moveRight()}}>
          {<ArrowForwardIosIcon/>}
        </Button>
        : null}
    </ButtonGroup>
    </div>
  )

})

export default Paginator