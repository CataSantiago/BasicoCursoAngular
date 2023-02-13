import {Component} from '@angular/core';

@Component({
	selector: 'fruta',
	templateUrl: './fruta.component.html'
})
export class FrutaComponent{
	public nombre_componente = 'Componente de fruta';
	public listado_frutas = 'Naranja, Manzana, Pera, Sandia';

	public nombre:string;
	public edad:number;
	public mayorDeEdad:boolean;
	public trabajos:Array<string> = ['Carpintero','Albañil','Fontanero'];
	public comodin:any;

	/* Para darle valor a las propiedades */
	constructor(){ 
		this.nombre = 'Santiago Catanzaro';
		this.edad = 35;
		this.mayorDeEdad  = true;
		this.comodin = "SI";
	}

	/* Para llamar metodos y hacer funcionalidades */
	ngOnInit(nombre:string , edad:number){
		this.cambiarNombre();
		this.cambiarEdad();
		console.log(this.nombre + " " + this.edad);

		//Variables y Alcance
		var uno =  8;
		var dos = 15;

		if(uno == 8){
			let uno = 3; //let funciona solo dentro del bloque
			var dos = 88;
			console.log("Dentro del if: " + uno + dos);
		}

		console.log("Fuera del if: " + uno + dos);

	}

	cambiarNombre(){
		this.nombre = 'Juan Lopez';
	}
	cambiarEdad(){
		this.edad = 45;
	}
}