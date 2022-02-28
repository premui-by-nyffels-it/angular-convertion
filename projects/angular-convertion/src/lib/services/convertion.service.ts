import { Injectable } from "@angular/core";
import { Convertion, DefaultConvertionSettings } from '@premui/convertion';

@Injectable({
	providedIn: 'root',
})
export class PremuiConvertionService extends Convertion {
	constructor() {
		super(DefaultConvertionSettings.default());
	}
}