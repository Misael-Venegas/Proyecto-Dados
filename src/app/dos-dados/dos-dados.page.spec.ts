import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DosDadosPage } from './dos-dados.page';

describe('DosDadosPage', () => {
  let component: DosDadosPage;
  let fixture: ComponentFixture<DosDadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DosDadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DosDadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
