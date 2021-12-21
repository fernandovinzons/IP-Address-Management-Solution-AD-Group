import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetProtocolComponent } from './internet-protocol.component';

describe('InternetProtocolComponent', () => {
  let component: InternetProtocolComponent;
  let fixture: ComponentFixture<InternetProtocolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternetProtocolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetProtocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
