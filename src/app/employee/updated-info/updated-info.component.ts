import { Component, OnInit, Input, ViewEncapsulation, style } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-updated-info',
  templateUrl: './updated-info.component.html',
  styleUrls: ['./updated-info.component.scss']
})
export class UpdatedInfoComponent implements OnInit {

  closeResult: string;


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
