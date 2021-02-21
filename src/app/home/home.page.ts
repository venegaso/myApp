import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  display = 0;
  save = 0;
  memory = [];
  operator = '';

  constructor() {}

  num(n){
    this.memory.push(n);
    this.display = Number(this.memory.join(''));
  }

  clear(){
    this.display = 0;
    this.memory = [];
  }

  operation(op){
    this.save = this.display;
    this.memory = [];
    this.operator = op;
  }

  equals(){
    if(this.operator == '+'){
      this.display = this.save + this.display;
    }else if(this.operator == '-'){
      this.display = this.save - this.display;
    }
    else if(this.operator == 'x'){
      this.display = this.save * this.display;
    }
    else if(this.operator == '÷'){
      this.display = this.save / this.display;
    }
    else if(this.operator == 'x^y'){
      this.display = Math.pow(this.save,this.display);
    }
    else if(this.operator == 'π'){
      this.display = Math.PI;
    }
    else if(this.operator == 'Sin'){
      this.display =  Math.sin(this.display * Math.PI/180) + '°';
    }
    else if(this.operator == 'Cos'){
      this.display = Math.cos(this.display * Math.PI/180) + '°';
    }
    else if(this.operator == 'Tan'){
      this.display = Math.tan(this.display * Math.PI/180) + '°';
    }
  }

}