export function injectStyles(shadowRoot) {
  const styles = document.querySelectorAll('style[data-vite-dev-id], style');

  styles.forEach(styleEl => {
    if (styleEl.textContent) {
      const newStyle = document.createElement('style');
      newStyle.textContent = styleEl.textContent;
      shadowRoot.appendChild(newStyle);
    }
  });

  const links = document.querySelectorAll('link[rel="stylesheet"]');
  links.forEach(link => {
    const newLink = link.cloneNode(true);
    shadowRoot.appendChild(newLink);
  });
}
