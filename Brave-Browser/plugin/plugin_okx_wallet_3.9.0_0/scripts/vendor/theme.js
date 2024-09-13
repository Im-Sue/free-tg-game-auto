function getActualTheme() {
  const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
  if (darkMode.matches) {
    return 'dark';
  }
  return 'light';
}

var theme = window.localStorage.getItem('theme');
if (!theme || theme === 'auto') {
  window.localStorage.setItem('theme', 'auto');
  theme = getActualTheme();
}

document.body.setAttribute('class', `theme-${theme}`);

var logo = document.getElementById('logo');
if (logo) {
  // @ts-ignore
  logo.src = `./static/images/logo-${theme}.png`;
}
