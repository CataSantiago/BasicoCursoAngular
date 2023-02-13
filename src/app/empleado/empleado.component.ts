import { Component } from '@angular/core';
import {Empleado} from './empleado';

@Component({
	selector: 'empleado',
	templateUrl: './empleado.component.html'
})
export class EmpleadoComponent{
	public titulo = 'Componente Empleados: ';
	
	public empleado!:Empleado;
	public trabajadores!:Array<Empleado>;
	public trabajador_externo:boolean;
	public color:string;
	public color_seleccionado:string;

	constructor(){
		this.empleado = new Empleado('Santiago', 45, 'Cocinero', true);
		this.trabajadores = [
			new Empleado('Manolo', 35, 'Administrativo', true),
			new Empleado('Mercurio', 27, 'Cocinero', true),
			new Empleado('Gabriel', 66, 'Programador', false)
		];

		this.trabajador_externo = true;
		this.color = 'green';
		this.color_seleccionado = '#ccc';
	}

	ngOnInit(){
		console.log(this.empleado);
		console.log(this.trabajadores);
	}

	cambiarExterno(valor:boolean){
		this.trabajador_externo = valor;
	}

	logColorSeleccionado(){
		console.log(this.color_seleccionado);
	}

}