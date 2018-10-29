import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <div id="header">
            <nav role="navigation" class="main-nav">
                <ul class="nav-group nav-group--top-bar">
                    <li><mat-icon>assignment</mat-icon><span>Life Points</span></li>
                    <li><mat-icon>assignment_late</mat-icon><span>Challenges</span></li>
                    <li><mat-icon>build</mat-icon><span>Admin</span></li>
                </ul>
            </nav>
        </div>
    `,
    styles: [`
        #header {
            background: black;
            transform: all 0.4s ease-in;
            height: 50px;
            font-size: 18px;
            width: 100%;
        }
        
        nav {
            display: inline-block;
            width: 100%;
            height: 100%;
        }
        
        nav > ul {
            text-align: center;
            font-size: 1em;
            transition: .2s font-size ease-in;
            height: 100%;
        }
        
        nav > ul > li {
            display: inline-block;
            cursor: pointer;
            padding-left: 15px;
        }
        
        a {
            padding: 1em 0.75em;
        }
        
        li > a {
            color: white;
            padding: 1em 0.75em;
            text-decoration: none;
        }
        
        span {
            opacity: 0;
            display: none;
            transition: .2s opacity ease-in;
        }
        
        @media screen and (min-width: 43.75em){
            a { padding: 1em 1em; }
            nav > ul { font-size: 1em; }
            span {
                display: inherit;
                opacity: 1;
            }
            #header {
                height: 65px;
            }
        }
        @media screen and (min-width: 60em){
            a { padding: 1em 1.5em; }
            nav > ul { font-size: 1.25em; }
        }
        
        .mat-icon {
            vertical-align: middle;
        }
    `]
})
export class HeaderComponent {

}