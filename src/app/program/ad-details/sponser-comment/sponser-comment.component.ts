import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ProgramService } from 'src/app/services/program.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-sponser-comment',
  templateUrl: './sponser-comment.component.html',
  styleUrls: ['../../../app.component.scss','./sponser-comment.component.scss'],
})
export class SponserCommentComponent implements OnInit {
  commentForm: any;

  constructor( private commonService: CommonService,
     private programService: ProgramService,     
     private fb: FormBuilder,
     private navParams: NavParams,) { }

  comment:any;
  submitted: boolean = false;

  adDetail:any
  ngOnInit() {
    this.commonService.presentLoader();
    this.adDetail = this.navParams.data.adDetails;
    this.createForm();
    this.programService.getSponserComment({'adReqId':this.adDetail.id}).subscribe(data=>{
      this.comment = data.data;
      this.commonService.dismissLoader();
    },err=>{
      this.commonService.dismissLoader();
    });
    console.log(this.adDetail);
  }
  closeModal() {
    this.commonService.dismissModal();
  }
  createForm() {
    this.commentForm = this.fb.group({
      comment: new FormControl('', Validators.compose([
        Validators.required,
      ]))
    });
  }
  onClickSubmit() {
    
    this.submitted = true;
    if(this.commentForm.value != ''){
      this.commonService.presentLoader();
      this.programService.addSponserComment( {
       'cName':this.adDetail.company_name,
       'cId':this.adDetail.comapny_id,      
       'requestId':this.adDetail.id,
       'comment':this.commentForm.value.comment
    }).subscribe((data =>{
      this.ngOnInit();
      this.commonService.dismissLoader();
      
    }),err=>{
      this.commonService.dismissLoader();
    } );
    }
   
  }

}
