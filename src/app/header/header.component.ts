import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/service/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userrole: string;

  constructor() { }

  ngOnInit() {
    this.userrole = StorageService.getItem('role');
  }

  logout(){
    StorageService.clearAll();
    location.reload();
}

}
