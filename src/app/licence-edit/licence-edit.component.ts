import { Component, OnInit } from '@angular/core';
import { Licence } from '../models/licence';
import { ContentsService } from '../services/contents.service';
import { LicencesService } from '../services/licences.service';
@Component({
  selector: 'app-licence-edit',
  templateUrl: './licence-edit.component.html',
  styleUrls: ['./licence-edit.component.css']
})
export class LicenceEditComponent implements OnInit {

  constructor(private licenceService: LicencesService, private contentService: ContentsService) { }
  licenceName = "";
  startTime: Date
  endTime: Date
  currentLicence: Licence

  myFilterStart = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  myFilterEnd = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  ngOnInit(): void {
    this.contentService.resetCurrentContent()
    this.licenceService.resetLicence()
    this.licenceService.getCurrentLicence().subscribe(data => {
      this.currentLicence = data
      this.startTime = data.startTime
      this.endTime = data.endTime
      console.log(this.currentLicence);

    })
  }

  saveLicence() {

    let obj = {
      "licenceName": this.currentLicence.licenceName,
      "startTime": this.startTime,
      "endTime": this.endTime,
      "id": this.currentLicence.id
    }
    console.log(obj);

    if (this.currentLicence.id == -1) {
      this.licenceService.addLicence(obj).subscribe(data => {
        window.location.reload();
      })
    }
    else {
      this.licenceService.updateLicence(obj).subscribe(data => {
        window.location.reload();
      })
    }
  }

  resetLicence() {
    this.licenceService.resetLicence();
  }
}
