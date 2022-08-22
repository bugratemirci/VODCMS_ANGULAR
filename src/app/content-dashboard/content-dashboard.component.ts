import { Component, OnInit } from '@angular/core';
import { Content } from '../content/content';
import { Licence } from '../models/licence';
import { ContentsService } from '../services/contents.service';
@Component({
  selector: 'app-content-dashboard',
  templateUrl: './content-dashboard.component.html',
  styleUrls: ['./content-dashboard.component.css'],
})
export class ContentDashboardComponent implements OnInit {

  constructor(private contentService: ContentsService) { }
  contents: Content[] = []
  ngOnInit(): void {

    this.contentService.getContentDTOS().subscribe(data => {
      data.map(item => {
        let _content = {
          ...item.content,
          "contentLicences": item.licences
        }
        this.contents.push(_content);
      })

    })

  }

  onDeleteClick(id: number) {
    this.contentService.deleteContent(id).subscribe(data => {
      window.location.reload();
    })
  }
  onEditClick(content: Content) {


    this.contentService.setCurrentContent(content);
    this.contentService.getCurrentContent().subscribe(data => {

    })
  }

}
