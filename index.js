import './theme-default.scss';
import './style.css';

/*
 * This script sets a variable called --scrollbar--width
 * that always represents the width of
 * the scrollbar if it is visible
 */

const innerWidthFiller = document.createElement('div');
innerWidthFiller.style.cssText = 'position: fixed; left: 0; right: 0';
document.body.appendChild(innerWidthFiller);

const resizeObserver = new ResizeObserver(() => {
  document.body.style.setProperty(
    '--scrollbar--width',
    window.innerWidth - innerWidthFiller.offsetWidth + 'px'
  );
});
resizeObserver.observe(document.body);
