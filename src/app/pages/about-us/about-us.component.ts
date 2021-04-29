import { Component, OnDestroy, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit, OnDestroy {
  options = { fullWidth: true, indicators: true };
  /* VARIABLES */
  global = 1;
  myInterval: any;

  constructor() {}

  /* Method that allow to start variables and other methods when the component starts*/
  ngOnInit(): void {

    /* Interval to change carousel */
      this.myInterval = setInterval(() => {
      // get the elements (label)
      const options = document.querySelectorAll('.options');
      // restar the global variable
      if (this.global > options.length) {
        this.global = 1;
      }
      this.Change_View(options[this.global - 1]);
      this.global++;
    }, 3000);
  }

  /* Method to remove the interval when the component is closes*/
  ngOnDestroy(): void{
    if (this.myInterval){
    clearInterval(this.myInterval)
    }
  }

  /* intermediate method of performancing carousel operations*/
  onClickMe(e: any): void {
    // the element that sent the event is obtained
    const element = e.srcElement;
    // get the for atribute of the element
    const slide = element.getAttribute('for').split('-')[1];
    // the global variable is change
    this.global = slide;
    this.Change_View(element);
  }

  /* Method that allows make changes in the view effective */
  Change_View(e: any): void {
    // remove the color indicator
    document.querySelectorAll('.show').forEach((item) => {
      item.classList.remove('show');
    });
    // the element(input) is obtained with the help of the global variable
    const checked = document.getElementById(
      'slide-' + this.global
    ) as HTMLInputElement;
    // the element(label) color is changed
    e.classList.add('show');
    // the element's(input) checked is changed
    checked.checked = true;
  }

}
