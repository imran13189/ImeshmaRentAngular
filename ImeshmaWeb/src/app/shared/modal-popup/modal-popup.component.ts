import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})

export class ModalPopupComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbActiveModal) { }



  ngOnInit() {
  }

}



