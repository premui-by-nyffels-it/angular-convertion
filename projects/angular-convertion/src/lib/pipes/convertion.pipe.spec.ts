import { ConvertDateToDatePipe, ConvertDateToDateTimePipe, ConvertNumberToMoneyPipe, ConvertNumberToNumberPipe } from './convertion.pipe';

describe('ConvertDateToDatePipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertDateToDatePipe();
    expect(pipe).toBeTruthy();
  });
});

describe('ConvertDateToDateTimePipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertDateToDateTimePipe();
    expect(pipe).toBeTruthy();
  });
});

describe('ConvertNumberToMoneyPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertNumberToMoneyPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('ConvertNumberToNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertNumberToNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
