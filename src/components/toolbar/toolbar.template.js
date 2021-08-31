const createButton = (button) => {
  const meta = `
    data-type="button"
    data-value='${JSON.stringify(button.value)}'
  `;

  return (
    `<button
      class="button ${button.active ? 'active' : ''}"
      type="button"
      ${meta}>
      <i
        class="material-icons"
        ${meta}>
        ${button.icon}
      </i>
    </button>`
  );
};

export const createToolbar = (state) => {
  const buttons = [
    {
      icon: 'format_align_left',
      active: state['textAlign'] === 'left',
      value: {
        textAlign: 'left',
      },
    },
    {
      icon: 'format_align_center',
      active: state['textAlign'] === 'center',
      value: {
        textAlign: 'center',
      },
    },
    {
      icon: 'format_align_right',
      active: state['textAlign'] === 'right',
      value: {
        textAlign: 'right',
      },
    },
    {
      icon: 'format_bold',
      active: state['fontWeight'] === 'bold',
      value: {
        fontWeight: state['fontWeight'] === 'bold' ? 'normal' : 'bold',
      },
    },
    {
      icon: 'format_italic',
      active: state['fontStyle'] === 'italic',
      value: {
        fontStyle: state['fontStyle'] === 'italic' ? 'normal' : 'italic',
      },
    },
    {
      icon: 'format_underlined',
      active: state['textDecoration'] === 'underline',
      value: {
        textDecoration: state['textDecoration'] === 'underline' ?
          'none' :
          'underline',
      },
    },
  ];

  const controls = buttons.map((button) => createButton(button)).join('');

  return (
    `<h2 class="visually-hidden">Toolbar</h2>
     ${controls}
    `
  );
};
