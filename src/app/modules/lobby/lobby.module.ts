import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LobbyRoutingModule } from './lobby-routing.module'
import { StudentsComponent } from './components/students/students.component'
import { TeachersComponent } from './components/teachers/teachers.component'
import { SchoolService } from 'src/app/services/school/schools.service'
import { ButtonModule } from 'primeng/button'
import { SidebarModule } from 'primeng/sidebar'
import { MenuModule } from 'primeng/menu'
import { ScrollPanelModule } from 'primeng/scrollpanel'
import { RippleModule } from 'primeng/ripple'
import { ToastModule } from 'primeng/toast'
import { DialogModule } from 'primeng/dialog'
import { TableModule } from 'primeng/table'
import { PaginatorModule } from 'primeng/paginator'
import { TeacherService } from 'src/app/services/teacher/teachers.service'
import { InputTextModule } from 'primeng/inputtext'
import { ProgressBarModule } from 'primeng/progressbar'
import { TooltipModule } from 'primeng/tooltip'
import { StudentService } from 'src/app/services/student/students.service'
@NgModule({
  declarations: [StudentsComponent, TeachersComponent],
  imports: [
    CommonModule,
    LobbyRoutingModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    MenuModule,
    SidebarModule,
    ScrollPanelModule,
    TableModule,
    PaginatorModule,
    DialogModule,
    InputTextModule,
    ProgressBarModule,
    TooltipModule
  ],
  providers: [SchoolService, TeacherService, StudentService]
})
export class LobbyModule {}
