import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  login: FormGroup|any;
  constructor(){ }
  ngOnInit(): void {
    this.login = new FormGroup({
      'email' : new FormControl(),
      'password' : new FormControl() 
    })
  }
  public logindata(login: FormGroup){
    console.log(this.login.value);
  }
  url = "/assets/image1.png"
}
