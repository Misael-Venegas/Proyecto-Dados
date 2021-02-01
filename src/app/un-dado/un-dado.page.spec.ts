import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnDadoPage } from './un-dado.page';

describe('UnDadoPage', () => {
  let component: UnDadoPage;
  let fixture: ComponentFixture<UnDadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnDadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnDadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
