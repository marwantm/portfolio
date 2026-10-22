export function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const submitButton = form.querySelector('button[type="submit"]');
  const status = form.querySelector('.contact-form-message');
  if (!submitButton || !status) return;

  const originalButtonContent = submitButton.innerHTML;

  form.addEventListener('submit', async event => {
    event.preventDefault();
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    status.hidden = true;
    status.replaceChildren();

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'The form submission was unsuccessful.');
      }

      form.reset();
      status.textContent = "Message sent. I'll reply soon.";
    } catch {
      status.append('Something went wrong. Please try again or ');
      const emailLink = document.createElement('a');
      emailLink.href = 'mailto:marwan.tamer.zakaria@gmail.com';
      emailLink.textContent = 'email me directly';
      status.append(emailLink, '.');
    } finally {
      status.hidden = false;
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonContent;
    }
  });
}
