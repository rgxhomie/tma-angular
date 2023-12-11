import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCreateFormComponent } from './tag-create-form.component';

describe('TagCreateFormComponent', () => {
  let component: TagCreateFormComponent;
  let fixture: ComponentFixture<TagCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagCreateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TagCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
