import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SurveyService } from "./survey.service";
import { Survey, SurveySchema } from "./schemas/survey.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Survey.name, schema: SurveySchema }]),
  ],
  providers: [SurveyService],
  exports: [SurveyService],
})
export class SurveyModule {}