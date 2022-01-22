import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingLayerComponent } from './setting-layer.component';

describe('SettingLayerComponent', () => {
  let component: SettingLayerComponent;
  let fixture: ComponentFixture<SettingLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingLayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
