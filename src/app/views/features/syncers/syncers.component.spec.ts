import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncersComponent } from './syncers.component';

describe('SyncersComponent', () => {
  let component: SyncersComponent;
  let fixture: ComponentFixture<SyncersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyncersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
