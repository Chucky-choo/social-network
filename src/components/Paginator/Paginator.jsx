import React, {useEffect, useState} from "react";
import s from './paginator.module.css'


let Paginator = ({totalCount, pageSize, currentPage, ChangePageNow, buttonsAmount = 10}) => {

  let pagesCount = Math.ceil(totalCount / pageSize)
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const [leftBorder, changeBorder] = useState(1)

  useEffect(() => {
    changeBorder(currentPage)
  }, [currentPage])

  return <div className={s.main}>
    {(leftBorder > 1) && <button onClick={() => {changeBorder(leftBorder - buttonsAmount)}}>
      {'<-'}
    </button>}
    {pages
      .filter(p => p >= leftBorder && p <= leftBorder + buttonsAmount - 1)
      .map(p => {
        return <button key={p}
                       className={currentPage === (p)? s.selectedPages : undefined}
                       onClick={() => {ChangePageNow(p)}}
        >
          {p}
        </button>
      })
    }
    {(leftBorder + buttonsAmount <= pagesCount) ? <button onClick={() => {
        changeBorder(leftBorder + buttonsAmount)
      }}
      >{'->'}</button>
      : null}
  </div>

}

export default Paginator