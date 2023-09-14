import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHelloWorldComponent } from './create-hello-world.component';

describe('CreateHelloWorldComponent', () => {
  let component: CreateHelloWorldComponent;
  let fixture: ComponentFixture<CreateHelloWorldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHelloWorldComponent]
    });
    fixture = TestBed.createComponent(CreateHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
