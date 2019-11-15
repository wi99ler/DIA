import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import DiaMain from "./dia_main.jpg";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootcontainer: {
      spacing: theme.spacing(0),
      margin: theme.spacing(0),
      padding: theme.spacing(1),
      display: "flex",
      flexwrap: "wrap"
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto"
    },
    appBar: {
      background: "transparent",
      boxShadow: "none"
    },
    list: {
      width: 250,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    fullList: {
      width: 'auto',
    },
    tablehead: {
      backgroundColor: "#aaaaaa",
      color: "#FFFFFF",
      fontWeight: "bold"
    },
    pagination: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5)
    },
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    container: {
      width: "100%",
      spacing: theme.spacing(0),
      margin: theme.spacing(0),
      padding: theme.spacing(0),
      display: "flex",
      flexwrap: "wrap"
    },
    grid: {
      margin: theme.spacing(0),
      padding: theme.spacing(1),
      textAlign: "center"
    },
    table: {
      minWidth: 500,
    },
    tableWrapper: {
      overflowX: 'auto',
    },
    img: {
      width: "100%"
    },
    title: {
      flexGrow: 1
    },
    mainCopy: {
      color: "#ffffff"
    },
    landingImg: {
      height: 500,
      backgroundImage: `url(${DiaMain})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      textAlign: "center",
      verticalAlign: "middle"
    }
  })
);

export default useStyles;