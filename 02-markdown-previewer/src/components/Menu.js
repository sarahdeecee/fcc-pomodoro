
function Menu(props) {
  const { menu, setMenu } = props;

  const handleOrientation = () => {
    (menu.orientation === 'horizontal') ? setMenu({...menu, orientation: 'vertical'}) : setMenu({...menu, orientation: 'horizontal'});
  }
  const handleTheme = () => {
    (menu.theme === 'light') ? setMenu({...menu, theme: 'dark'}) : setMenu({...menu, theme: 'light'});
  }

  return (
    <div>
      <button onClick={handleOrientation}>{(menu.orientation === 'horizontal') ? 'Vertical' : 'Horizontal'}</button>
      <button onClick={handleTheme}>{(menu.theme === 'light') ? 'Dark Mode' : 'Light Mode'}</button>
    </div>
  );
}

export default Menu;