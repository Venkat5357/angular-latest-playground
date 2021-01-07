import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public name = 'venkatesh';

  constructor() { }

  ngOnInit(): void {
    console.log('Home component init called..');
  }

  ngAfterViewInit(): void {
    console.log('Home component afterViewInit called..');

    setTimeout(() => { this.name = 'kumar'; }, 3000);
  }

}
