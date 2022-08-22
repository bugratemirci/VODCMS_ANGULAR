import { Component, OnInit, ViewChild } from '@angular/core';
import { Licence } from '../models/licence';
import { LicencesService } from '../services/licences.service';
import { FormControl } from '@angular/forms';
import { Content } from '../content/content';
import { ContentsService } from '../services/contents.service';

@Component({
  selector: 'app-content-edit',
  templateUrl: './content-edit.component.html',
  styleUrls: ['./content-edit.component.css']
})
export class ContentEditComponent implements OnInit {

  constructor(private licenceService: LicencesService, private contentService: ContentsService) { }
  licences: Licence[]
  status: String[] = ['InProgress', 'Published']
  selectedLicences = new FormControl([]);
  selectedStatus = new FormControl();

  currentContent: Content

  ngOnInit(): void {
    this.licenceService.getAllLicence().subscribe(data => {
      this.licences = data;
    })
    this.contentService.getCurrentContent().subscribe(data => {
      this.currentContent = data
    })
  }
  addContent() {
    let licenceId = this.selectedLicences.value

    this.currentContent.contentDescription
    let obj = {
      "content": {
        contentName: this.currentContent.contentName,
        contentDescription: this.currentContent.contentDescription,
        id: this.currentContent.id,
        contentPosterUrl: this.currentContent.contentPosterUrl,
        contentVideoUrl: this.currentContent.contentVideoUrl,
        contentStatus: this.selectedStatus.value
      },
      "licence": [{}]
    }
    obj.licence.pop()
    licenceId?.map(id => {
      obj.licence.push({ id: id })
    })
    if (!this.currentContent.id || this.currentContent.id == -1) {
      this.contentService.addToDB(obj.content, obj.licence).subscribe(data => {
        window.location.reload();
      });
    }
    else {
      this.contentService.updateDB(obj.content, obj.licence).subscribe(data => {
        window.location.reload();
      });
    }

  }
  resetContent() {
    this.contentService.resetCurrentContent()
  }
}
