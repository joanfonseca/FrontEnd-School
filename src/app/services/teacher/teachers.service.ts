import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Global } from 'src/app/models/global/global'
@Injectable()
export class TeacherService {
  constructor (private http: HttpClient) {}

  getListTeachersToSubjects (id): Observable<any> {
    return this.http.post<any>(Global.apiBackConnect + `teacher/${id}`, {
      observe: 'response'
    })
  }
  getListTeachers (): Observable<any> {
    return this.http.get<any>(Global.apiBackConnect + `teacher/`, {
      observe: 'response'
    })
  }
}
