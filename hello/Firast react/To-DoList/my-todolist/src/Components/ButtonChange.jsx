import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';
import * as PropTypes from "prop-types";
import DrawerComponentChange from '../Components2/DrawerComponentsChange'
const drawerWidth = 270;
const styles = theme => ({

    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },

    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});

class ButtonChange extends Component {
    constructor(props) {
        super(props);

        const {classes} = props;
        this.state = {

            open: false

        }
    }

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };


    render() {

        const {classes} = this.props;
        const {open} = this.state;
        return (
            <div className={classes.root}>


                    <SendIcon className={classes.rightIcon} onClick={this.handleDrawerOpen.bind(this)}/>

                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >

                    <div >
                       <Button onClick={this.handleDrawerClose.bind(this)}>

                           <CloseIcon className={classes.rightIcon}/>
                       </Button>

                    </div>
                    <Divider/>
                    <h1>
                        Изменить задачу
                    </h1>
                    <DrawerComponentChange

                        handleSaveChanges={this.props.handleSaveChanges} row={this.props.row}
                    />
                </Drawer>
            </div>
        );
    }

}

ButtonChange.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonChange);