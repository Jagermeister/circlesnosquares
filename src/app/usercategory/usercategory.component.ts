import { Component, OnInit } from '@angular/core';
import { UserCategoryItemService } from '../usercategoryitem/usercategoryitem.service';
import { CategoryService } from '../category/category.service';

@Component({
    selector: 'app-usercategory',
    template: `
    <table>
    <ng-container *ngFor="let category of categories">
        <tr>
            <td>{{category.name}}</td>
            <td>Monday</td>
            <td>Tuesday</td>
            <td>Wednesday</td>
        </tr>
        <tr *ngFor="let item of category.items">
            <td>{{item.name}}</td>
            <td style="text-align: center;"><mat-checkbox color="primary" [disabled]="true"></mat-checkbox></td>
            <td style="text-align: center;"><mat-checkbox color="primary" [disabled]="true" [checked]="true"></mat-checkbox></td>
            <td style="text-align: center;"><mat-checkbox color="primary"></mat-checkbox></td>
        </tr>
    </ng-container>
    </table>
    `,
    styles: [`
        table {
            margin: auto;
            text-align: left;
        }
    `]
})
export class UserCategoryComponent implements OnInit {
    categories: Category[];
    userCategoryItems: UserCategoryItem[];

    constructor(
        private categoryService: CategoryService,
        private userCategoryItemService: UserCategoryItemService) { }

    ngOnInit() {
        this.categoryService.fetchCategories()
            .subscribe(categories => {
                this.categories = categories;
                this.userCategoryItemService.fetchUserCategoryItems()
                    .subscribe(userItems => this.userCategoryItems = userItems);
            });
    }

}