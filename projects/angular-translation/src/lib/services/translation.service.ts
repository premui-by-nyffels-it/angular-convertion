import { Injectable } from "@angular/core";
import { Translation } from '@premui/translation';

@Injectable({
	providedIn: 'root',
})
export class PremuiTranslationService extends Translation {
	constructor() {
		super();
	}
}