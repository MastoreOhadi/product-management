import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProdComponent } from './create-prod.component';

describe('CreateProdComponent', () => {
  let component: CreateProdComponent;
  let fixture: ComponentFixture<CreateProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
