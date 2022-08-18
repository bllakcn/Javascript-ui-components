import './index.css';
import Tooltip from './ui-components/tool-tip';
import Dropdown from './ui-components/dropdown';
import Tab from './ui-components/tabbed-content';
import Snackbar from './ui-components/snackbar';

const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init();

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown)
  instance.init();
})

const tabs = new Tab(document.querySelector('.tabs'));

tabs.init();

const snackbar = new Snackbar();
const button = document.querySelector('.snackbar-trigger');

snackbar.init();

button.addEventListener('click', () =>{
  snackbar.show('Hey, you clicked!');
})
