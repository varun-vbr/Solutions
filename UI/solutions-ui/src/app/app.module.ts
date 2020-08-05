import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';
import {SolutionsProviderService} from './solutions-provider.service';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SolutionsComponent } from './solutions/solutions.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {HttpClientModule} from '@angular/common/http';

export function solutionsProviderFactory(provider: SolutionsProviderService) {
  return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent,
    SolutionsComponent
  ],
  exports:[
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule
  ],
  providers: [
    SolutionsProviderService,
    { provide: APP_INITIALIZER, useFactory: solutionsProviderFactory, deps: [SolutionsProviderService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
