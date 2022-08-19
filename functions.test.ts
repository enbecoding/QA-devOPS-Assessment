const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    it ("returns an array", () => {
        const returnedValue = shuffleArray()
        expect(returnedValue instanceof Array).toEqual(true)
    })

})