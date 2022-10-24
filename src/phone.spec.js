import isPhoneNumber from './phone.js';

describe('isPhoneNumber', () => {
  it('should be valid with spaces', () => {
    const result = isPhoneNumber('+491 000 000000');
    expect(result).toBe(true);
  });

  it('should be valid without spaces', () => {
    const result = isPhoneNumber('+491000000000');
    expect(result).toBe(true);
  });

  it('should should not work with other conoutry codes', () => {
    const result = isPhoneNumber('+962000000000');
    expect(result).toBe(false);
  });
});
