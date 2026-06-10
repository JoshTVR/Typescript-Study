import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GuardsCheckEnd } from '@angular/router';

@Component({
  selector: 'app-ngif',
  imports: [CommonModule, FormsModule],
  templateUrl: './ngif.html',
  styleUrl: './ngif.css',
})
export class Ngif {

  /*
  greetings : string = "Hello, what yall doing??";

  greetingInput : string = "Hello";

  showGreetings : boolean = true;
  counter : number = 0;
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log("Hello, the page have just been initialized"); // this line, will only be excecuted at the beggining
    console.log(this.greetings);
    this.methodName();
  }

  methodName(){

    console.log("Hello from another method"); // A method can call another methods
  }

  onBTNClick(){
    this.counter++;
    this.greetings = `Adios ${this.counter}`
    this.showGreetings = !this.showGreetings;
  }

  Show(){
    this.showGreetings = true;
  }

  UnShow(){
    this.showGreetings = false;
  }
    */

  boolean_one : boolean = true;
  firstStep : string = "Text below";
  incremental : number = 0;
  userInput : string = "";
  incremental_2 : number = 0;
  isEvenOrOdd : string = "ola";

  Module_1() {
    console.log(this.boolean_one);
    this.boolean_one = !this.boolean_one;
  }

  Module_11(){
    this.boolean_one = true;
  }

  Module_12(){
    this.boolean_one = false;
  }

  Module_2(){
    this.incremental++;
  }
  Module_3(){
    this.incremental--;
  }
  Module_4(){
    this.incremental_2++;
    if (this.incremental_2 % 2 === 0) {
      this.isEvenOrOdd = "This number is Even";
    } else {
      this.isEvenOrOdd = "This number is Odd";
    }
  }
  Module_5(){
    this.incremental_2--;
    if (this.incremental_2 % 2 === 0) {
      this.isEvenOrOdd = "This number is Even";
    } else {
      this.isEvenOrOdd = "This number is Odd";
    }
  }
  module_6(){
    if (this.incremental_2 % 0) {
      this.isEvenOrOdd = "This number is Even";
    } else {
      this.isEvenOrOdd = "This number is Odd";
    }
    return this.isEvenOrOdd;
  }
}
