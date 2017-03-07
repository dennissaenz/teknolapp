import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TeknolService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TeknolService {

  constructor(public http: Http) {
  //  console.log('probando TeknolService Provider todo en orden');
   }

add(data){
	return new Promise(
		resolve=>{
			this.http.post("http://localhost/teknol_api/add",data)
			.map(res=>res.json())
			.subscribe(
					data=>{
						resolve(data);
					},
					err=>{
						console.log(err);
					}

				)
		}

	);

}


 

}