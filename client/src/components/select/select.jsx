function Select({ title, optionList }) {
	return (
		<>
			<div className="form-control w-64">
				<label className="label">
					<span className="label-text text-xl">{title}</span>
				</label>
				<select className="select select-bordered">
					<option selected>Any</option>
					{optionList.map((option, index) => (
						<option key={index}>{option}</option>
					))}
				</select>
				<label className="label"></label>
			</div>
		</>
	);
}

export default Select;
