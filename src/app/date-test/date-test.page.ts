import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../services/program.service';
declare var OT:any;
@Component({
  selector: 'app-date-test',
  templateUrl: './date-test.page.html',
  styleUrls: ['./date-test.page.scss'],
})
export class DateTestPage implements OnInit {
  // term = '';
  // filterData = [
  //   {
  //     firstName: 'Celestine',
  //     lastName: 'Schimmel',
  //     address: '7687 Jadon Port'
  //   },
  //   {
  //     firstName: 'Johan',
  //     lastName: 'Ziemann PhD',
  //     address: '156 Streich Ports'
  //   },
  //   {
  //     firstName: 'Lizzie',
  //     lastName: 'Schumm',
  //     address: '5203 Jordon Center'
  //   },
  //   {
  //     firstName: 'Gavin',
  //     lastName: 'Leannon',
  //     address: '91057 Davion Club'
  //   },
  //   {
  //     firstName: 'Lucious',
  //     lastName: 'Leuschke',
  //     address: '16288 Reichel Harbor'
  //   }
  // ]
  session: any;
  publisher: any;
  apiKey: string;
  sessionId: string;
  token: string;
  constructor(public programService : ProgramService) {
    this.sessionId = '1_MX40NzA4MDA1NH5-MTYxMDU0ODQyMzczMX43T0daVCtIbkRNZHVCc01oVW5sRUdtM01-fg';
      this.token = 'T1==cGFydG5lcl9pZD00NzA4MDA1NCZzaWc9MmE3ZTM5Y2M4NjQxMjE0M2MzMzNkMjVlMmIxNDdmNWI4NGY0N2YyZDpzZXNzaW9uX2lkPTFfTVg0ME56QTRNREExTkg1LU1UWXhNRFUwT0RReU16Y3pNWDQzVDBkYVZDdElia1JOWkhWQ2MwMW9WVzVzUlVkdE0wMS1mZyZjcmVhdGVfdGltZT0xNjEwNTQ4NDIzJnJvbGU9cHVibGlzaGVyJm5vbmNlPTE2MTA1NDg0MjMuODU1MTE3MDM0MTg1MzMmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';
      this.apiKey = '47080054';
    // this.programService.openTokSessionCreate({'time': 10}).subscribe( (data: any) => {
    //   this.sessionId = data.opentok_session_id;
    //   this.token = data.opentok_token;
    //   this.apiKey = data.opentok_api_key;
      
    //   // console.log('Data:'+JSON.stringify(data));
    //   console.log('sessionId:'+this.sessionId);
    //   console.log('token:'+this.token);
    //   console.log('apiKey:'+this.apiKey);
    // });
  }

  ngOnInit() {}  
  startCall() {
    this.session = OT.initSession(this.apiKey, this.sessionId);
    this.publisher = OT.initPublisher('publisher');
    this.session.on({
      streamCreated: (event: any) => {
        this.session.subscribe(event.stream, 'subscriber');
        OT.updateViews();
      },
      streamDestroyed: (event: any) => {
        console.log(`Stream ${event.stream.name} ended because ${event.reason}`);
        OT.updateViews();        
      },
      sessionConnected: (event: any) => {
        this.session.publish(this.publisher);
      }
    });

    this.session.connect(this.token, (error: any) => {
      if (error) {
        console.log(`There was an error connecting to the session ${error}`);
      }
    });
  }
  disconnect(){
    console.log(`session close`);
    this.session.disconnect();
  }
}
