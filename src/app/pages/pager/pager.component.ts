import { Component, OnInit } from '@angular/core';
import { PagerService } from '../../services/pager/pager.service';
@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {
  allItems: any;
  constructor(
    private pagerService: PagerService
  ) { }

  ngOnInit() {
  }
  togglePage(page: number) {
    console.log("home get page:" + page)
    this.getList(page);
  }
  getList(page): Promise<any> {
    // console.log(page);
    return this.pagerService.getLists(page)
      .then(res => {
        console.log(res);
        this.allItems = res;
        // this.setPage(page);
      })
  }
}
