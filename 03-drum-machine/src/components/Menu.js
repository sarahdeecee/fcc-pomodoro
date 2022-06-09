import { Divider, ToggleButton, ToggleButtonGroup } from "@mui/material";

function Menu(props) {
  const {theme, setTheme} = props;
  const handleLanguage = e => {
    setTheme({...theme, language: e.target.value});
  }
  const handleMode = e => {
    setTheme({...theme, mode: e.target.value});
  }
  return (
    <div id="menu">
      <ToggleButtonGroup
        color="primary"
        value={theme.mode}
        exclusive
        onChange={handleMode}
      >
        <ToggleButton value="light">Light</ToggleButton>
        <ToggleButton value="dark">Dark</ToggleButton>
      </ToggleButtonGroup>
      <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
      <ToggleButtonGroup
        color="primary"
        value={theme.language}
        exclusive
        onChange={handleLanguage}
      >
        <ToggleButton value="english">English</ToggleButton>
        <ToggleButton value="romaji">Romaji</ToggleButton>
        <ToggleButton value="japanese">Japanese</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default Menu;