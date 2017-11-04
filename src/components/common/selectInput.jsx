import React from 'react';

const SelectInput = ({ name, label, onChange, defaultOption, value, error, options }) => (
	<div className='form-group'>
		<label htmlFor={name}>{label}</label>
		<div className='field'>
			<select
				name={name}
				className='form-control'
				value={value}
				onChange={onChange}
			>
				<option value='' disabled>{defaultOption}</option>
				{options.map(option => <option key={option.value} value={option.value}>{option.text}</option>)}
			</select>
			{error && error.length > 0 && <div className='alert alert-danger'>{error}</div>}
		</div>
	</div>
);

export default SelectInput;
