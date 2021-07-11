export class TableSelection {
  static className = 'selected';

  constructor() {
    this.group = [];
    this.current = null;
  }

  // $node instanceof Dom
  select($node) {
    this.clear();
    $node.addClass(TableSelection.className);
    this.group.push($node);
    this.current = $node;
  }

  clear() {
    this.group.forEach(($item) => $item.removeClass(TableSelection.className));
    this.group = [];
  }

  selectGroup() {

  }
}
