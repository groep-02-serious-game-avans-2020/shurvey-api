import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { QRModule } from "./qr/qr.module";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/shurvey'),
    UserModule,
    AuthModule,
    QRModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
