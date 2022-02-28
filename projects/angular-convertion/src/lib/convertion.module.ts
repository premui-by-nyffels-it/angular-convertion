import { NgModule } from '@angular/core';
import { ConvertDateToDatePipe, ConvertDateToDateTimePipe, ConvertNumberToMoneyPipe, ConvertNumberToNumberPipe } from './pipes/convertion.pipe';

@NgModule({
  declarations: [ConvertDateToDatePipe, ConvertDateToDateTimePipe, ConvertNumberToNumberPipe, ConvertNumberToMoneyPipe],
  imports: [],
  exports: [ConvertDateToDatePipe, ConvertDateToDateTimePipe, ConvertNumberToNumberPipe, ConvertNumberToMoneyPipe],
})
export class PremuiTranslationModule {}
