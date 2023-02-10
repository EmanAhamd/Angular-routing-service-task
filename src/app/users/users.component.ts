import { Component } from '@angular/core';
import { AllUseresService } from '../all-useres.service';
AllUseresService

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users:any[] = [];

  constructor(private useresService:AllUseresService){
    useresService.getAllUsers().subscribe((data)=>{
      this.users = data;
      console.log(data);
    })
  }


}
