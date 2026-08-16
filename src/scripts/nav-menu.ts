const MOBILE_QUERY = '(max-width: 600px)';

export function mountNavMenu(root: ParentNode = document) {
  root.querySelectorAll<HTMLButtonElement>('[data-nav-menu-toggle]').forEach((toggle) => {
    if (toggle.dataset.navMenuReady === 'true') return;
    toggle.dataset.navMenuReady = 'true';

    const menuId = toggle.getAttribute('aria-controls');
    const menu = menuId ? document.getElementById(menuId) : null;
    if (!menu) return;

    const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';

    const setOpen = (open: boolean) => {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      menu.classList.toggle('is-open', open);
    };

    toggle.addEventListener('click', () => setOpen(!isOpen()));

    // Any control inside the panel either navigates away or opens the search
    // palette, so the menu should never stay open behind it.
    menu.addEventListener('click', (event) => {
      if ((event.target as HTMLElement | null)?.closest('a, button')) setOpen(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape' || !isOpen()) return;
      setOpen(false);
      toggle.focus();
    });

    document.addEventListener('click', (event) => {
      if (!isOpen()) return;
      const target = event.target as Node;
      if (!menu.contains(target) && !toggle.contains(target)) setOpen(false);
    });

    // The panel is only a panel below the breakpoint; above it the same markup
    // is the plain inline nav, so a stale open state would leak into desktop.
    const mobile = window.matchMedia(MOBILE_QUERY);
    mobile.addEventListener('change', (event) => {
      if (!event.matches) setOpen(false);
    });
  });
}
