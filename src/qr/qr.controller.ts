import {Controller, UseGuards, Post, BadRequestException, Dependencies} from '@nestjs/common';
import { QRService } from './qr.service';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from "../user/user.service";
import { SurveyService } from "../survey/survey.service";
import { CurrentUser } from "../user/user.decorator";
import { User } from "../user/schemas/user.schema";

@Controller('qr')
@Dependencies(UserService, SurveyService)
export class QRController {
  constructor(
    private readonly qrService: QRService,
    private readonly userService: UserService,
    private readonly surveyService: SurveyService
  ) {}

  @UseGuards(AuthGuard())
  @Post()
  async scan(@CurrentUser() currentUser: User, code: string) {
    const qr = await this.qrService.getByCode(code);
    const user = await this.userService.getById(currentUser.id);

    if (qr === null) {
      throw new BadRequestException('Invalid code');
    }

    user.scannedQrs.push({
      type: qr._id,
      ref: "QR"
    });

    return await this.surveyService.getById(qr.survey.type.toString());
  }
}
