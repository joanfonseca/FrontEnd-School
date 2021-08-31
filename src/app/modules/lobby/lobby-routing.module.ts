import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { StudentsComponent } from './components/students/students.component'
import { TeachersComponent } from './components/teachers/teachers.component'

import { LobbyComponent } from './lobby.component'

const routes: Routes = [
  {
    path: '',
    component: LobbyComponent,
    children: [
      {
        path: 'teacher',
        component: TeachersComponent
      },
      {
        path: 'student',
        component: StudentsComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LobbyRoutingModule {}
