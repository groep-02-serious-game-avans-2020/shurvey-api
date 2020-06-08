import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Survey } from './schemas/survey.schema';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class SurveyService {
  constructor(
    @InjectModel(Survey.name) private readonly survey: ReturnModelType<typeof Survey>,
  ) {}

  async getById(id: Survey["id"]) {
    const survey = await this.survey.findById(id);

    return survey ? new Survey(survey.toObject()) : undefined;
  }
}
