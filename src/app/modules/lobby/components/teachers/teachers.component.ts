import { Component, OnInit } from '@angular/core'
import { MenuItem, MessageService } from 'primeng/api'
import { Teacher } from 'src/app/models/teacher'
import { TeacherService } from 'src/app/services/teacher/teachers.service'

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
  providers: [MessageService]
})
export class TeachersComponent implements OnInit {
  constructor (
    private serviceTeacher: TeacherService,
    private messageService: MessageService
  ) {}
  lista: Array<Teacher> = []
  lista2: Array<any> = []
  items: MenuItem[]
  addDialog: boolean = false
  actual: Teacher
  spinner: boolean = false
  ngOnInit (): void {
    this.spinner = true
    this.serviceTeacher.getListTeachers().subscribe(
      res => {
        this.lista = res.body
        this.spinner = false
        this.showSuccess()
      },
      err => {
        this.showError(err.error)
      }
    )
    this.items = [
      {
        label: 'View subjects',
        icon: 'pi pi-fw pi-bookmark',
        command: () => {
          this.openView()
        }
      }
    ]
  }

  openView () {
    this.lista2 = []
    this.spinner = true
    this.serviceTeacher
      .getListTeachersToSubjects(this.actual.id_teacher)
      .subscribe(
        res => {
          this.showSuccess()
          res.forEach(element => {
            this.lista2.push({
              teacher: element[0],
              subject: element[1],
              grade: element[2],
              id: element[3]
            })
          })
          this.addDialog = true
          this.spinner = false
        },
        err => {
          this.showError(err.error)
        }
      )
  }
  update (p: any) {
    this.actual = p
  }
  close () {
    this.addDialog = false
  }
  showSuccess () {
    this.messageService.add({
      severity: 'success',
      summary: 'School!',
      detail: 'Successful connection'
    })
  }
  showError (text) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'text'
    })
  }
}
