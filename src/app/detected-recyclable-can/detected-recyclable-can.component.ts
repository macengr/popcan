import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detected-recyclable-can',
  templateUrl: './detected-recyclable-can.component.html',
  styleUrls: ['./detected-recyclable-can.component.scss'],
})
export class DetectedRecyclableCanContainerComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {}

}
