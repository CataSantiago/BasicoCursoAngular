import { Component } from '@angular/core';

@Component({
	selector: 'plantillas',
	templateUrl: './plantillas.component.html'
})

export class PlantillasComponent{
	public titulo: string;
	public administrador: any;

	public dato_externo= "Victos Robles";
	public identity = {
		id:1,
		web: 'victorrobles.es',
		tematica: 'Desarollo Web'
	};

	constructor(){
			this.titulo = "Plantillas ng Template en Angular";
			this.administrador = true;
		}

	cambiar(value:boolean){
		this.administrador = value;
	}


	public datos_del_hijo: any;
	recibirDatos(event: any){
		console.log(event);
		this.datos_del_hijo = event;
	}
}
