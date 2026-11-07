/* eslint-disable testing-library/no-debugging-utils */
import { getConsole } from './utils'

describe('getConsole()', () => {
  const spies: Partial<Record<keyof Console, jest.SpyInstance>> = {}
  const noop = () => null
  beforeEach(() => {
    spies.debug = jest.spyOn(console, 'debug').mockImplementation(noop)
    spies.info = jest.spyOn(console, 'info').mockImplementation(noop)
    spies.log = jest.spyOn(console, 'log').mockImplementation(noop)
    spies.warn = jest.spyOn(console, 'warn').mockImplementation(noop)
    spies.error = jest.spyOn(console, 'error').mockImplementation(noop)
    spies.table = jest.spyOn(console, 'table').mockImplementation(noop)
  })

  afterEach(() => {
    for (const spy of Object.values(spies)) {
      spy.mockReset()
    }
  })

  it('passes through console methods by default', () => {
    const con = getConsole()
    con.debug('debug')
    con.info('info')
    con.log('log')
    con.warn('warn')
    con.error('error')
    expect(spies.debug).toHaveBeenCalledWith('debug')
    expect(spies.info).toHaveBeenCalledWith('info')
    expect(spies.log).toHaveBeenCalledWith('log')
    expect(spies.warn).toHaveBeenCalledWith('warn')
    expect(spies.error).toHaveBeenCalledWith('error')
  })

  it('silences console methods when isDev is truthy', () => {
    const con = getConsole(true)
    con.debug('debug')
    con.info('info')
    con.log('log')
    expect(spies.debug).not.toHaveBeenCalled()
    expect(spies.info).not.toHaveBeenCalled()
    expect(spies.log).not.toHaveBeenCalled()
  })

  it('proxies unsilenced console methods', () => {
    const con = getConsole(true)
    con.warn('warn')
    con.error('error')
    expect(spies.warn).toHaveBeenCalledWith('warn')
    expect(spies.error).toHaveBeenCalledWith('error')
  })
})
