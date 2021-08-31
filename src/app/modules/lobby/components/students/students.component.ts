import { Component, OnInit } from '@angular/core'
import { MenuItem, MessageService } from 'primeng/api'
import { Course } from 'src/app/models/course'
import { Student } from 'src/app/models/student'
import { StudentService } from 'src/app/services/student/students.service'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  providers: [MessageService]
})
export class StudentsComponent implements OnInit {
  lista: Array<Student> = []
  lista2: Array<any> = []
  spinner: boolean = false
  items: MenuItem[]
  addDialog: boolean = false
  actual: Student
  constructor (private serviceStudent: StudentService,
    private messageService: MessageService,
    ) {}

  ngOnInit (): void {
    this.spinner = true
    this.serviceStudent.getListStudents().subscribe(res => {
      this.showSuccess()
      this.lista = res.body
      this.spinner = false
    },
    err => {
      this.showError(err.error)
    })
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
    this.serviceStudent
      .getListSubjectFromStudent(this.actual.id_student)
      .subscribe(res => {
        this.showSuccess()
        res.body.forEach(element => {
          this.lista2.push({
            student: element[0],
            subject: element[1],
            grade: element[2]
          })
        })
        this.addDialog = true
        this.spinner = false
      },
      err => {
        this.showError(err.error)
      })
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
