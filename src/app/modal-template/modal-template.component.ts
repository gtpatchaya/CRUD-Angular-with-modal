import { Component, OnInit, Input } from '@angular/core';

import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.scss']
})
export class ModalTemplateComponent implements OnInit {

  @Input() my_modal_title
  @Input() my_modal_content
  @Input() public countries_id
  @Input() public countries


  id: number = null;
  areaname: string = null;
  areasize: number = null;
  population: number = null;

  txt_edit = "Edit Country"

  txt_create = "Create Country"

  text_titlename = null


  constructor(public modalService: NgbActiveModal) { }
  ngOnInit() {
    
    if (this.countries.length > 0 && this.countries_id !== null) { // edit data
      var select_country = this.countries.find(x => x.id === this.countries_id);
      this.areaname = select_country.name
      this.areasize = select_country.area
      this.population = select_country.population
      this.id = select_country.id
      this.text_titlename = this.txt_edit
    } else // create 
    {
      console.log("eslse")
      this.text_titlename = this.txt_create
    }

  }

  close() {
    this.modalService.close();
  }

  save(id: number) {
    console.log(id)

    let count_country = this.countries.length
    
    if (id !== null) // eidt
    {
      for (var item in this.countries) {
        if (this.countries[item].id == id) {
          console.log('edit')
          this.countries.splice(this.countries.findIndex(e => e.id === id),1);      
          this.countries.push({ id: id, flag: null, area: this.areasize , population: this.population, name: this.areaname })  
          this.close()
          break;
        }

      }
    } else { // crate 
      if(this.areasize !== null && this.population !== null &&  this.areaname !==null){
        
        let id_new = this.findMaxId() + 1
        this.countries.push({ id: id_new, flag: null, area: this.areasize , population: this.population, name: this.areaname })     
        this.close()
      }
    
    }
  }

  Createdata() {

  }

  findMaxId() {
    let max = 0

    

    if(this.countries.length > 0){
      max = this.countries[0].id
      for (var item in this.countries) {
        if (this.countries[item].id > max) {
          max = this.countries[item].id
        }
      }
    }
    
    return max
   
  }
}

