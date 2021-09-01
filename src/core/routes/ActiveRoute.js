export class ActiveRoute {
  static get path() {
    return window.location.hash.slice(1);
  }
}
