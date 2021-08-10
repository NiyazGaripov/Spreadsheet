const createButton = (button) => {
  return (
    `<button class="button ${button.active ? 'active' : ''}" type="button">
      <i class="material-icons">${button.icon}</i>
    </button>`
  );
};

export const createToolbar = () => {
  const buttons = [
    {
      icon: 'format_align_left',
      active: false,
    },
    {
      icon: 'format_align_center',
      active: true,
    },
    {
      icon: 'format_align_right',
      active: false,
    },
    {
      icon: 'format_bold',
      active: true,
    },
    {
      icon: 'format_italic',
      active: false,
    },
    {
      icon: 'format_underlined',
      active: false,
    },
  ];

  const controls = buttons.map((button) => createButton(button)).join('');

  return (
    `<h2 class="visually-hidden">Toolbar</h2>
     ${controls}
    `
  );
};
