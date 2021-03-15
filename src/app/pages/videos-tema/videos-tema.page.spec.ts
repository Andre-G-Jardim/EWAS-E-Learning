import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideosTemaPage } from './videos-tema.page';

describe('VideosTemaPage', () => {
  let component: VideosTemaPage;
  let fixture: ComponentFixture<VideosTemaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosTemaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideosTemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
