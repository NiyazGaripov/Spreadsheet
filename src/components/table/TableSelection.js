export class TableSelection {
  static className = 'selected';

  constructor() {
    this.group = [];
    this.current = null;
  }

  // $node instanceof Dom
  select($node) {
    this.clear();
    $node.setFocus().addClass(TableSelection.className);
    this.group.push($node);
    this.current = $node;
  }

  clear() {
    this.group.forEach(($item) => $item.removeClass(TableSelection.className));
    this.group = [];
  }

  selectGroup(group = []) {
    this.clear();
    this.group = group;
    this.group.forEach(($item) => $item.addClass(TableSelection.className));
  }

  applyStyle(style) {
    this.group.forEach(($item) => $item.setCss(style));
  }

  get selectedIds() {
    return this.group.map(($node) => $node.getId());
  }
}
