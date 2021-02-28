import { Component, OnInit } from '@angular/core';
import { GraphqlService } from './graphql.service';

@Component({
  selector: 'apollo-angular-with-jest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'apollo-angular';
  constructor(private graphqlService:GraphqlService){}
  ngOnInit(){
    this.graphqlService.getData().subscribe(e=>{
      console.log('get graphql data')
      console.log(e)
    })
  }
}
