import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  private search_result: string;

  constructor(private _route: ActivatedRoute) {
    this.search_result = this._route.snapshot.params['param1'];
  }

}
