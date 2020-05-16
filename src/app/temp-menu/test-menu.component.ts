import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-menu',
  templateUrl: './test-menu.component.html',
  styleUrls: ['./test-menu.component.scss'],
})
export class TestMenuComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {}

}
