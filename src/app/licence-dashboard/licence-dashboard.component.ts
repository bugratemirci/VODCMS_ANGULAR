import { Component, OnInit } from '@angular/core';
import { Licence } from '../models/licence';
import { LicencesService } from '../services/licences.service';

@Component({
  selector: 'app-licence-dashboard',
  templateUrl: './licence-dashboard.component.html',
  styleUrls: ['./licence-dashboard.component.css']
})
export class LicenceDashboardComponent implements OnInit {

  constructor(private licenceService: LicencesService) { }

  licences: Licence[]
  ngOnInit(): void {
    this.licenceService.getAllLicence().subscribe(data => {
      this.licences = data
    })
  }
  onDeleteClick(id: number) {
    this.licenceService.deleteLicence(id).subscribe(data => {
      window.location.reload();
    });
  }
  onEditClick(licence: Licence) {
    this.licenceService.setCurrentLicence(licence);
    this.licenceService.getCurrentLicence().subscribe(data => {
    })

  }

}
