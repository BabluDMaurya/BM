import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router,NavigationExtras} from '@angular/router'
@Component({
  selector: 'app-new-program-inner',
  templateUrl: './new-program-inner.page.html',
  styleUrls: ['../../app.component.scss', './new-program-inner.page.scss'],
})
export class NewProgramInnerPage implements OnInit {
  progImage: any = false;
  firstImg: any;
  progVideo: any = false;
  defaultPostImage : any = './../../../assets/images/loading.jpg';
  scheduleProgram: string = "program";
  constructor(
    public router : Router,
  ) { 
    this.scheduleProgram = "program";
  }

  ngOnInit() {
  }
  goBack() {
    // this.navCtrl.back();
    this.router.navigate(['/schedule-program']);
  }
}
