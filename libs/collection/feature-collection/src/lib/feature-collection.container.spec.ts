import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCollectionContainer } from './feature-collection.container';

describe('FeatureCollectionContainer', () => {
  let component: FeatureCollectionContainer;
  let fixture: ComponentFixture<FeatureCollectionContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureCollectionContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCollectionContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
