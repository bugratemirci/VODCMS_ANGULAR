import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { Content } from './content';
import { ContentsService } from '../services/contents.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  constructor(private alertifyService: AlertifyService, private contentService: ContentsService) { }

  title = "İçerik Listesi";
  filterText: string = "";

  contents: Content[] = [];

  ngOnInit(): void {
    this.contentService.getProducts().subscribe(data => {
      this.contents = data;
    })
  }
  goToDetail(content: Content) {
    this.alertifyService.success(content.contentName);

  }
}
