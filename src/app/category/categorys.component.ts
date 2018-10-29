import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
    selector: 'app-categorys',
    template: `
    <div *ngFor="let category of categories">
        <app-category [category]="category"></app-category>
    </div>
    `,
    styles: [`
    `]
})
export class CategorysComponent implements OnInit {
    categories: Category[];

    constructor(private categoryService: CategoryService) { }

    ngOnInit() {
        this.categoryService.fetchCategories()
            .subscribe(categories => this.categories = categories);
    }
}