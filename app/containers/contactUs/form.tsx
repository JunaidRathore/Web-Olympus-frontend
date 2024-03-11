"use client";
import React from "react";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
const Form = () => {
  return (
    <Box component="form" noValidate autoComplete="off" margin="40px 0">
      <Box
        sx={{
          my: 2,
        }}
      >
        <InputLabel>Full Name</InputLabel>
        <TextField
          fullWidth
          id="outlined-basic"
          placeholder="Input your full name in here"
          label=""
          variant="outlined"
          sx={{
            mt: 2,
          }}
        />
      </Box>
      <Box
        sx={{
          my: 2,
        }}
      >
        <InputLabel>Email</InputLabel>
        <TextField
          fullWidth
          id="outlined-basic"
          placeholder="Input your Email in here"
          label=""
          variant="outlined"
          sx={{
            mt: 2,
          }}
        />
      </Box>
      <Box
        sx={{
          my: 2,
        }}
      >
        <InputLabel>Subjects</InputLabel>
        <Select
          sx={{
            mt: 2,
            width: "100%",
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label=""
          // onChange={handleChange}
        >
          <MenuItem value={10}>Subject 1</MenuItem>
          <MenuItem value={20}>Subject 2</MenuItem>
          <MenuItem value={30}>Subject 3</MenuItem>
        </Select>
      </Box>
      <Box
        sx={{
          my: 2,
        }}
      >
        <InputLabel>Messages</InputLabel>
        <TextField
          fullWidth
          multiline
          rows={6}
          id="outlined-basic"
          placeholder="Input your Messages in here"
          label=""
          variant="outlined"
          sx={{
            mt: 2,
          }}
        />
      </Box>
      <Box
        sx={{
          my: 2,
        }}
      >
        <Button
          variant="outlined"
          sx={{
            color: "#fff",
          }}
          className="footer-btn"
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};
export default Form;
