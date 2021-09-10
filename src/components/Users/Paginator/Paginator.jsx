import React, {useEffect, useState} from "react";
import s from './paginator.module.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';
import {ButtonGroup} from "@material-ui/core";
import Popup from "../../../Elements/Popup/Popup";
import {changPage, getUsersThunkCreators} from "../../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";


const Paginator = React.memo(({totalCount, buttonsAmount = 6, setQuery, currentPage}) => {

	const dispatch = useDispatch()
	const {term, pageSize} = useSelector(store => store.users)

	let numberOfAllPages = Math.ceil(totalCount / pageSize)
	const pages = [];
	for (let i = 1; i <= numberOfAllPages; i++) {
		pages.push(i)
	}

	const [leftBorder, changeLeftBorder] = useState(1)


	const ChangePageNow = (newPage) => {
		setQuery({page: newPage, count: pageSize, term})
		dispatch(getUsersThunkCreators(newPage, pageSize, term))
	}


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

	useEffect(() => {
		if (totalCount === 0) {
			return;
		}
		if (numberOfAllPages < currentPage) {
			ChangePageNow(1)
		}
	}, [numberOfAllPages])


	useEffect(() => {
		if (pages.length === 0) {
			changeLeftBorder(1)
		} else if (currentPage + buttonsAmount > pages.length) {
			changeLeftBorder(pages.length + 1 - buttonsAmount)
		} else changeLeftBorder(currentPage)
	}, [currentPage])

	return (
		<div className={s.main}>
			<ButtonGroup
				className={s.button__group}
				size="small"
				aria-label="outlined primary button group"
			>
				{(leftBorder > 1) &&
				<Button onClick={() => {moveLeft()}}>
					{<ArrowBackIosIcon/>}
				</Button>}
				{pages
					.filter(p => p >= leftBorder && p <= leftBorder + buttonsAmount - 1)
					.map(p => {
						return <Button key={p}
													 className={currentPage === (p) ? s.selectedPages : undefined}
													 onClick={() => {ChangePageNow(p)}}
						>
							{p}
						</Button>
					})
				}
				{(leftBorder + buttonsAmount <= numberOfAllPages)
					? <Button onClick={() => {
						moveRight()
					}}>
						{<ArrowForwardIosIcon/>}
					</Button>
					: null}
			</ButtonGroup>
		</div>
	)

})

export default Paginator