import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
export const GRAPHQL_QUERY=gql`
{
  rates(currency: "USD") {
    currency
    rate
  }
}
`;
@Injectable({
  providedIn: 'root',
})  
export class GraphqlService {
  constructor(private apollo: Apollo) {}
  getData() {
    return this.apollo
      .watchQuery({
        query: GRAPHQL_QUERY
      })
      .valueChanges
  }
}
