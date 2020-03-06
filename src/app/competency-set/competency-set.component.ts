import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CompetencySet } from './competency-set.model';
import { CompetencyService } from '../competency-service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-competency-set',
  templateUrl: './competency-set.component.html',
  styleUrls: ['./competency-set.component.css']
})
export class CompetencySetComponent implements OnInit {
  myCompetencySets: CompetencySet[];
  year: number;
  @ViewChild("frm") formNew: NgForm;
  enableAddNew=false;

  constructor(private competencyService: CompetencyService) { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
    this.competencyService.getCompetencySets(this.year).subscribe((result) => {
      this.myCompetencySets = result;
    });
  }

  onAddNew(){
    this.competencyService.addNewCompetency(
      this.formNew.form.value.competencyCode,
      this.formNew.form.value.competencyName);
    this.competencyService.getCompetencySets(this.year).subscribe((result) => {
        this.myCompetencySets = result;
    });
    this.onCancel();
  }

  onCancel(){
    this.enableAddNew=false;
  }

  onEnableAddNew(){
    this.enableAddNew=true;
  }
}