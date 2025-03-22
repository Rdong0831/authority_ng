import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSyncerComponent } from './add-syncer.component';

describe('AddSyncerComponent', () => {
  let component: AddSyncerComponent;
  let fixture: ComponentFixture<AddSyncerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSyncerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSyncerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
