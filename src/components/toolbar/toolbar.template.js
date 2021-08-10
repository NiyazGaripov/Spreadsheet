const createButton = (button) => {
  return (
    `<button type="button">
      <i class="material-icons">${button.icon}</i>
    </button>`
  );
};

export const createToolbar = () => {
  const buttons = [
    {
      icon: 'format_align_left',
    },
    {
      icon: 'format_align_center',
    },
    {
      icon: 'format_align_right',
    },
    {
      icon: 'format_bold',
    },
    {
      icon: 'format_italic',
    },
    {
      icon: 'format_underlined',
    },
  ];

  const controls = buttons.map((button) => createButton(button)).join('');

  return (
    `<h2 class="visually-hidden">Toolbar</h2>
     ${controls}
    `
  );
};
