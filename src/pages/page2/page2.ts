import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { TeknolService } from '../../providers/teknol-service';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
  providers: [TeknolService]
})
export class Page2 {

  msj_nombre;
  msj_correo;
  msj_comentario;

  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public servicios:TeknolService, public alertCtrl: AlertController) {

  this.msj_nombre="";
  this.msj_correo="";
  this.msj_comentario="";

  }

enviar(){
  
   var datos={};

     datos["msj_nombre"]=this.msj_nombre;
     datos["msj_correo"]=this.msj_correo;
     datos["msj_comentario"]=this.msj_comentario;  

     this.servicios.add(datos)
          .then(
              data=>{
                console.log(data);

                if(data["response"]=="1"){
                  let alert = this.alertCtrl.create(
                    {
                      title:"Aviso",
                      subTitle: "Registro Añadido",
                      buttons:["OK"]
                    }
                  );
                  //alert().present();
                }
              }
            )
            .catch(
              error=>{
              console.log(error);
              }
            )

  this.msj_nombre="";
  this.msj_correo="";
  this.msj_comentario="";

}//enviar

}
