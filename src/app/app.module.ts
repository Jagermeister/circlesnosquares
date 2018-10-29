import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
} from '@angular/material';

const matModules = [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
];
@NgModule({
    imports: [...matModules],
    exports: [...matModules],
})
export class MaterialModule {}

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';

import { CategorysComponent } from './category/categorys.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './category/category.service';

import { UserCategoryComponent } from './usercategory/usercategory.component';
import { UserCategoryItemService } from './usercategoryitem/usercategoryitem.service';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        /* Category */
        CategorysComponent,
        CategoryComponent,
        UserCategoryComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    providers: [
        CategoryService,
        UserCategoryItemService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
