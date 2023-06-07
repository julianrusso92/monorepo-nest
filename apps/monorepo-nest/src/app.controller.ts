import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SendEmailDTO } from './dto/send-email.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  sendEmail(@Body() sendEmailDto: SendEmailDTO): string {
    return this.appService.newMail(sendEmailDto);
  }
}
