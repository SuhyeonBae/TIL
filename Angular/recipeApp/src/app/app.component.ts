import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipeApp';
  
  loadedMenu = 'recipe';

  onNavigate(menu: string){
    this.loadedMenu = menu;
  }
}
