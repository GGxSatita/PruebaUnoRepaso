import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor( private alertCtrl : AlertController) { }

  ngOnInit() {
  }

  public async alertar(){
    const alertar = await this.alertCtrl.create({
      header : 'Usuario registrado',
      buttons : ['Ok!']
    });

    await alertar.present();

  }

}
