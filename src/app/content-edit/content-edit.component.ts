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
  selectedLicences = new FormControl(['']);
  selectedStatus = new FormControl('');
  contentName: "";
  contentStatus: "";
  contentVideoUrl: "";
  contentPosterUrl: "";
  contentDescription: "";


  ngOnInit(): void {
    this.licenceService.getAllLicence().subscribe(data => {
      this.licences = data;
    })
  }
  addContent() {


    let licenceId = this.selectedLicences.value

    let obj = {
      "content": {
        contentName: this.contentName,
        contentStatus: this.selectedStatus.value,
        contentVideoUrl: this.contentVideoUrl,
        contentPosterUrl: this.contentPosterUrl,
        contentDescription: this.contentDescription
      },
      "licence": [{}]
    }
    obj.licence.pop()
    licenceId?.map(id => {
      obj.licence.push({ id: id })
    })

    this.contentService.addToDB(obj.content, obj.licence).subscribe(data => {
      console.log(data);
    });
  }

}
