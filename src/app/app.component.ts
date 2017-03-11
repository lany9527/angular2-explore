import { Component } from '@angular/core';
import { PagerService } from './services/pager/pager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(
    private pagerService: PagerService
  ) {}
  allItems: any;
  ngOnInit() {
    // this.getList(1);
  }
  togglePage(page: number) {
    console.log("home get page:"+page)
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
