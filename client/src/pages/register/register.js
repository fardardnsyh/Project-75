import Wrapper from '../../assets/wrappers/RegisterPage';
import { useState } from 'react';
import { Logo, FormRow, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';

const initialValues = {
	name: '',
	email: '',
	password: '',
	isMember: true,
};
function Register() {
	const [values, setValues] = useState(initialValues);
	const { isLoading, showAlert, displayAlert, clearAlert } = useAppContext();

	const handleOnChange = (e) => {
		console.log(e.target);
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const { name, email, password, isMember } = values;
		if (!email || !password || (!isMember && !name)) {
			displayAlert();
			clearAlert();
			return;
		}
		console.log(values);
	};

	const toggleMemberOnClick = () => {
		setValues({ ...values, isMember: !values.isMember });
	};

	return (
		<Wrapper className="full-page">
			<form className="form" onSubmit={handleOnSubmit}>
				<Logo />

				<h3>{values.isMember ? 'Login' : 'Register'}</h3>
				{showAlert && <Alert />}

				{!values.isMember && (
					<FormRow type={'text'} name={'name'} value={values.name} handleOnChange={handleOnChange} />
				)}
				<FormRow type={'text'} name={'email'} value={values.email} handleOnChange={handleOnChange} />
				<FormRow type={'password'} name={'password'} value={values.password} handleOnChange={handleOnChange} />

				<p>
					{values.isMember ? 'Not a member yet?' : 'Already a member?'}

					<button type="button" onClick={toggleMemberOnClick} className="member-btn">
						{values.isMember ? 'Register' : 'Login'}
					</button>
				</p>

				<button className="btn btn-block" type="submit">
					submit
				</button>
			</form>
		</Wrapper>
	);
}

export default Register;
