import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recupera-contra',
  templateUrl: './recupera-contra.page.html',
  styleUrls: ['./recupera-contra.page.scss'],
})
export class RecuperaContraPage implements OnInit {

  constructor( private alertCtrl : AlertController) { }

  ngOnInit() {
  }

  public async solicitar(){
    const solicitar = await this.alertCtrl.create({
      header : 'Si los datos coinciden recibirás tu correo',
      buttons : [' Ok!']
    });

    await solicitar.present();
  }

}
