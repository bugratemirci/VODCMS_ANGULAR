import { Component, OnInit } from '@angular/core';
import { Content } from '../content/content';
import { ContentsService } from '../services/contents.service';
@Component({
  selector: 'app-content-dashboard',
  templateUrl: './content-dashboard.component.html',
  styleUrls: ['./content-dashboard.component.css']
})
export class ContentDashboardComponent implements OnInit {

  constructor(private contentService: ContentsService) { }
  contents: Content[]
  ngOnInit(): void {
    this.contentService.getProducts().subscribe(data => {
      this.contents = data;
    })
  }

  onDeleteClick(id: number) {
    this.contentService.deleteContent(id).subscribe(data => {
      console.log("Silme işlemi başarılı.");
    })
  }

}
