import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureHomeContainer } from './feature-home.container';

describe('FeatureHomeContainer', () => {
  let component: FeatureHomeContainer;
  let fixture: ComponentFixture<FeatureHomeContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureHomeContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureHomeContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
