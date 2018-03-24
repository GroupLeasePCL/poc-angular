import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdatedInfoComponent } from './updated-info/updated-info.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements OnInit {

  constructor(
    private modalService:NgbModal
  ) { }

  open(){
    const modalRef = this.modalService.open(UpdatedInfoComponent);
  }

  ngOnInit() {
  }

}
