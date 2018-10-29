import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <div id="page">
        <app-header></app-header>
        <div id="content"><router-outlet></router-outlet></div>
        <app-footer></app-footer>
    </div>
    `,
    styles: [`
        #page {
            min-height: 100%;
            display: grid;
            grid-template-rows: auto 1fr auto;
        }
        
        #page > * {
            color: white;
            background: #2d2c33;
        }

        #content {
            min-height: 500px;
        }
    `]
})
export class AppComponent {

}
