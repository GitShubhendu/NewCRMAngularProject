import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
interface users {
  name: string;
  email: string;
}
interface name {
  name:string
}

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  flag:boolean=true;
  flagevent= new Subject<any>();

  constructor(private http: HttpClient) { }
  getProfile(): Observable<any> {
    const param = new HttpParams()
      .set('pageNum', '5')
      .set('pageSize', '2');
    return this.http.get<users>('https://jsonplaceholder.typicode.com/users', { params: param });
    // const userlist=[
    //   {name:"shubhendu", id:1},
    //   {name:"sushmitta", id:2}
    // ];
    // return userlist;
  }
  getJsondata(){
    return this.http.get<name>("../../assets/name.json");
  }
  

}
