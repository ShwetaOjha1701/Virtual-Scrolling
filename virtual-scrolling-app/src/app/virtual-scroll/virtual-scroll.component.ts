import { Component } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent {
  items :any= [];
  page = 0;
  pageSize = 10;

  constructor() {
    this.loadMoreData();
  }

  ngOnInit(): void {}

  loadMoreData() {
    const nextPageData = Array.from({ length: this.pageSize }).map((_, i) => ({
      user_id: `ID-${this.page * this.pageSize + i + 1}`,
      user_name: `User ${this.page * this.pageSize + i + 1}`,
      user_dob: `1990-01-01`,
      user_address: `Address ${this.page * this.pageSize + i + 1}`
    }));
    this.items = [...this.items, ...nextPageData];
    this.page++;
  }
}
