import * as mongoose from 'mongoose';
import { prop } from 'typegoose';

export class User {
  _id: mongoose.Schema.Types.ObjectId;

  @prop({ required: true, unique: true, index: true })
  email: string;

  @prop({ required: true })
  displayName: string;

  @prop({ required: true })
  password: string;
}
