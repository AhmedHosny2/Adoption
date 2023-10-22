import React from 'react';

function Select({ title, optionList, selected, onChange }) {
	return (
		<div className="form-control w-64">
			<label className="label">
				<span className="label-text text-xl">{title}</span>
			</label>
			<select
				className="select select-bordered"
				value={selected} // Bind the selected value to the component
				onChange={(e) => onChange(e.target.value)} // Handle onChange event
			>
				{optionList.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))}
			</select>
			<label className="label"></label>
		</div>
	);
}

export default Select;
