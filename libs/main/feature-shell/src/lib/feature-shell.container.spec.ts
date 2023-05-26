import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureShellContainer } from './feature-shell.container';

describe('FeatureShellContainer', () => {
  let component: FeatureShellContainer;
  let fixture: ComponentFixture<FeatureShellContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureShellContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureShellContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
