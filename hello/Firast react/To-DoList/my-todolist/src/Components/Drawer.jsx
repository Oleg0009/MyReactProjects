import React from 'react';

import TasksList from "../Components2/TaskList";
import DrawerComponentAdd from "../Components2/DrawerComponentsAdd"


import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Button from "@material-ui/core/Button";


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
    headerStyle: {
        position: "fixed",
    },
});

class PersistentDrawerRight extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                {
                    id: 0,
                    status: "Не выполнена",
                    name: "Задача1",
                    description: "Сделать уроки",
                    date: "",
                    priority: 1,
                    tag: "tag 0"
                },
                {
                    id: 1,
                    status: "Не выполнена",
                    name: "Задача2",
                    description: "Выучить стих",
                    date: "",
                    priority: 1,
                    tag: "tag 1"
                },
            ],
            filter: "all",
            idTask: 2,
            open: false,
        };


    }

    handleSaveChanges(task, id) {
        console.log(task.date);
        const NewtaskList = [...this.state.tasks];
        NewtaskList.forEach((OldTask) => {


            if (OldTask.id === id) {
                OldTask.status = task.status;
                OldTask.name = task.name;
                OldTask.description = task.description;
                OldTask.date = task.date.toString();
                OldTask.priority = task.priority;
                OldTask.tag = "tag " + OldTask.id;
                console.log(OldTask.date);
            }
        });
        console.log(NewtaskList);

        this.setState({
            tasks: NewtaskList
        })


    }

    handleSave(task) {

        let NewTask = {
            id: this.state.idTask,
            status: task.status,
            name: task.name,
            description: task.description,
            date: task.date,
            priority: task.priority,
            tag: "tag " + this.state.idTask
        };
        let newId = this.state.idTask + 1;


        this.setState({idTask: newId});


        this.setState({
            tasks: [...this.state.tasks,
                NewTask
            ]
        })

    }

    handleDelete(taskID) {


        let newId = this.state.idTask - 1;


        this.setState({idTask: newId});

        let Filtertask = this.state.tasks.filter((t) => {

            return t.id !== taskID;


        });
        this.setState({
            tasks: Filtertask

        })

    }

    handleDrawerOpen = () => {
        this.setState({open: true});
    };
    handleChangeStatus = (Status) => {


        this.setState({status: Status})

    };
    handleDrawerClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes, theme} = this.props;
        const {open} = this.state;
        // var {tasks} = this.state;

        // var filteredtask = [];
        // if (filter === "all") filteredtask = tasks;
        // if (filter === "active") filteredtask = tasks.filter(t => !t.isDone);
        // if (filter === "complited") filteredtask = tasks.filter(t => t.isDone);
        return (
            <div className={classes.root}>
                <CssBaseline/>


                {/*Header*/}
                {/*Header*/}
                {/*Header*/}
                {/*Header*/}
                {/*Header*/}
                {/*Header*/}
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            Добавить
                            <AddIcon className={classes.rightIcon}/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Список Задач
                        </Typography>
                    </Toolbar>
                </AppBar>

                {/*MAin*/}
                {/*MAin*/}
                {/*MAin*/}
                {/*MAin*/}
                {/*MAin*/}
                {/*MAin*/}
                <main className={classNames(classes.content, {[classes.contentShift]: open,})}>
                <div className={classes.drawerHeader}/>

                <TasksList
                    tasks={this.state.tasks}
                    deleteCallBack={this.handleDelete.bind(this)}
                    handleChangeStatus={this.handleChangeStatus.bind(this)}
                    handleSaveChanges={this.handleSaveChanges.bind(this)}

                />

            </main>


                {/*Sidebar*/}
                {/*Sidebar*/}
                {/*Sidebar*/}
                {/*Sidebar*/}
                {/*Sidebar*/}
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >

                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                        </IconButton>

                    </div>


                    <Divider/>


                    <div>
                        <Button onClick={this.handleDrawerClose.bind(this)}>

                            <CloseIcon className={classes.rightIcon}/>
                        </Button>

                    </div>
                    <h2>
                        Добавить задачу
                    </h2>


                    <List>


                        <DrawerComponentAdd handleSave={this.handleSave.bind(this)}/>

                    </List>

                </Drawer>
            </div>
        );
    }
}

PersistentDrawerRight.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(PersistentDrawerRight);