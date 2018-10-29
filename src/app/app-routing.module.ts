import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategorysComponent } from './category/categorys.component';
import { UserCategoryComponent } from './usercategory/usercategory.component';

const routes: Routes = [
    {
        path: '',
        component: UserCategoryComponent
    },
    //{ path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
