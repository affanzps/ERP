import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockOpeningService {

  private _BaseUrl = 'https://archivistpk.manticapps.com/api/inventory/StockOpening/';
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkZWRmMTRkMi1kN2RiLTQ1ZWYtOTJhNC01OWNhZDAzNmNmMWMiLCJzdWIiOiJhZG1pbkBtYW50aWNzb2Z0d2FyZS5jb20iLCJMb2dpbklkIjoiYWRtaW5AbWFudGljc29mdHdhcmUuY29tIiwiREJOYW1lIjoiQ2ZESjhQbGNmTHYyNG45Q2hMZzFpWjlUVUQ2aVk0WUVIanZZNGpXLUdrYjlKTkpKdFhVS1dnTGRJeTdNR2t5dURlU1JHVm9ZS0lPZ2NqUHN0UEctdl8wMC1VbkhuakZwVmF6QzZwU3pjaTBKaUMzMjdCank0Z01waU1YdVM1YVVJSmxJNlEiLCJQcm9kdWN0SWQiOiIxIiwiUHJvZHVjdEtleSI6IkNmREo4UGxjZkx2MjRuOUNoTGcxaVo5VFVENW1Kelh5cEUwdmMxNnF3d1Q5TTdlTk5lOFpjUlVJcEs3c0xnWmVoelRKSG4tZUtfSUZyYnlwUU02cE1ndDhXSmVGeF9DQkFPQzZGQjFDYUE3cHFtaG1mQ1lUbDQ5X0R1c2RyV0R0UmY4elpnIiwiU29mdHdhcmVJZCI6IjEiLCJTb2Z0d2FyZUtleSI6IkNmREo4UGxjZkx2MjRuOUNoTGcxaVo5VFVEN29zcXliX0wweXMwODZBSFh2M2dBQUVDcnhWV0NMcEQ4bGVFd28xd2pYbEpBcFM1d2tEeTFRY0RWcjVMMWJrWEhJRnZlQ0YtMjVFVk91eHUxdlVjNVg4QjBDRUJNb1otNmg1OXk0OTB5allRIiwiTWlzVXNlcklkIjoiMiIsIk1pc1RlbmFudElkIjoiMSIsIk1pc09yZ2FuaXphdGlvbklkIjoiMSIsIk1pc0JyYW5jaElkIjoiMSIsIkxhbmd1YWdlSWQiOiIxIiwiU2VjUm9sZXMiOiJtaXNfc3lzX2FkbWluLG1pc19jcF9hZG1pbixhZG1pbiIsImV4cCI6MTczMjU1NjQwNiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA1NiIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcwNTYifQ.8lxpBoQfOnENYQBZ6y40Nms1at4VE6eSUqt613A9364'
  constructor(private http: HttpClient) { }

  // Method to get paged list from the API
  getPagedList(payload: any): Observable<any> {
    let Url = this._BaseUrl + 'getPagedList'
    // Set the authorization header with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    });

    // Make the POST request with payload and headers
    return this.http.post<any>(Url, payload, { headers });
  }
  deleteRecordById(id: number): Observable<any> {
    const Url = `${this._BaseUrl}delete/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    });

    return this.http.delete<any>(Url, { headers });
  }

  edit(id: number): Observable<any>{
    debugger
    const Url = `${this._BaseUrl}GetById/${id}`;
    const headers=new HttpHeaders({
       'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    })
      return this.http.get<any>(Url,{headers});
  }

  insertOrUpdate(payload: any): Observable<any> {
    let Url = this._BaseUrl + 'insertOrUpdate'
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    });
    // Make the POST request with payload and headers to insert or update
    return this.http.post<any>(Url, payload, { headers });
  }



  warehouselist(payload: any): Observable<any> {
    let Url = 'https://archivistpk.manticapps.com/api/inventory/warehouse/getList'
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    });


    // Make the POST request with payload and headers to insert or update
    return this.http.post<any>(Url, payload, { headers });
  }


  inventory(): Observable<any> {
    let Url = 'https://archivistpk.manticapps.com/api/inventory/item/getList'
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json, text/plain, */*'

    });


    // Make the POST request with payload and headers to insert or update
    return this.http.post<any>(Url, { headers });
}


}
