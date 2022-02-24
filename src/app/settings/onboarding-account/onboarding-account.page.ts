import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../services/program.service';
@Component({
  selector: 'app-onboarding-account',
  templateUrl: './onboarding-account.page.html',
  styleUrls: ['./onboarding-account.page.scss'],
})
export class OnboardingAccountPage implements OnInit {

  constructor(private programService: ProgramService) { }

  ngOnInit() {
  }

  createOnboardAccount(){
    this.programService.createStripeConnectAccount('').subscribe(data => {
      window.open(data.url, '_system');
     });
  }

}
