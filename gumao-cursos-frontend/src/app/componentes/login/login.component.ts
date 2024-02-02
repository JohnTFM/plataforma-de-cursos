import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public email: string = "foo@bar.com"

  public senha: string = ""

  alertar(msg:string){
    alert(msg)
  }

}
