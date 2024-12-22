import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuasjuasComponent } from './juasjuas.component';

describe('JuasjuasComponent', () => {
  let component: JuasjuasComponent;
  let fixture: ComponentFixture<JuasjuasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuasjuasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuasjuasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
