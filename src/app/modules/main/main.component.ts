import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  ngOnInit() {
    const test = $localize`Test@@Welcome`;
    const test2 = $localize`:@@HelloWorld:Hello World!!`;
    console.log(test2);
  }
}
