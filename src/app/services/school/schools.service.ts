import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Global } from 'src/app/models/global/global'
@Injectable()
export class SchoolService {
  constructor (private http: HttpClient) {}

  getSchools (): Observable<any> {
    return this.http.get<any>(Global.apiBackConnect + `school`, {
      observe: 'response'
    })
  }
  getSchool (id_school): Observable<any> {
    return this.http.get<any>(Global.apiBackConnect + `school/${id_school}`, {
      observe: 'response'
    })
  }
}
