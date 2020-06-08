import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { QRModule } from "./qr/qr.module";
import { SurveyModule } from "./survey/survey.module";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://seriousgame:1FLI4aDef1Xx6ABL@cluster0-upm9w.mongodb.net/test?retryWrites=true&w=majority'),
    UserModule,
    AuthModule,
    QRModule,
    SurveyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
