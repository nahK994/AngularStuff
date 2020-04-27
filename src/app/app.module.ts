import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ContactComponent } from './contact/contact.component';
import { from } from 'rxjs';
// import { ContactService } from './service/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatInputModule,
    MatFormFieldModule,

    MatButtonModule,
    MatIconModule,

    MatDialogModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  // providers: [ContactService],
  entryComponents: [ContactComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
