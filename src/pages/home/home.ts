import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notes: string[];
  errorMessage: string;
  descending: boolean = false;
  order: number;
  column: string = 'title';

  constructor(public navCtrl: NavController, public rest: RestApiProvider) { }

  getNotes() {
    this.rest.getNotes()
      .subscribe(
        notes => this.notes = notes,
        error => this.errorMessage = <any>error);
  }

  ionViewDidLoad() {
    this.getNotes();
  }

  sort() {
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

}
