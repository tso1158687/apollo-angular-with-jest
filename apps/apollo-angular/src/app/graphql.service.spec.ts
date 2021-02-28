import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';
import { TestBed } from '@angular/core/testing';

import { GraphqlService, GRAPHQL_QUERY } from './graphql.service';
import { Apollo } from 'apollo-angular';

describe('GraphqlService', () => {
  let controller: ApolloTestingController;
  let service: GraphqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
    });

    service = TestBed.inject(GraphqlService);
    controller = TestBed.inject(ApolloTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data from graphql', () => {
    service.getData().subscribe((data) => {
      console.log('1')
      expect(false).toBeTruthy()
      console.log('2')
      expect(1).toBe(2)
      console.log('3')
    });
    
    // copy from apollo-angular doc
    // https://apollo-angular.com/docs/development-and-testing/testing
    const op = controller.expectOne(GRAPHQL_QUERY);
    op.flush({
      data: {
        dog: {
          id: 0,
          name: 'Mr Apollo',
          breed: 'foo',
        },
      },
    });
    controller.verify();
  });
});
