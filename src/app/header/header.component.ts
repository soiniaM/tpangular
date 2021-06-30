import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title:string = "Title"

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentTitle.subscribe(title => this.title = title)
  }

}
