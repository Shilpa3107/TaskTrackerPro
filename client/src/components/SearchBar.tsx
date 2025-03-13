import { TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../store/taskSlice";

export default function SearchBar() {
  const dispatch = useDispatch();

  return (
    <TextField
      fullWidth
      placeholder="Search tasks..."
      onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{ mb: 3 }}
    />
  );
}
