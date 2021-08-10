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

export const createToolbar = () => {
  const buttons = [
    {
      icon: 'format_align_left',
      active: false,
      value: {
        textAlign: 'left',
      },
    },
    {
      icon: 'format_align_center',
      active: false,
      value: {
        textAlign: 'center',
      },
    },
    {
      icon: 'format_align_right',
      active: false,
      value: {
        textAlign: 'right',
      },
    },
    {
      icon: 'format_bold',
      active: false,
      value: {
        fontWeight: 'bold',
      },
    },
    {
      icon: 'format_italic',
      active: false,
      value: {
        fontStyle: 'italic',
      },
    },
    {
      icon: 'format_underlined',
      active: false,
      value: {
        textDecoration: 'underlined',
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
