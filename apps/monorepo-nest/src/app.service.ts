import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SendEmailDTO } from './dto/send-email.dto';

@Injectable()
export class AppService {
  constructor(@Inject('MAIL_SERVICE') private clientMail: ClientProxy) {}

  newMail(body: SendEmailDTO) {
    const { email, name } = body;
    const mailContent = {
      email,
      name,
    };

    this.clientMail.emit('new_email', mailContent);
    return 'send_queu';
  }
}
