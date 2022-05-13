const wrapText = require('./wrap-text');

describe('wrap text', () => {
  it('is a function', () => {
    expect(typeof wrapText).toBe('function');
  })

  it('returns a short string', () => {
    expect(wrapText('a', 1)).toBe('a');
  })
})