import { Component, OnInit } from '@angular/core';
import { Licence } from '../models/licence';
import { LicencesService } from '../services/licences.service';
@Component({
  selector: 'app-licence-edit',
  templateUrl: './licence-edit.component.html',
  styleUrls: ['./licence-edit.component.css']
})
export class LicenceEditComponent implements OnInit {

  constructor(private licenceService: LicencesService) { }
  licenceName: string;
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
    this.licenceService.getCurrentLicence().subscribe(data => {
      this.currentLicence = data
    })
  }
  addLicence() {

    let obj = {
      "licenceName": this.licenceName,
      "startTime": this.startTime.toISOString(),
      "endTime": this.endTime.toISOString()
    }
    console.log(obj);
    this.licenceService.addLicence(obj).subscribe(data => {
      console.log(data);
    })
  }
}
