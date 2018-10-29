import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
    <div id="footer">
        Footer
    </div>
    `,
    styles: [`
        #footer{
            background: black;
            text-align: center;
            height: 65px;
            width: 100%;
            line-height: 30px;
            font-size: 0.8em;
        }
    `]
})
export class FooterComponent {

}