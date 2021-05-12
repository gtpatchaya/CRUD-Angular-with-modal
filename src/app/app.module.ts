import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule  } from '@ng-bootstrap/ng-bootstrap';
import { TestNgBootstapComponent } from './test-ng-bootstap/test-ng-bootstap.component';
import { ModalTemplateComponent } from './modal-template/modal-template.component';



@NgModule({
  declarations: [
    AppComponent,
    TestNgBootstapComponent,
    ModalTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  entryComponents:[
    ModalTemplateComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
