import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl="http://localhost:3000/users/"
  constructor(private http:HttpClient) { }
  getUserList():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);
  }
  getUserById(id:any):Observable<any>{
return this.http.get<any>(this.baseUrl+id)
  }
  removeUser(id:any){
return this.http.delete(this.baseUrl+id)
  }
  addUser(data:User):Observable<User>{
    return this.http.post<User>(this.baseUrl,data);
  }
  updateUser(data:any,id:any):Observable<User>{
    return this.http.put<any>(this.baseUrl+id,data);
  }
}
