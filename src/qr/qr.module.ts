import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QR, QRSchema } from "./schemas/qr.schema";
import { QRController } from "./qr.controller";
import { QRService } from "./qr.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: QR.name, schema: QRSchema }]),
  ],
  controllers: [QRController],
  providers: [QRService],
  exports: [QRService],
})
export class QRModule {}
