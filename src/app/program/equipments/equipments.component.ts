import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { NavParams, ModalController } from '@ionic/angular';
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
  equipments = [{
    id: 1, name: 'Dumbels', selected: false,
  },
  {
    id: 2, name: 'Rope', selected: false,
  },
  {
    id: 3, name: 'Leg Exerciser', selected: false,
  },
  {
    id: 4, name: 'Treadmill', selected: false,
  },
  {
    id: 5, name: 'Ellipticals', selected: false,
  },
  {
    id: 6, name: 'Abdominal Crunchers', selected: false,
  },
  {
    id: 7, name: 'Aerobic steppers', selected: false,
  },
  {
    id: 8, name: 'Rowing Machines', selected: false,
  },

  ];
  constructor(public commonService: CommonService,
    private navParams: NavParams,
    private modalCtrl: ModalController) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.programDetails = this.navParams.data.programDetail;

    this.equipment = this.programDetails.equipments.split(',');

    this.equipments.filter(el => {
      if (this.equipment.includes(el.id.toString())) {
        el.selected = true;
      }
      return el;
    });
  }
  closeModal() {
    this.commonService.dismissModal();
  }
  async openEdit() {
    const modal = await this.modalCtrl.create({
      component: AddEquipmentsComponent,
      cssClass: 'fullModal',
      componentProps: { "programData": this.programDetails, "modelOpen": 1 }
    });

    modal.onDidDismiss().then((d: any) => {
      console.log(d);
      // if (event == 1) {
      //   this.addEquipments = (d.data);
      // } else {
      //   this.addNutrition = (d.data);
      // }
      if (d.data) {
        console.log('asasd');
      }

    });
    return await modal.present();
  }
}
