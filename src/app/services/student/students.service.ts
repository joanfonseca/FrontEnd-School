import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Global } from 'src/app/models/global/global'
@Injectable()
export class StudentService {
  constructor (private http: HttpClient) {}

  getListCourses (id): Observable<any> {
    return this.http.get<any>(Global.apiBackConnect + `course/${id}`, {
      observe: 'response'
    })
  }
  getListStudents (): Observable<any> {
    return this.http.get<any>(Global.apiBackConnect + `student`, {
      observe: 'response'
    })
  }
  getListSubjectFromStudent (id): Observable<any> {
    return this.http.get<any>(Global.apiBackConnect + `student/${id}`, {
      observe: 'response'
    })
  }
}
