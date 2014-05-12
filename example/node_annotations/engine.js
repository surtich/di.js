export class Engine {

  constructor() {
    this.state = 'stopped';
  }

  start() {
    return this.state = 'running';
  }
	
}
