import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorAttributesComponent } from './anchor-attributes.component';

describe('AnchorAttributesComponent', () => {
  let component: AnchorAttributesComponent;
  let fixture: ComponentFixture<AnchorAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnchorAttributesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnchorAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
