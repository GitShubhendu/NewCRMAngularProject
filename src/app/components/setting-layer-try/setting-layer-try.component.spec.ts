import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingLayerTryComponent } from './setting-layer-try.component';

describe('SettingLayerTryComponent', () => {
  let component: SettingLayerTryComponent;
  let fixture: ComponentFixture<SettingLayerTryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingLayerTryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingLayerTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Num ', () => {
    expect(component.num).toBe(10);
  });
});
