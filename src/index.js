import './index.css';
import Tooltip from './ui-components/tool-tip';
import Dropdown from './ui-components/dropdown';

const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init();

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown)
  instance.init();
})