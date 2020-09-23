import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedViewerComponent } from './breed-viewer.component';

describe('BreedViewerComponent', () => {
  let component: BreedViewerComponent;
  let fixture: ComponentFixture<BreedViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
