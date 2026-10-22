export function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const submitButton = form.querySelector('button[type="submit"]');
  const status = form.querySelector('.contact-form-message');
  if (!submitButton || !status) return;

  const originalButtonContent = submitButton.innerHTML;

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const showError = () => {
      status.replaceChildren('Something went wrong. Please try again or ');
      const emailLink = document.createElement('a');
      emailLink.href = 'mailto:marwan.tamer.zakaria@gmail.com';
      emailLink.textContent = 'email me directly';
      status.append(emailLink, '.');
      status.hidden = false;
    };

    try {
      const botcheck = form.querySelector('input[name="botcheck"]');
      if (botcheck && botcheck.checked) return;

      status.hidden = true;
      status.replaceChildren();
      const formData = new FormData(form);
      const accessKey = formData.get('access_key');
      if (typeof accessKey !== 'string' || !accessKey.trim() || accessKey.trim() === 'YOUR_ACCESS_KEY_HERE') {
        console.error('Web3Forms access key is missing or still uses the placeholder value.');
        showError();
        return;
      }

      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });
      console.log('Web3Forms response status:', response.status);
      const data = await response.json();
      console.log('Web3Forms response JSON:', data);

      if (response.ok && data.success === true) {
        form.reset();
        status.textContent = "Message sent. I'll reply soon.";
        status.hidden = false;
      } else {
        console.error('Web3Forms submission failed:', data.message);
        showError();
      }
    } catch (error) {
      console.error('Web3Forms request failed:', error);
      showError();
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonContent;
    }
  });
}
