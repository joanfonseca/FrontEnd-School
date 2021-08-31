import { Component, OnInit } from '@angular/core'
import { MessageService, PrimeNGConfig } from 'primeng/api'
import { SchoolService } from 'src/app/services/school/schools.service'

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
  providers: [MessageService]
})
export class LobbyComponent implements OnInit {
  visibleSidebar: boolean = false
  titulo: string = 'Schools-Software'
  constructor (
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private serviceSchool: SchoolService
  ) {}
  ngOnInit () {
    this.primengConfig.ripple = true

    this.serviceSchool.getSchool(1).subscribe(
      res => {
        console.log(res)
        this.titulo = res.body.name
        this.showSuccess()
      },
      err => {
        this.showError(err.error)
      }
    )
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
