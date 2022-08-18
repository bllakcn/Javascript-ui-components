import './tabbed-content.css';

class Tab{
  constructor(container){
    this.container = container;
    this.tabs = container.querySelectorAll('.trigger-tab');
  }
  init(){
    this.tabs.forEach(tab => {
      tab.addEventListener('click', e => {
        this.toggleTabs(e);
        this.toggleContent(e);
      })
    })
  }
  toggleTabs(e){
    this.tabs.forEach(tab => tab.classList.remove('active'));
    e.target.classList.add('active');
  }
  toggleContent(e){
    this.container.querySelectorAll('.content').forEach(content => {
      content.classList.remove('active')
    });
    const selector = e.target.getAttribute('data-target');
    const content = this.container.querySelector(selector);
    content.classList.add('active');
  }
}

export { Tab as default}