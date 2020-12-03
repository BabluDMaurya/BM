import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./../../app.component.scss','./faq.page.scss'],
})
export class FaqPage implements OnInit {
  public items: any = [];
  status: boolean = false;

  constructor(public navCtrl: NavController,public commonService : CommonService) { 
    this.items = [
      { expanded: true, title:'Lorem Ipsum is simply dummy text ? ', description: 'This is content, without any paragraph or header tags, within an ion-card-content element.'},
      { expanded: false, title:'Lorem Ipsum is simply dummy text of the printing and typesetting industry ? ', description: 'This is content, without any paragraph or header tags, within an ion-card-content element.' },
      { expanded: false, title:'What is Lorem Ipsum?', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
      { expanded: false, title:'Why do we use it? ', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.' },
      { expanded: false, title:'Where does it come from?', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'},
      { expanded: false, title:'Where can I get some?', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.' }
    ];
  }
  ngOnInit() {
  }
  goBack(){
    this.navCtrl.back();
  }
  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
           this.status = !this.status;   
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
}