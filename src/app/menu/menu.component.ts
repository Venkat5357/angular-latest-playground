import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  @Input()
  public menuName: string;

  constructor() { }


  ngOnInit(): void {
    console.log('menu OnInit called...');

    console.log('menuName from menuComponent OnInit..' + this.menuName);
  }

  ngAfterViewInit(): void {
    console.log('menu AfterViewInit called...');

    setTimeout(() => { console.log('menuName from menuComponent AfterViewInit.. from setTimeOut' + this.menuName); }, 4000);
    console.log('menuName from menuComponent AfterViewInit..' + this.menuName);
  }

}
