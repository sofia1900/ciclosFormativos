import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuadroComponent } from './recuadro.component';

describe('RecuadroComponent', () => {
  let component: RecuadroComponent;
  let fixture: ComponentFixture<RecuadroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuadroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecuadroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
