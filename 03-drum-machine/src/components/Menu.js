import { Button } from "@mui/material";

function Menu(props) {
  const {theme, setTheme} = props;
  const handleTheme = () => {
    if (theme.language === 'english') {
      setTheme({...theme, language: 'japanese'});
    } else {
      setTheme({...theme, language: 'english'});
    }
  }
  return (
    <Button onClick={handleTheme}>
      {(theme.language === 'english') ? 'Japanese' : 'English'}
    </Button>
  );
}

export default Menu;