import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralConceptsComponent } from './general-concepts.component';

describe('GeneralConceptsComponent', () => {
  let component: GeneralConceptsComponent;
  let fixture: ComponentFixture<GeneralConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralConceptsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
