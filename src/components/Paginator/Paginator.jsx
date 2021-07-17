import React, {useEffect, useState} from "react";
import s from './paginator.module.css'


const Paginator = ({totalCount, pageSize,
                     currentPage, ChangePageNow,
                     buttonsAmount = 10}) => {

  let numberOfAllPages = Math.ceil(totalCount / pageSize)
  const pages = [];
  for (let i = 1; i <= numberOfAllPages; i++) {
    pages.push(i)
  }

  const [leftBorder, changeBorder] = useState(1)

  useEffect(() => {
    if (numberOfAllPages < currentPage) {
      ChangePageNow(1)
    }
  }, [numberOfAllPages])

  useEffect(() => {changeBorder(currentPage)}, [currentPage])


  return (
    <div className={s.main}>
      {(leftBorder > 1) && <button onClick={() => {
        changeBorder(leftBorder - buttonsAmount)
      }}>
        {'<-'}
      </button>}
      {pages
        .filter(p => p >= leftBorder && p <= leftBorder + buttonsAmount - 1)
        .map(p => {
          return <button key={p}
                         className={currentPage === (p) ? s.selectedPages : undefined}
                         onClick={() => {
                           ChangePageNow(p)
                         }}>
            {p}
          </button>
        })
      }
      {(leftBorder + buttonsAmount <= numberOfAllPages)
        ? <button onClick={() => {
          changeBorder(leftBorder + buttonsAmount)
        }}>
          {'->'}
        </button>
        : null}
    </div>)

}

export default Paginator