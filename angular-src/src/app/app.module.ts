/*MODULES*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/*SERVICES*/
import { ListService } from './services/list.service';

/*COMPONENTS*/
import { AppComponent } from './app.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { ViewListComponent } from './components/view-list/view-list.component';


@NgModule({
	declarations: [
		AppComponent,
		AddListComponent,
		ViewListComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule
	],
	providers: [ListService],
	bootstrap: [AppComponent]
})
export class AppModule { }
