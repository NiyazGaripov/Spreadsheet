export class TableSelection {
  constructor() {
    this.group = [];
  }

  // $node instanceof Dom
  select($node) {
    this.group.push($node);
    $node.addClass('selected');
  }

  selectGroup() {

  }
}
