function CulcButton({type, text, cl, onClick}) {
	const onClickHandler = ({target}) => {
		onClick(target.classList, target.innerText);
	}

	return <button
		type={type ?? 'button'}
		className={cl}
		onClick={onClickHandler}>
		{text}
	</button>
}
  
export default CulcButton;  