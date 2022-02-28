import { Pipe, PipeTransform } from '@angular/core';
import { PremuiConvertionService } from '../services/convertion.service';

@Pipe({
  name: 'premuidate',
})
export class ConvertDateToDatePipe implements PipeTransform {
	constructor(private convertionService: PremuiConvertionService) {}

  transform(value: Date, ...args: any[]): string {
    return this.convertionService.convertDateToDateString(value);
  }
}

@Pipe({
  name: 'premuidatetime',
})
export class ConvertDateToDateTimePipe implements PipeTransform {
	constructor(private convertionService: PremuiConvertionService) {}

  transform(value: Date, settings: {timezone: boolean}): string {
    if (settings.timezone === undefined || settings.timezone === null) return this.convertionService.convertDateToDateTimeString(value);
    return this.convertionService.convertDateToDateTimeString(value, settings.timezone);
  }
}

@Pipe({
  name: 'premuinumber',
})
export class ConvertNumberToNumberPipe implements PipeTransform {
	constructor(private convertionService: PremuiConvertionService) {}

  transform(value: number, ...args: any[]): string {
    return this.convertionService.convertNumberToNumberString(value);
  }
}

@Pipe({
  name: 'premuimoney',
})
export class ConvertNumberToMoneyPipe implements PipeTransform {
	constructor(private convertionService: PremuiConvertionService) {}

  transform(value: number, ...args: any[]): string {
    return this.convertionService.convertNumberToMoneyString(value);
  }
}
