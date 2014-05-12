import {Provide} from 'di';
import {Engine} from '../engine';

@Provide(Engine)
export class MockEngine {
  constructor() {
    this.state = 'running';
  }
}
