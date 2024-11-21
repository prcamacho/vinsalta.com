import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCarouselComponent } from './preview-carousel.component';

describe('PreviewCarouselComponent', () => {
  let component: PreviewCarouselComponent;
  let fixture: ComponentFixture<PreviewCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviewCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
