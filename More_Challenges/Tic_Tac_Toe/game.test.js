const game = require('./game');

describe('game', () => {
  
  it('returns empty game table', () => {
    expect(game()).toEqual()
  })

})