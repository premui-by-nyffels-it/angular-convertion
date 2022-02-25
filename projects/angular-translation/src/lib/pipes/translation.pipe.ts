import { Pipe, PipeTransform } from '@angular/core';
import { PremuiTranslationService } from '../services/translation.service';

@Pipe({
  name: 'premuitranslate',
  pure: false,
})
export class PremuiTranslationPipe implements PipeTransform {
  constructor(private translation: PremuiTranslationService) {}

  transform(value: any, ...args: any[]) {
    return this.translation.getValueByKey(value, args);
  }
}
