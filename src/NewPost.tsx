import * as React from 'react';
import { useState } from 'react';

import { Typography, TextField, Container, Grid, Paper, FormControl, InputLabel, Select, MenuItem, Button } from "@material-ui/core";

import useStyles from "./Style";

import Web3 from "web3";

// interface FourC { clarity: '', cut: '', carat: '', color: '' }

function NewPost() {
  const classes = useStyles();

  const inputLabel = React.useRef<HTMLLabelElement>(null);

  const [log, setLog] = useState();
  const [fourC, setFourC] = useState({ clarity: '', cut: '', carat: '', color: '' })

  //  const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545/'));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFourC({ ...fourC, [event.target.name]: event.target.value });
  };

  window.addEventListener('load', async () => {
    if ((window as any).web3) {
      (window as any).web3 = new Web3((window as any).web3.currentProvider);
    }
  });

  function submit() {
    (window as any).web3.eth.getBlockNumber((e: any, r: any) => {
      if (e) {
        //        console.log(e);
        return e;
      } else {
        //        console.log(r);
        setLog(r);
        return r;
      }
    });
  }

  return (
    <>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.rootcontainer}>
        <Grid container={true} className={classes.container}>
          <Grid item={true} xs={12} md={12} lg={12}>
            <Paper style={{ textAlign: "right" }}>
              <Grid container={true} className={classes.container}>
                <Grid item={true} className={classes.grid} xs={12} md={6} lg={6}>
                  <TextField
                    required={true}
                    id="Subject"
                    name="subject"
                    label="제목"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item={true} className={classes.grid} xs={12} md={6} lg={6}>
                  <TextField
                    required={true}
                    id="Price"
                    name="price"
                    label="가격"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item={true} className={classes.grid} xs={12} md={6} lg={6}>
                  <TextField
                    required={true}
                    id="Certification"
                    name="certification"
                    label="감정정보"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item={true} className={classes.grid} xs={6} md={3} lg={3}>
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel ref={inputLabel}>
                      Carat
                    </InputLabel>
                    <Select
                      id="carat"
                      name="carat"
                      value={fourC.carat}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="0.25">0.25</MenuItem>
                      <MenuItem value="0.5">0.5</MenuItem>
                      <MenuItem value="0.75">0.75</MenuItem>
                      <MenuItem value="1.0">1.0</MenuItem>
                      <MenuItem value="1.25">1.25</MenuItem>
                      <MenuItem value="1.5">1.5</MenuItem>
                      <MenuItem value="1.75">1.75</MenuItem>
                      <MenuItem value="2.0">2.0</MenuItem>
                      <MenuItem value="2.5">2.5</MenuItem>
                      <MenuItem value="3.0">3.0</MenuItem>
                      <MenuItem value="3.5">3.5</MenuItem>
                      <MenuItem value="4.0">4.0</MenuItem>
                      <MenuItem value="5.0">5.0</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item={true} className={classes.grid} xs={6} md={3} lg={3}>
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel ref={inputLabel}>
                      Clarity
                    </InputLabel>
                    <Select
                      id="clarity"
                      name="clarity"
                      value={fourC.clarity}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="FL">FL</MenuItem>
                      <MenuItem value="VVS1">VVS1</MenuItem>
                      <MenuItem value="VVS2">VVS2</MenuItem>
                      <MenuItem value="VS1">VS1</MenuItem>
                      <MenuItem value="VS2">VS2</MenuItem>
                      <MenuItem value="SI1">SI1</MenuItem>
                      <MenuItem value="SI2">SI2</MenuItem>
                      <MenuItem value="SI3">SI3</MenuItem>
                      <MenuItem value="I1">I1</MenuItem>
                      <MenuItem value="I2">I2</MenuItem>
                      <MenuItem value="I3">I3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item={true} className={classes.grid} xs={6} md={3} lg={3}>
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel ref={inputLabel}>
                      Cut
                    </InputLabel>
                    <Select
                      id="cut"
                      name="cut"
                      value={fourC.cut}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="EXCELLENT">EXCELLENT</MenuItem>
                      <MenuItem value="VERYGOOD">VERYGOOD</MenuItem>
                      <MenuItem value="GOOD">GOOD</MenuItem>
                      <MenuItem value="FAIR">FAIR</MenuItem>
                      <MenuItem value="POOR">POOR</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item={true} className={classes.grid} xs={6} md={3} lg={3}>
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel ref={inputLabel}>
                      Color
                    </InputLabel>
                    <Select
                      id="color"
                      name="color"
                      value={fourC.color}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="D">D</MenuItem>
                      <MenuItem value="E">E</MenuItem>
                      <MenuItem value="F">F</MenuItem>
                      <MenuItem value="G">G</MenuItem>
                      <MenuItem value="H">H</MenuItem>
                      <MenuItem value="I">I</MenuItem>
                      <MenuItem value="J">J</MenuItem>
                      <MenuItem value="K">K</MenuItem>
                      <MenuItem value="L">L</MenuItem>
                      <MenuItem value="M">M</MenuItem>
                      <MenuItem value="N">N</MenuItem>
                      <MenuItem value="O">O</MenuItem>
                      <MenuItem value="P">P</MenuItem>
                      <MenuItem value="Q">Q</MenuItem>
                      <MenuItem value="R">R</MenuItem>
                      <MenuItem value="S">S</MenuItem>
                      <MenuItem value="T">T</MenuItem>
                      <MenuItem value="U">U</MenuItem>
                      <MenuItem value="V">V</MenuItem>
                      <MenuItem value="W">W</MenuItem>
                      <MenuItem value="X">X</MenuItem>
                      <MenuItem value="Y">Y</MenuItem>
                      <MenuItem value="Z">Z</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item={true} className={classes.grid} xs={12} md={12} lg={12}>
                  <Button fullWidth={true} variant="contained" color="primary" onClick={submit}>제출</Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Typography>{log}</Typography>
    </>
  );
}

export default NewPost;