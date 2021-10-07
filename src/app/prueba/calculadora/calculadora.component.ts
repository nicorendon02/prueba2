import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  number:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  calculate(data: String)
  {
    this.number = this.number + data;
  }

  clean()
  {
    this.number = "";
  }

  undo()
  {
    this.number = this.number.substr(0,this.number.length-1);
  }

  evalExpr()
  {
    this.number = eval(this.number);
  }

}
