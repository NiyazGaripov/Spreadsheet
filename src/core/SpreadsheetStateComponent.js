import {SpreadsheetComponent} from '@core/SpreadsheetComponent';

export class SpreadsheetStateComponent extends SpreadsheetComponent {
  constructor(...args) {
    super(...args);
  }

  get template() {
    return JSON.stringify(this.state, null, 2);
  }

  initState(initialState = {}) {
    this.state = {...initialState};
  }
}
