import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function Menu(props) {
  const {theme, setTheme} = props;
  const handleTheme = e => {
    setTheme({...theme, language: e.target.value});
  }
  return (
    <ToggleButtonGroup
      color="primary"
      value={theme.language}
      exclusive
      onChange={handleTheme}>
      <ToggleButton value="english">English</ToggleButton>
      <ToggleButton value="romaji">Romaji</ToggleButton>
      <ToggleButton value="japanese">Japanese</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default Menu;