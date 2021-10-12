import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from './calculadora.service';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  number:string = "";
  message:string = "";

  constructor(private calculatorService:CalculadoraService) { }

  ngOnInit(): void {
  }

  calculate(data: String)
  {
    this.number = this.number + data;
  }

  clean()
  {
    this.number = "";
    this.message = "";
  }

  undo()
  {
    this.number = this.number.substr(0,this.number.length-1);
  }


  evalExpr()
  {
    try{
      this.message = "";
      this.number = eval(this.number);
    }
    catch(Error){this.message = "Syntax Error"}
    
  }

}
