import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureSearchContainer } from './feature-search.container';

describe('FeatureSearchContainer', () => {
  let component: FeatureSearchContainer;
  let fixture: ComponentFixture<FeatureSearchContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureSearchContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureSearchContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
