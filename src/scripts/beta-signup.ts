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
    const osGroup = signupForm.querySelector<HTMLElement>('[data-beta-os-group]');
    const emailInput = signupForm.querySelector<HTMLInputElement>('input[type="email"]');
    const successMessage = signupForm.parentElement?.querySelector<HTMLElement>(
      '[data-beta-signup-success]'
    );
    const errorMessage = signupForm.parentElement?.querySelector<HTMLElement>(
      '[data-beta-signup-error]'
    );
    const consentCheckbox = signupForm.querySelector<HTMLInputElement>(
      '[data-beta-signup-consent]'
    );
    const submitButton = signupForm.querySelector<HTMLButtonElement>('button[type="submit"]');

    const updateSubmitButton = () => {
      if (submitButton) submitButton.disabled = !consentCheckbox?.checked;
    };

    const setInvalid = (element: HTMLElement | null, invalid: boolean) => {
      if (!element) return;
      element.toggleAttribute('aria-invalid', invalid);
    };

    updateSubmitButton();

    signupForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const hasValidEmail = Boolean(emailInput?.value.trim() && emailInput.validity.valid);
      const hasOperatingSystem = osCheckboxes.some((checkbox) => checkbox.checked);
      const hasConsent = consentCheckbox?.checked === true;

      setInvalid(emailInput, !hasValidEmail);
      setInvalid(osGroup, !hasOperatingSystem);
      setInvalid(consentCheckbox, !hasConsent);

      if (!hasValidEmail || !hasOperatingSystem || !hasConsent) {
        if (errorMessage) {
          errorMessage.textContent = !hasValidEmail
            ? 'Enter a valid email address.'
            : !hasOperatingSystem
              ? 'Choose at least one operating system.'
              : 'You need to agree before joining the waitlist.';
          errorMessage.hidden = false;
        }
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
        setInvalid(osGroup, false);
      });
    });

    emailInput?.addEventListener('input', () => setInvalid(emailInput, false));
    consentCheckbox?.addEventListener('change', () => {
      setInvalid(consentCheckbox, false);
      updateSubmitButton();
    });
  });
}
