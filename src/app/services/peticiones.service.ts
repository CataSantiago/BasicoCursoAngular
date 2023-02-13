import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpResponse} from '@angular/common/http';
import { catchError,map } from 'rxjs/operators';
import { throwError,Observable } from 'rxjs';



@Injectable()
export class PeticionesService{
	public url: string;


	constructor(private _http:HttpClient){
		this.url = "https://jsonplaceholder.typicode.com/posts";
	}

	getPrueba(){
		return "Hola mundo desde el servicio.";
	}

	getArticulos(){
		return this._http.get(this.url)
					.pipe(map(res => res || []),
						 catchError(error => throwError(error.message || error)));

	}
}