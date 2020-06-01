import * as mongoose from 'mongoose';
import { prop, buildSchema, getModelForClass } from '@typegoose/typegoose';

export class QR {
  constructor(props: Partial<QR>) {
    Object.assign(this, props);
  }

  get id() {
    return this._id.toHexString();
  }

  _id: mongoose.Types.ObjectId;

  @prop({ required: true, unique: true, index: true })
  code: string;
}

export const QRModel = getModelForClass(QR);
export const QRSchema = buildSchema(QR, {
  toJSON: { versionKey: false },
  toObject: {
    versionKey: false,
  },
});
