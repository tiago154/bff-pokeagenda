const { name, quadrupleDamage } = require('../../../src/resolvers/weakness/weakness')

describe('name', () => {
  it('when the object has the name field, returns the value of the name field', () => {
    const fakeParams = { name: 'fakeName', otherField: 'otherField' }

    const result = name(fakeParams)
    expect(result).toBe(fakeParams.name)
  })

  it('when the object has no the name field, returns undefined', () => {
    const fakeParams = { otherField: 'otherField' }

    const result = name(fakeParams)
    expect(result).toBeUndefined()
  })
})

describe('quadrupleDamage', () => {
  it('when the object has the weight field with value 4, returns true', () => {
    const fakeParams = { weight: 4, otherField: 'otherField' }

    const result = quadrupleDamage(fakeParams)
    expect(result).toBe(true)
  })

  it('when the object has the weight field with value different the 4, returns false', () => {
    const fakeParams = { weight: 2, otherField: 'otherField' }

    const result = quadrupleDamage(fakeParams)
    expect(result).toBe(false)
  })

  it('when the object has no the weight field, returns false', () => {
    const fakeParams = { otherField: 'otherField' }

    const result = quadrupleDamage(fakeParams)
    expect(result).toBe(false)
  })
})
