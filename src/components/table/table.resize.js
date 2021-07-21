import {$} from '@core/Dom';

export const resizeHandler = ($root, evt) => {
  const $resizer = $(evt.target);
  const $parent = $resizer.closest('[data-type="resizable"]');
  const startCoords = $parent.getCoords();
  const type = $resizer.dataAttribute.resize;
  const property = type === 'column' ? 'bottom' : 'right';
  let value;

  $resizer.setCss({
    opacity: 1,
    [property]: '-5000px',
  });

  document.onmousemove = (moveEvt) => {
    if (type === 'column') {
      const deltaCoords = moveEvt.pageX - startCoords.right;
      value = startCoords.width + deltaCoords;

      $resizer.setCss({
        right: -deltaCoords + 'px',
      });
    } else {
      const deltaCoords = moveEvt.pageY - startCoords.bottom;
      value = startCoords.height + deltaCoords;

      $resizer.setCss({
        bottom: -deltaCoords + 'px',
      });
    }
  };

  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;

    if (type === 'column') {
      $parent.setCss({
        width: value + 'px',
      });
      $root
          .getSelectorAll(`[data-column="${$parent.dataAttribute.column}"]`)
          .forEach((item) => item.style.width = value + 'px');
    } else {
      $parent.setCss({
        height: value + 'px',
      });
    }

    $resizer.setCss({
      opacity: 0,
      right: 0,
      bottom: 0,
    });
  };
};
