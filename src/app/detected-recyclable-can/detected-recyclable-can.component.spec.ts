import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetectedRecyclableCanContainerComponent } from './detected-recyclable-can.component';

describe('DetectedRecyclableCanContainerComponent', () => {
  let component: DetectedRecyclableCanContainerComponent;
  let fixture: ComponentFixture<DetectedRecyclableCanContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectedRecyclableCanContainerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetectedRecyclableCanContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
