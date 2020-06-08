import * as mongoose from 'mongoose';
import { buildSchema, getModelForClass } from '@typegoose/typegoose';

export class Survey {
  constructor(props: Partial<Survey>) {
    Object.assign(this, props);
  }

  get id() {
    return this._id.toHexString();
  }

  _id: mongoose.Types.ObjectId;

  title: string;

  questions: [{ type: mongoose.Types.ObjectId, ref: 'Question' }];

  answers: [{ type: mongoose.Types.ObjectId, ref: 'Answer' }];
}

export class Question {
  constructor(props: Partial<Question>) {
    Object.assign(this, props);
  }

  get id() {
    return this._id.toHexString();
  }

  _id: mongoose.Types.ObjectId;

  questionNumber: bigint;

  question: string;

  textAnswer = false;
}

export class Answer {
  constructor(props: Partial<Answer>) {
    Object.assign(this, props);
  }

  get id() {
    return this._id.toHexString();
  }

  _id: mongoose.Types.ObjectId;

  questionNumber: bigint;

  numberAnswer: bigint;

  textAnswer: string;
}

export const SurveyModel = getModelForClass(Survey);
export const SurveySchema = buildSchema(Survey, {
  toJSON: { versionKey: false },
  toObject: {
    versionKey: false,
  },
});

export const QuestionModel = getModelForClass(Question);
export const QuestionSchema = buildSchema(Survey, {
  toJSON: { versionKey: false },
  toObject: {
    versionKey: false,
  },
});

export const AnswerModel = getModelForClass(Answer);
export const AnswerSchema = buildSchema(Survey, {
  toJSON: { versionKey: false },
  toObject: {
    versionKey: false,
  },
});
