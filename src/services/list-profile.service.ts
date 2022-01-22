import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListProfileService {

  constructor() { }
  listprofiles(){
    const userlist=[
      {name:"shubhendu", id:1},
      {name:"sushmitta", id:2}
    ]
    return userlist;
  }
}
