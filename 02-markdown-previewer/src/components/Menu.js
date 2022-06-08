
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
      <button class="menu" onClick={handleOrientation}>{(menu.orientation === 'horizontal') ? <i class="fa-solid fa-up-down"></i> : <i class="fa-solid fa-left-right"></i>}</button>
      <button class="menu" onClick={handleTheme}>{(menu.theme === 'light') ? <i class="fa-solid fa-circle-half-stroke"></i> : <i class="fa-solid fa-circle-half-stroke fa-rotate-180"></i>}</button>
    </div>
  );
}

export default Menu;