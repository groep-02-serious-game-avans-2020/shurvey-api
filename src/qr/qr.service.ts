import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { QR } from './schemas/qr.schema';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class QRService {
  constructor(
    @InjectModel(QR.name) private readonly qr: ReturnModelType<typeof QR>,
  ) {}

  async getByCode(code: QR['code']) {
    const qr = await this.qr.findOne({ code });

    return qr ? new QR(qr.toObject()) : null;
  }
}
