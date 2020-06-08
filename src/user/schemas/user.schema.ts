import * as mongoose from 'mongoose';
import { prop, buildSchema, getModelForClass } from '@typegoose/typegoose';

export class User {
  constructor(props: Partial<User>) {
    Object.assign(this, props);
  }

  get id() {
    return this._id.toHexString();
  }

  _id: mongoose.Types.ObjectId;

  @prop({ required: true, unique: true, index: true })
  email: string;

  @prop({ required: true })
  displayName: string;

  @prop({ required: true })
  password: string;

  scannedQrs: [{ type: mongoose.Types.ObjectId, ref: 'QR' }]
}

export const UserModel = getModelForClass(User);
export const UserSchema = buildSchema(User, {
  toJSON: { versionKey: false },
  toObject: {
    versionKey: false,
  },
});
