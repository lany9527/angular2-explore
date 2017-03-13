import { Component, ElementRef, Input, OnInit } from '@angular/core';
import * as _ from 'underscore';
import * as $ from 'jquery'

import { ModalService } from '../../services/modal/modal.service'

@Component({
  selector: 'app-modal-box',
  template: '<ng-content></ng-content>'
  // template: '<div></div>'
})
export class ModalBoxComponent implements OnInit {

  @Input() id: string;
  private element: JQuery;
  constructor(
    private el: ElementRef,
    private modalService: ModalService
  ) {
    this.element = $(el.nativeElement)
  }

  ngOnInit(): void {
    let modal = this;
    if (!this.id) {
      console.log("modal id not found");
      return;
    }

    this.element.appendTo('body');

    this.element.on("click", function (e: any) {
      let target = $(e.target);
      if (!target.closest('.modal-body').length) {
        modal.close();
      }
    });
    this.modalService.addModal(this);
  }
  ngOnDestroy(): void {
    this.modalService.removeModal(this.id);
    this.element.remove();
  }
  open(): void {
    this.element.show();
    $('body').addClass('modal-open');
  }
  close(): void {
    this.element.hide();
    $('body').removeClass('modal-open');
  }

}
