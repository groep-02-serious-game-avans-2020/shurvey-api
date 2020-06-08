import {Controller, UseGuards, Post, BadRequestException } from '@nestjs/common';
import { QRService } from './qr.service';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from './user.decorator';
import { User } from './schemas/user.schema';
import { UserService } from "../user/user.service";

@Controller('qr')
export class QRController {
  constructor(
    private readonly qrService: QRService,
    private readonly userService: UserService
  ) {}

  @UseGuards(AuthGuard())
  @Post()
  async scan(@CurrentUser() currentUser: User, code: string) {
    const qr = await this.qrService.getByCode(code);
    const user = await this.userService.getById(currentUser.id);

    if (qr === null) {
      throw new BadRequestException('Invalid code');
    }

    user.scannedQrs.push(qr.id);
  }
}
