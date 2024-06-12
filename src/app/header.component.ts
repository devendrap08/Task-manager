import { Component } from "@angular/core";  //imports the necessary libraries

@Component({                                // Decorator- Provides the metadata about component 
    selector:'app-header',                  //To use a component in another component's template, include the component's selector as an HTML tag.
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class Headercomponent
{
    
}