import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobstarComponent } from './jobstar.component';

describe('JobstarComponent', () => {
  let component: JobstarComponent;
  let fixture: ComponentFixture<JobstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobstarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
