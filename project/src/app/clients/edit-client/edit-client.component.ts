import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  constructor (private router: Router){

  }

  ngOnInit(): void {
  }
  Contato(){
    this.router.navigate(["contato"]);
  }
}
