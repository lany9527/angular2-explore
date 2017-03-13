import { Injectable } from '@angular/core';
import * as _ from 'underscore';
@Injectable()
export class ModalService {
  private modals: any[] = [];
  constructor() { }

  addModal(modal: any) {
    // 把modal添加到激活的modal数组里面
    this.modals.push(modal);
  }
  removeModal(id: string) {
    // 把modal从激活的modal数组里面删除
    let modalToRemove = _.findWhere(this.modals, { id: id });
    this.modals = _.without(this.modals, modalToRemove);
  }
  openModal(id: string) {
    // 根据特定id打开modal
    let modal = _.findWhere(this.modals, { id: id });
    modal.open();
  }
  closeModal(id: string) {
    // 根据特定id关闭modal
    let modal = _.find(this.modals, { id: id });
    modal.close();
    // console.log(id, modal);
  }
}
