import { Controller, Get } from '@nestjs/common';
import { MailappService } from './mailapp.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class MailappController {
  constructor(private readonly mailappService: MailappService) {}

  @EventPattern('new_email')
  async handleUserCreated(data: any) {
    // business logic
    console.log('Eventro entrante: ', data);
  }
}
