export default function formValidation() {
    const form = document.querySelector('form');
    const emailInput = form?.querySelector('input[type="email"]');
    const errorMassage = form?.querySelector('.error-massage');

    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        if (emailInput instanceof HTMLInputElement && emailInput.validity.valid) {
            if (errorMassage instanceof HTMLElement) {
                errorMassage.style.display = 'none';
            }
            form.submit();
        } else {
            if (errorMassage instanceof HTMLElement) {
                errorMassage.style.display = 'block';
            }
        }
    });
}