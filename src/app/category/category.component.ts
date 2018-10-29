import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-category',
    template: `
    <h2>{{category.name}}</h2>
    <div *ngFor="let item of category.items">
        {{item.name}}
    </div>
    `,
    styles: [`
    `]
})
export class CategoryComponent {
    @Input() category: Category;

    constructor() { }

}