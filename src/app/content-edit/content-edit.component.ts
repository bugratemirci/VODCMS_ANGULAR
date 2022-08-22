import { Component, OnInit } from '@angular/core';
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
  selectedLicences = new FormControl([0]);
  selectedStatus = new FormControl();

  currentContent: Content

  ngOnInit(): void {
    this.contentService.resetCurrentContent()
    this.licenceService.resetLicence()
    this.licenceService.getAllLicence().subscribe(data => {
      this.licences = data;
    })
    this.contentService.getCurrentContent().subscribe(data => {
      this.currentContent = data
      this.selectedStatus.setValue(data.contentStatus)
      let _licenceId: number[] = []
      data.contentLicences.map(item => {
        _licenceId.push(item.id);

      })
      this.selectedLicences.setValue(_licenceId)
    })
  }
  saveContent() {
    let licenceId = this.selectedLicences.value

    let obj = {
      "content": {
        contentName: this.currentContent.contentName,
        contentDescription: this.currentContent.contentDescription,
        id: this.currentContent.id != -1 ? this.currentContent.id : null,
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
    console.log(obj);

    if (this.currentContent.id == -1 || this.currentContent.id == undefined) {
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
    this.selectedLicences.setValue([])
  }
}
