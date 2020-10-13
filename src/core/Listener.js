export class Listener {
  constructor($root) {
    if (!$root) {
      throw new Error('No $root');
    }

    this.$root = $root;
  }
}
