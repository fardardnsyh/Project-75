import React from 'react';

const FormRow = ({ type, name, value, handleOnChange, labelText }) => {
	return (
		<div className="form-row">
			<label htmlFor={name} className="form-label">
				{labelText || name}
			</label>

			<input type={type} value={value} onChange={handleOnChange} name={name} className="form-input" />
		</div>
	);
};

export default FormRow;
