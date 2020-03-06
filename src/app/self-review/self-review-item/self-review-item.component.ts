import { Component, OnInit, Input, Output } from '@angular/core';
import { SelfReview } from '../self-review.model';
import { CompetencyLevel } from '../../competency-level.model';
import { CompetencyService } from 'src/app/competency-service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-self-review-item',
  templateUrl: './self-review-item.component.html',
  styleUrls: ['./self-review-item.component.css']
})
export class SelfReviewItemComponent implements OnInit {
  @Input() selfReview: SelfReview;
  @Output() onDeleted: EventEmitter<SelfReview>  = new EventEmitter<SelfReview>();
  levels = [
    CompetencyLevel.Entry,
    CompetencyLevel.Working,
    CompetencyLevel.Good,
    CompetencyLevel.Export
  ];
  constructor(private compService: CompetencyService) { }

  ngOnInit(): void {

  }

  onDelete() {
    let selfReview = this.compService.selfReviews.find(sr => sr.id == this.selfReview.id);
    if(selfReview) {
      this.compService.removeSelfReview(selfReview).subscribe((sr)=>{
        this.onDeleted.emit(sr);
      });
    }
  }

  markAsDeleted() {
    this.selfReview.markAsDeleted = true;
    console.log(this.selfReview);
    return true;
  }
}