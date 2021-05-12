import { Component, OnInit } from '@angular/core';
import * as internal from 'assert';
import { ModalTemplateComponent } from '../modal-template/modal-template.component'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

interface Country {
  id: number,
  name: string;
  area: number;
  population: number;
}

var COUNTRIES: Country[] = [
  {
    id : 1,
    name: 'Russia',
    area: 17075200,
    population: 146989754,
    
  },
  {
    id : 2,
    name: 'Canada',
    area: 9976140,
    population: 36624199
  },
  {
    id : 3,
    name: 'United States',
    area: 9629091,
    population: 324459463
  },
  {
    id : 4,
    name: 'China',
    area: 9596960,
    population: 1409517397
  }
];


@Component({
  selector: 'app-test-ng-bootstap',
  templateUrl: './test-ng-bootstap.component.html',
  styleUrls: ['./test-ng-bootstap.component.scss']
})
export class TestNgBootstapComponent implements OnInit {

  countries = COUNTRIES;
  closeResult = '';
  constructor(private modalService: NgbModal) { }


  ngOnInit() {
  }

  create(){
      const modalRef = this.modalService.open(ModalTemplateComponent);
      modalRef.componentInstance.countries_id = null;
      modalRef.componentInstance.countries = this.countries;
  }



  editNation(id : number) {

    console.log(name);
    const modalRef = this.modalService.open(ModalTemplateComponent);
    modalRef.componentInstance.countries_id = id;
    modalRef.componentInstance.countries = this.countries;
  }

  deleteNation(id : number) {
    for(var item in this.countries) {
      if(this.countries[item].id == id){
        this.countries.splice(this.countries.findIndex(e => e.id === id),1);

      }
    }
  }


}
