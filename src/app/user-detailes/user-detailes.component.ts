import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllUseresService } from '../all-useres.service';



@Component({
  selector: 'app-user-detailes',
  templateUrl: './user-detailes.component.html',
  styleUrls: ['./user-detailes.component.css']
})
export class UserDetailesComponent {
  ID:any;
  userDetailis:any;

  constructor(private route:ActivatedRoute, private useresService:AllUseresService){
    
    this.ID= route.snapshot.paramMap.get('id');
    useresService.getUserDetailes(this.ID).subscribe((data)=>{
      this.userDetailis = data;
    })
  }
}
