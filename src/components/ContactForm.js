import { useForm } from 'react-hook-form';

const ContactForm = ({ PopupForm }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const registerOptions = {
		email: { required: 'Email is required' },
		name: { required: 'Full name is required' },
		message: { required: 'Message is required' },
		consent: { required: 'Consent is required' },
	};

	const onSubmit = async (data, e) => {
		e.preventDefault(); // Prevent page reload on form submit

		const formData = new FormData(data);
		const formObject = Object.fromEntries(formData.entries());

		try {
			const response = await fetch('/', {
				method: 'POST',
				body: new URLSearchParams(formObject),
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			});

			if (response.ok) {
				alert('Form submitted successfully!');
				data.reset(); // Clear the form
			} else {
				alert('Error submitting form.');
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};

	return (
		<form
			method='POST'
			name='contact'
			action='/success'
			netlify
			onSubmit={handleSubmit(onSubmit)}
			className='contact-form flex-col'
		>
			<div className='input-container flex-col'>
				<label>Full Name</label>
				<input
					className='form-input'
					name='name'
					type='text'
					placeholder='Enter your full name'
					{...register('name', registerOptions.name)}
				/>
				<small className='error'>{errors?.name && errors.name.message}</small>
			</div>
			<div className='input-container flex-col'>
				<label>Email</label>
				<input
					className='form-input'
					type='email'
					name='email'
					placeholder='Enter your email'
					{...register('email', registerOptions.email)}
				/>
				<small className='error'>{errors?.email && errors.email.message}</small>
			</div>
			<div className='input-container flex-col'>
				<label>Phone Number</label>
				<input
					className='form-input'
					name='phone'
					type='text'
					placeholder='Enter your phone number'
					{...register('phone', registerOptions.phone)}
				/>
			</div>
			<div className='input-container flex-col'>
				<label>Service Of Interest</label>
				<select
					className='form-input'
					name='service'
					{...register('service', registerOptions.service)}
				>
					{/* <option value=''>Choose Service Of Interest</option> */}
					<option value='company_registartion'>Company Registration</option>
					<option value='website_development'>Website Development</option>
					<option value='digital_marketing'>Digital Marketing</option>
					<option value='complete_solution'>Complete Solution</option>
					<option value='other'>Other</option>
				</select>
			</div>
			{!PopupForm && (
				<div className='input-container flex-col'>
					<label>Message</label>
					<textarea
						className='form-input'
						name='message'
						type='text'
						placeholder='Enter your message'
						{...register('message', registerOptions.message)}
					/>
					<small className='error'>
						{errors?.message && errors.message.message}
					</small>
				</div>
			)}
			<div className='input-container flex-col'>
				<span className='input-checkbox'>
					<input type='checkbox' defaultChecked name='consent' />
					<span>
						I authorize EliteSoftwarehub and its representatives to Call, SMS,
						Email or WhatsApp me about its products and offers.
					</span>
				</span>
				{/* <small className='error'>
					{errors?.consent && errors.consent.message}
				</small> */}
			</div>
			<button className='submit-button' type='submit'>
				Submit
			</button>
		</form>
	);
};

export default ContactForm;
