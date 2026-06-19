export function mountBetaSignup(root: ParentNode = document) {
  const dialog = root.querySelector('[data-beta-signup-modal]');
  const openButtons = root.querySelectorAll<HTMLButtonElement>('[data-beta-signup-open]');
  const closeButtons = root.querySelectorAll<HTMLButtonElement>('[data-beta-signup-close]');
  const signupForms = root.querySelectorAll<HTMLFormElement>('[data-beta-signup-form]');

  if (dialog instanceof HTMLDialogElement && dialog.dataset.dialogReady !== 'true') {
    dialog.dataset.dialogReady = 'true';

    const open = () => {
      if (!dialog.open) dialog.showModal();
    };

    const close = () => {
      if (dialog.open) dialog.close();
    };

    openButtons.forEach((button) => {
      button.addEventListener('click', open);
    });

    closeButtons.forEach((button) => {
      button.addEventListener('click', close);
    });

    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) close();
    });
  }

  signupForms.forEach((signupForm) => {
    if (signupForm.dataset.ready === 'true') return;

    signupForm.dataset.ready = 'true';

    const osCheckboxes = [
      ...signupForm.querySelectorAll<HTMLInputElement>(
        '[data-beta-os-group] input[type="checkbox"]'
      ),
    ];
    const successMessage = signupForm.parentElement?.querySelector<HTMLElement>(
      '[data-beta-signup-success]'
    );
    const errorMessage = signupForm.parentElement?.querySelector<HTMLElement>(
      '[data-beta-signup-error]'
    );
    const submitButton = signupForm.querySelector<HTMLButtonElement>('button[type="submit"]');

    signupForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (!osCheckboxes.some((checkbox) => checkbox.checked)) {
        osCheckboxes[0]?.setCustomValidity('Choose at least one OS.');
        osCheckboxes[0]?.reportValidity();
        return;
      }

      if (signupForm.dataset.submitting === 'true') return;

      signupForm.dataset.submitting = 'true';
      if (submitButton) submitButton.disabled = true;
      if (errorMessage) errorMessage.hidden = true;

      const data = new URLSearchParams();
      new FormData(signupForm).forEach((value, key) => {
        if (typeof value === 'string') data.append(key, value);
      });
      data.append(
        'notes',
        `Operating systems: ${osCheckboxes
          .filter((checkbox) => checkbox.checked)
          .map((checkbox) => checkbox.value)
          .join(', ')}`
      );

      try {
        const response = await fetch(signupForm.action || window.location.pathname, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: data.toString(),
        });

        const result = (await response.json()) as { success?: boolean; message?: string };

        if (!response.ok || result.success !== true) {
          throw new Error(result.message || 'Something went wrong. Please try again.');
        }

        signupForm.hidden = true;
        if (successMessage) {
          successMessage.hidden = false;
          successMessage.focus();
        }
      } catch (error) {
        signupForm.dataset.submitting = 'false';
        if (submitButton) submitButton.disabled = false;
        if (errorMessage) {
          errorMessage.textContent =
            error instanceof Error ? error.message : 'Something went wrong. Please try again.';
          errorMessage.hidden = false;
        }
      }
    });

    osCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        osCheckboxes.forEach((item) => item.setCustomValidity(''));
      });
    });
  });
}
