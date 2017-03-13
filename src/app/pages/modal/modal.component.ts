import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  private bodyText: string;
  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.bodyText = 'kksshcbxvc';
  }
  openModal(id: string) {
    this.modalService.openModal(id);
  }
  closeModal(id: string) {
    this.modalService.closeModal(id);
  }

}
