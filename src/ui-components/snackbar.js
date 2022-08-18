import './snackbar.css';

class Snackbar{
  constructor(){
    this.snackbar = document.createElement('div');
  }
  init(){
    this.snackbar.classList.add('snackbar');
    document.querySelector('body').appendChild(this.snackbar);
  }
  show(message){
    this.snackbar.textContent = message;
    this.snackbar.classList.add('active-snack');
    setTimeout(() => {
      this.snackbar.classList.remove('active-snack');
    }, 4000);
  }
}

export {Snackbar as default}