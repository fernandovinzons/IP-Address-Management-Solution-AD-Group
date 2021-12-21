import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { InternetProtocolModel } from 'src/app/models/internet-protocol.model';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-internet-protocol',
  templateUrl: './internet-protocol.component.html',
  styleUrls: ['./internet-protocol.component.scss']
})
export class InternetProtocolComponent implements OnInit {

  closeResult = '';
  ip_list: InternetProtocolModel[] = [];
  selectedItem: any;

  form = new FormGroup({
      ipaddress: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
  });

  updateForm = new FormGroup({
    id: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
  });

  public get token() : string | null {
    const token = localStorage.getItem('ipms_auth');
    return token;
  }

  headers = { 'Accept' : 'application/json',
              'Authorization' : 'Bearer ' + this.token };

  constructor(
    private apiService: ApiService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loadTableData();
  }

  submitForm() {
    if (this.form.invalid) { return; }

    this.apiService.addIP(this.form.get('ipaddress')?.value, this.form.get('description')?.value, this.headers)
    .subscribe((response) => {
        this.loadTableData();
    });
  }

  submitUpdateForm() {
    if (this.updateForm.invalid) { return; }

    this.apiService.updateIP(this.updateForm.get('description')?.value, this.updateForm.get('id')?.value, this.headers)
    .subscribe((response) => {
        this.loadTableData();
    });
  }

  loadTableData(){
    this.apiService.getIPList(this.headers)
    .subscribe((response) => {
      if(response){
        this.ip_list = response ? response : [];
      }
    });
  }

  onOpenModal(data: any){
    this.selectedItem = data;
  }

  open(content: any, data: any) {

    this.updateForm.controls['id'].setValue(data.id);
    this.updateForm.controls['description'].setValue(data.description);

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
