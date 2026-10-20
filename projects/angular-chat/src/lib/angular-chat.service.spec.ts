import { TestBed } from '@angular/core/testing';

import { AngularChatService } from './angular-chat.service';

describe('AngularChatService', () => {
  let service: AngularChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
