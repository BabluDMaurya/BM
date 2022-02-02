import { Component, OnInit } from '@angular/core';
import {Stripe} from '@ionic-native/stripe/ngx';
import { Config } from '../../config/config';
import { ProgramService } from '../../services/program.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {
  stripeKey: any = Config.stripePublishKey;
  paymentData: any;
  cardDetails: { number: string; expMonth: number; expYear: number; cvc: string; };
  token: any;
  constructor(private stripe: Stripe,private programService: ProgramService) { }

  ngOnInit() {
  }
  register(form) {
    console.log(form.form.value);
    this.stripe.setPublishableKey(this.stripeKey);

    this.cardDetails = {
      number: form.form.value.card_number,
      expMonth: form.form.value.exp_month,
      expYear: form.form.value.exp_year,
      cvc: form.form.value.cvv
    }

    this.stripe.createCardToken(this.cardDetails)
      .then(token => {
        console.log(token);
        this.token = token;
        console.log('payment with stripeeee');
        this.programService.createStripeCustomerId({"token_id" : this.token}).subscribe(data => {
         
        });
      })
      .catch(error => console.error(error));
    
  }
}