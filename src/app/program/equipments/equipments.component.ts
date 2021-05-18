import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { NavParams, ModalController } from '@ionic/angular';
import { ProgramService } from './../../services/program.service';
import { AddEquipmentsComponent } from './../../add-program/add-equipments/add-equipments.component'

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['../../app.component.scss', './equipments.component.scss'],
})
export class EquipmentsComponent implements OnInit {
  showEquipments: any = 1;

  programDetails: any;
  equipment: any;
  equipments: any;
  // equipments = [{
  //   id: 1, name: 'Dumbels', selected: false,
  // },
  // {
  //   id: 2, name: 'Rope', selected: false,
  // },
  // {
  //   id: 3, name: 'Leg Exerciser', selected: false,
  // },
  // {
  //   id: 4, name: 'Treadmill', selected: false,
  // },
  // {
  //   id: 5, name: 'Ellipticals', selected: false,
  // },
  // {
  //   id: 6, name: 'Abdominal Crunchers', selected: false,
  // },
  // {
  //   id: 7, name: 'Aerobic steppers', selected: false,
  // },
  // {
  //   id: 8, name: 'Rowing Machines', selected: false,
  // },

  // ];
  constructor(public commonService: CommonService,
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private programService: ProgramService) {
      
    this.programDetails = this.navParams.data.programDetail;
    console.log(this.programDetails);
    this.equipment = this.programDetails.equipments.split(',');
    console.log(this.equipment);
    this.programService.fetchEquipmentList().subscribe((data) => {
      
      this.equipments = data.equipmentList;
      this.equipments.filter(el => {
        console.log(el.id);
      
        if ((this.equipment).includes(el.id.toString())) {
          el.selected = true;
        }
        return el
     
    })
  });
     }

  ngOnInit() {

  }
  // ionViewWillEnter() {
  //   this.programDetails = this.navParams.data.programDetail;
  //   console.log(this.programDetails);
  //   this.equipment = this.programDetails.equipments.split(',');
  //   console.log(this.equipment);
  //   this.programService.fetchEquipmentList().subscribe((data) => {
      
  //     this.equipments = data.equipmentList;
  //     console.log(this.equipments);
  //     this.equipments.filter(el => {
  //     if (this.equipment) {
  //       if ((this.equipment).includes(el.id )) {
  //         el.selected = true;
  //       } else {
  //         el.selected = false;
  //       }
  //       return el
  //     }
  //   })
  // });
    // this.equipments.filter(el => {
    //   if (this.equipment.includes(el.id.toString())) {
    //     console.log(el.id);
    //     el.selected = true;
    //   }
    //   return el;
    // });
  // }
  closeModal() {
    this.commonService.dismissModal(this.equipment.toString());
  }
  async openEdit() {
    const modal = await this.modalCtrl.create({
      component: AddEquipmentsComponent,
      cssClass: 'fullModal',
      componentProps: { "programData": this.programDetails.equipments, "modelOpen": 1 }
    });

    modal.onDidDismiss().then((d: any) => {
      console.log(d);
    if(d.data.length > 0){
      // d.data.filter(Boolean);
    this.equipment = d.data.filter(Boolean);
    console.log(this.equipment);
    this.programService.updateEquipmentList({ "equipmentId": d.data.filter(Boolean), "programId": this.programDetails.id}).subscribe((data) => {
      console.log('id update');
    });  
    console.log(d.data.filter(Boolean));
    this.programService.fetchEquipmentList().subscribe((data) => {
      console.log(data)
      this.equipments = data.equipmentList;
    
      this.equipments.filter(el => {
      if (this.equipment) {
        if ((this.equipment).includes(el.id )) {
          el.selected = true;
        }
        return el
      }
    })
  });

      if (d.data) {
        console.log('asasd');
      }
    }else{
      console.log('empty');
    } 
    });
    return await modal.present();
  }
}
