import { Component } from '@angular/core';



@Component({
    selector: 'app-counter',
    template: `<h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reiniciar()">Reiniciar</button>
    <button (click)="increaseBy(-1)">-1</button>`
})
export class CounterCompenent{
    
    public counter: number = 10;
  
    increaseBy(value: number):void {
      this.counter += value;
    
    }
  reiniciar(){
    this.counter = 10;
  }
}