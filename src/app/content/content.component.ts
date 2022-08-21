import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { Content } from './content';
import { ContentsService } from '../services/contents.service';
import { Store } from '@ngrx/store';
import { User } from '../login/user';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  constructor(private alertifyService: AlertifyService, private contentService: ContentsService, private store: Store<{ user: User }>) { }

  filterText: string = "";
  user: User
  contents: Content[] = [];

  ngOnInit(): void {
    this.contentService.getProducts().subscribe(data => {
      data.map(data => {
        if (data.contentStatus === "Published")
          this.contents.push(data)
      })
    })
  }
  goToDetail(content: Content) {
    this.alertifyService.success(content.contentName);

  }
}
