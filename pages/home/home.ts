import { Component } from '@angular/core';
import { ChatbotWidgetService } from 'chatbot-widget';
import { UserWidget } from 'chatbot-widget/lib/UserWidget';
import {  NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private _ChatbotWidgetService:ChatbotWidgetService) {
  }

  ngOnInit(): void {
    //After login
     this.setUserInfoTochatBot();

  }
  setUserInfoTochatBot() {
    let user:UserWidget ={userId:"Ahmed Taha",phoneNo:"325325623",authToken:"312432452353653" };

    this._ChatbotWidgetService.setUserWidget(user);
   }

  handelServiceEvent(event:string){
    console.log("this event from ChatBOt Widget"+event)

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatBotWidgetPage');
  }


}
