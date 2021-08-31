import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LobbyComponent } from './modules/lobby/lobby.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { NotfountComponent } from './modules/common/notfount/notfount.component'
import { ButtonModule } from 'primeng/button'
import { RippleModule } from 'primeng/ripple'
import { ToastModule } from 'primeng/toast'
import { SidebarModule } from 'primeng/sidebar'
import { ScrollPanelModule } from 'primeng/scrollpanel'

@NgModule({
  declarations: [AppComponent, LobbyComponent, NotfountComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    SidebarModule,
    ScrollPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
