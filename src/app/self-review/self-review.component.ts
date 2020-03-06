import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CompetencyService } from '../competency-service';
import { SelfReview } from './self-review.model';
import { CompetencyLevel } from '../competency-level.model';
import { NgForm } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-self-review',
  templateUrl: './self-review.component.html',
  styleUrls: ['./self-review.component.css']
})
export class SelfReviewComponent implements OnInit {
  @ViewChild("modalDelete") modalDelete: ElementRef;

  years: number[] = new Array<number>();
  selectedYear: number;
  selfReviews: SelfReview[];
  buttonState="";
  
  constructor(private competencyService: CompetencyService) { }

  ngOnInit(): void {
    this.competencyService.getYears().subscribe((result)=> {
      this.years = result;
    });
    this.selectedYear = new Date().getFullYear();
    this.competencyService.getSelfReviews(this.selectedYear).
      subscribe(result => this.selfReviews = result);
  }

  onChangeYear(event: any) {
    this.selectedYear = event.target.value;
    console.log(this.selectedYear);
    this.competencyService.getSelfReviews(this.selectedYear).
      subscribe(result => this.selfReviews = result);
  }

  isYearSelected(year: number): boolean {
    return year == this.selectedYear;
  }

  onSave(event: Event) {
    this.buttonState = "saving";
    setTimeout(() => {
      this.selfReviews.forEach(sr => {
        sr.isSaved=sr.isSelected;
        this.buttonState = "";
      });  
    }, 600);
  }

  invalid() {
    const anyEmpyClaim = this.selfReviews.find(sr => {
      return !sr.selfClaim;
    });
    const anyItemSelected = this.selfReviews.find(sr => {
      return sr.isSelected;
    });

    return anyEmpyClaim || !anyItemSelected || this.buttonState == "saving";
  }

  onSelfReviewDeleted(selfReview) {
    this.competencyService.getSelfReviews(this.selectedYear).
      subscribe(result => this.selfReviews.splice(
        this.selfReviews.indexOf(selfReview),
        1
      ));
  }

  deleteSelfReview() {
    $(this.modalDelete.nativeElement).modal('hide');
    let deletedSelfReview = this.selfReviews.find(item=>item.markAsDeleted==true);
    if(deletedSelfReview){
      this.selfReviews.splice(
        this.selfReviews.indexOf(deletedSelfReview),
        1
      );
      
      this.competencyService.removeSelfReview(deletedSelfReview).subscribe(sr=>{
        deletedSelfReview.markAsDeleted=false;
      });
    }
  }
}