import { Component, OnInit } from '@angular/core';
import { SearchService } from './../../services/search.service';
import { PeopleViewService } from './../../services/people-view.service';
import { Config } from './../../config/config';
import {CommonService } from './../../services/common.service';
@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./../../app.component.scss', './programs.component.scss',],
})
export class ProgramsComponent implements OnInit {
  url:any=Config.profilePic;
  expanded:any= false;
  categories: any ;
  speciality:any;
  data: any;
  programList:any = true;
 bookmark= true;
  userData:any;
  
  constructor(private searchService:SearchService,
    private commonService:CommonService,
    private peopleService: PeopleViewService,) { 
    
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    console.log(this.userData);
    this.searchService.getSpecialities({}).subscribe(data=>{
      this.speciality = data.list;
      this.categories = data.list[0];
      console.log(this.categories);
      this.searchService.getProgramByCategory({'categoryId':this.categories.id}).subscribe(data=>{
        console.log(data);
        let i=1;
        this.programList=[]
        data.programList.filter(el=>{
          if((i % 5 == 0))
          {
            this.programList.push({'ad':true , 'adTitle':'Advertisement Title'});           
          }
          i++;
         
          el.bookmarks.filter((f) => {
            if (f.user_id == this.userData.id) {
              el.bookmarked = true;
            } 
          });

          this.programList.push(el);
        });
        
      console.log(this.programList);
      });
    });
   }


  categoryChanged(ev: any) {
    this.programList=null;
     this.searchService.getProgramByCategory({'categoryId':ev.detail.value}).subscribe(data=>{
      this.programList=[];
        console.log(data);
        let i=1;
        data.programList.filter(el=>{
          if((i % 5 == 0))
          {
            this.programList.push({'ad':true , 'adTitle':'Advertisement Title'});           
          }
          i++;
          this.programList.push(el);
        });
        
      console.log(this.programList);
      });
  }
  searchProgram:any;
  searchSkeleton:boolean=false;
  searchChanged(ev) {
    const searchTerm = ev.srcElement.value;
    this.searchSkeleton=true;
    this.searchProgram = [];
    if (!searchTerm) {

        setTimeout(()=>{
          this.searchProgram=null;
          this.searchSkeleton=false;
        },1500)
        return;
    }

    console.log(searchTerm);
    this.searchService.searchProgramRequest({ "searchQuery": searchTerm }).subscribe(
        (search: any) => {
          this.searchSkeleton=false;
          console.log(searchTerm);
            this.searchProgram = (search.searchList);
        },
        err=>{
       
        }
    )
}
  addBookmark(postId,bmStat,post_type){
    // this.programList.forEach((element, i) => {
    //   if (element.id == postId) {
    //     this.bookmarkPost[i].bookmarked = !bmStat;
    //   }
    // });
    this.peopleService.bookmarkPost({ 'postId': postId, 'bookmark': bmStat, 'post_type': post_type }).subscribe((data: any) => {
      if (data.status) {
        this.commonService.presentToast(data.status);
      }
    });
  }
}
