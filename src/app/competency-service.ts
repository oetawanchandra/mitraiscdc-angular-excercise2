import { Injectable } from '@angular/core';
import { Competency } from './competency';
import { Observable, of } from 'rxjs';
import { CompetencySet } from './competency-set/competency-set.model';
import { SelfReview } from './self-review/self-review.model';
import { CompetencyLevel } from './competency-level.model';

export class CompetencyService {
  private competencies: Competency[] = [
    new Competency("SWEBOKCON","Software Construction", 1),
    new Competency("SWEBOKREQ","Software Requirement", 2),
    new Competency("SWEBOKSCM","Software Configuration Management", 3),
    new Competency("SWEBOKMTN","Software Maintenance", 4)
  ];

  private myCompetencySets: CompetencySet[] = new Array<CompetencySet>();
  selfReviews: SelfReview[] = new Array<SelfReview>();
  private currentYear = new Date().getFullYear();
  private selfReviewForDelete: SelfReview;

  constructor() { }

  getCompetencies(): Observable<Competency[]> {
    return of(this.competencies)
  }

  getCompetencySets(year: number): Observable<CompetencySet[]> {
    return of(this.getCompetencySetsSync(year));
  }

  getCompetencySetsSync(year: number){
    this.competencies.forEach(com => {
      if(!this.myCompetencySets.find(cs=>cs.year === year && cs.competency.id === com.id)){
        this.myCompetencySets.push(new CompetencySet(year, com, false));
      }
    });

    const result = [];
    this.myCompetencySets.forEach(cs => {
      if(cs.year === year){
        result.push(cs);
      }
    });

    return result;
  }

  getSelfReviews(year: number) {
    let result = new Array<SelfReview>();
    this.getCompetencySetsSync(this.currentYear).forEach((cs) => {
      let selfReview = this.selfReviews.find((sr) => {
        return sr.id== year.toString() + "_" + cs.competency.id;
      });
      if(!selfReview) {
        if(cs.claimable) {
          selfReview = new SelfReview(year, cs, CompetencyLevel.Entry, "");
          this.selfReviews.push(selfReview);
          result.push(selfReview);
        }
      } else {
        result.push(selfReview);
      }
    });

    return of(result);
  }

  getYears(): Observable<number[]> {
    const result = [];
    const currentYear = new Date().getFullYear();
    for(var year = currentYear; year>=currentYear-3; year--){
      result.push(year);
    }

    return of(result);
  }

  removeSelfReview(selfReview: SelfReview): Observable<SelfReview> {
    this.selfReviews.splice(this.selfReviews.indexOf(selfReview),1);
    return of(selfReview);
  }

  addNewCompetency(code: string, name: string){
    const competencySet = new Competency(code,name, this.competencies.length+1)
    this.competencies.push(competencySet);
    const year = new Date().getFullYear();
    this.myCompetencySets.push(new CompetencySet(year, competencySet, false));
  }
}