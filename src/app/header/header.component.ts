import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() changeComponent = new EventEmitter<string>()
  changeCurrentComponent(component: string){
    this.changeComponent.emit(component);
  }
}
