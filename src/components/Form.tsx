import { useEffect } from 'react';

export default function Form() {
	useEffect(() => {
		const form = document.querySelector('form');
		const emailInput = form?.querySelector('input[type="email"]');
		const errorMessage = form?.querySelector('.error-message');

		const formValidation = (e: { preventDefault: () => void }) => {
			e.preventDefault();
			if (
				emailInput instanceof HTMLInputElement &&
				emailInput.validity.valid
			) {
				if (errorMessage instanceof HTMLElement) {
					errorMessage.style.display = 'none';
				}
			} else {
				if (errorMessage instanceof HTMLElement) {
					errorMessage.style.display = 'block';
				}
			}
		};

		form?.addEventListener('submit', formValidation);

		// Cleanup function
		return () => {
			form?.removeEventListener('submit', formValidation);
		};
	}, []);

	return (
		<form
			action='#'
			noValidate>
			<input
				type='email'
				name='email'
				placeholder='Email address'
				required
				aria-label='Email address for giving access'
				pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
			/>
			<button type='submit'>Request access</button>
			<span className='error-message'>Oops! Please check your email</span>
		</form>
	);
}
