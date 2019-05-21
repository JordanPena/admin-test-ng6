import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public modalRef: BsModalRef;

  @ViewChild('templateModal')
  private templateModalRef: TemplateRef<any>;

  @Input()
  private num: number;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.modalRef = this.modalService.show(this.templateModalRef, { backdrop: 'static', keyboard: false });
    alert('param: ' + this.num)
  }

}
