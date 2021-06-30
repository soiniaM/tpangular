import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-sale-ad-list',
  templateUrl: './sale-ad-list.component.html',
  styleUrls: ['./sale-ad-list.component.scss']
})
export class SaleAdListComponent implements OnInit {

  constructor(
    private data: DataService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.data.changeTitle("Sale Ad List")
    this.titleService.setTitle("Sale Ad List Page")
  }

}
