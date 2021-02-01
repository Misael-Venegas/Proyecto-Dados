import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular'


@Component({
  selector: 'app-un-dado',
  templateUrl: './un-dado.page.html',
  styleUrls: ['./un-dado.page.scss'],
})
export class UnDadoPage implements OnInit {

  reto;
  crearLista = false;
  arrayRetos: any = [];
  contador: Number = 0;
  listaDeRetos: any = [];
  itemRetos: any = [];
  existeListaRetos = false;



  constructor(public alert: AlertController, public loadingControler: LoadingController, public toast: ToastController,
    public route: Router) { }

  ngOnInit() {
    let datosStorage = localStorage.getItem('listaRetos');
    console.log(datosStorage);
  }

  nuevaLista() {
    this.crearLista = true;
    this.existeListaRetos = false;
  }

  async agregarReto() {


    if (this.arrayRetos.length == 5) {
      const loading = await this.loadingControler.create({

        cssClass: 'my-custom-class',
        message: 'Creando lista',
        duration: 1000
      });

      await loading.present();
      this.crearNombreListasDeRetos();
    }

    if (this.reto == undefined || this.reto == "") {
      this.camposVacios();
      return;
    }

    this.arrayRetos.push(this.reto);
    this.reto = undefined;

  }

  finalizarLista() {
    this.crearLista = false;
    this.existeListaRetos = false;
  }

  async crearNombreListasDeRetos() {
    let nombreLista = "Mis retos";
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Nombre de la lista',
      inputs: [
        {
          name: 'nombreLista',
          type: 'text',
          placeholder: 'Ej. Mis retos 01'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            nombreLista = "Mis retos";
            this.guardarListasDeRetos(nombreLista);
          }
        }, {
          text: 'Ok',
          handler: (alertData) => {
            nombreLista = alertData.nombreLista;
            this.guardarListasDeRetos(nombreLista);
          }
        }
      ]
    });

    await alert.present();

  }

  guardarListasDeRetos(nombreLista) {

    let misRetos = {
      nombre: nombreLista,
      arrayRetos: this.arrayRetos
    }
    this.listaCreadaCorrectamente();

    this.listaDeRetos.push(misRetos);
    this.arrayRetos = [];
    this.reto = undefined;
    this.crearLista = false;
    localStorage.setItem('listaRetos', this.listaDeRetos);
    console.log(this.listaDeRetos);

  }

  jugar() {
    localStorage.setItem('retos', this.itemRetos);
    this.route.navigate(['jugar']);
  }

  seleccionarLista() {
    this.crearLista = false;
    this.existeListaRetos = true;
  }

  borrarLista() {
    let indice = this.listaDeRetos.indexOf(this.itemRetos);

  }
  /*****************************
   ** Alertas para el sistema **
   *****************************/

  async camposVacios() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'ERROR',
      subHeader: 'Campos vacios',
      message: 'Ingresa un reto antes de dar click en agregar',
      buttons: ['Aceptar']
    })

    await alert.present();
  }
  async listaCreadaCorrectamente() {
    const toast = await this.toast.create({
      header: 'Operación exitosa',
      message: 'La lista se creó de manera correcta',
      position: 'top',
      duration: 2000,
      buttons: [
        {
          side: 'start',
          icon: 'checkmark',
        }
      ]
    });
    toast.present();
  }
}
