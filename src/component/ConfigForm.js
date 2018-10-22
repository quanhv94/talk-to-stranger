import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const ConfigForm = (props) => {
  if (props.chating) return null;
  return (
    <form autoComplete="off" className="config-form">
      <FormControl fullWidth margin="normal">
        <InputLabel>Your gender</InputLabel>
        <Select
          value={props.yourGender}
          onChange={event => props.config({ yourGender: event.target.value })}
        >
          <MenuItem value={0}>Secret</MenuItem>
          <MenuItem value={1}>Male</MenuItem>
          <MenuItem value={2}>Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Want to meet</InputLabel>
        <Select
          value={props.partnerGender}
          onChange={event => props.config({ partnerGender: event.target.value })}
        >
          <MenuItem value={0}>Both</MenuItem>
          <MenuItem value={1}>Male</MenuItem>
          <MenuItem value={2}>Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <Button color="secondary" variant="contained" component="span" onClick={props.startChat}>
          Start
        </Button>
      </FormControl>
    </form>
  )
}

export default ConfigForm
