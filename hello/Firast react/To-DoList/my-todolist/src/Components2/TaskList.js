import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ButtonChange from '../Components/ButtonChange'
import ButtonDelete from '../Components/ButtonDelete'
import TableBody from '@material-ui/core/TableBody';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    sell: {
        display: "flex",
    }
});



// Table
// Table
// Table
// Table
// Table
// Table
// Table
function SimpleTable(props) {
    const {classes} = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Задачи</TableCell>
                        <TableCell align="center">Статус</TableCell>
                        <TableCell align="center">Описание задачи</TableCell>
                        <TableCell align="center">Дата</TableCell>
                        <TableCell align="center">Приоритет</TableCell>
                        <TableCell align="center">Тег</TableCell>
                        <TableCell align="left">Удалить задачу</TableCell>
                        <TableCell align="left">Изменить задачу</TableCell>
                    </TableRow>
                </TableHead>
                <Tasks handleChangeStatus={props.handleChangeStatus} handleSaveChanges={props.handleSaveChanges} deleteCallBack={props.deleteCallBack}
                       tasks={props.tasks}/>
            </Table>
        </Paper>
    );
}

//Tasks
//Tasks
//Tasks
//Tasks
//Tasks
let Tasks = (props) => {
    return (
        <TableBody>
            {
                props.tasks.map(row => {

                    return (
                        <Task
                            handleChangeStatus={props.handleChangeStatus}
                            handleSaveChanges={props.handleSaveChanges}
                            deleteCallBack={props.deleteCallBack}
                              row={row}
                        />
                    )

                })}
        </TableBody>

    )

};
//Task
//Task
//Task
//Task
//Task
//Task
//Task
class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    changeStatus(name) {
        this.props.row.status=name;
        this.props.handleChangeStatus(name);

    }
    render() {
        return (

            <TableRow key={this.props.row.id}>
                <TableCell component="th" scope="row">
                    {

                        this.props.row.name}
                </TableCell>
                <TableCell className="sell" align="center">

                    {this.props.row.status}
                    <LongMenu changeStatus={this.changeStatus.bind(this)} priority={this.props.row.priority}/>
                </TableCell>
                <TableCell align="center">{this.props.row.description}</TableCell>
                <TableCell align="center">{this.props.row.date}</TableCell>
                <TableCell align="center">{this.props.row.priority}</TableCell>
                <TableCell align="center">{this.props.row.tag}</TableCell>
                <TableCell align="right">
                    {/*ButtonDelete*/}
                    {/*ButtonDelete*/}
                    {/*ButtonDelete*/}
                    {/*ButtonDelete*/}
                    {/*ButtonDelete*/}
                    {/*ButtonDelete*/}
                    {/*ButtonDelete*/}
                    <ButtonDelete keyProp={this.props.row.id} handleDeleteTask={this.props.deleteCallBack}/>
                </TableCell>
                <TableCell align="center">
                    {/*ButtonChangeItem*/}
                    {/*ButtonChangeItem*/}
                    {/*ButtonChangeItem*/}
                    {/*ButtonChangeItem*/}
                    {/*ButtonChangeItem*/}
                    {/*ButtonChangeItem*/}
                    {/*ButtonChangeItem*/}
                    <ButtonChange handleSaveChanges={this.props.handleSaveChanges} row={this.props.row}/>
                </TableCell>
            </TableRow>

        )
    }
}
SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};
const ITEM_HEIGHT = 48;
//Status
//Status
//Status
//Status
//Status
//Status
class LongMenu extends React.Component {

    constructor(props) {

        super(props);
    }

    state = {
        anchorEl: null,
        options: [
            "Выполнена",
            'Не Выполнена',
            'На потом'
        ]
    };

    handleClick = event => {


        this.setState({anchorEl: event.currentTarget});

    };
    handleChange = (name) => {
            this.props.changeStatus(name);
    };
    handleClose = () => {

        this.setState({anchorEl: null});

    };

    render() {
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);
        return (
            <div>
                <IconButton
                    aria-label="More"
                    aria-owns={open ? 'long-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <MoreVertIcon/>
                </IconButton>
                <Menu id="long-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={this.handleClose}
                      PaperProps={{
                          style: {
                              maxHeight: ITEM_HEIGHT * 4.5,
                              width: 200,
                          },
                      }}
                >
                    {this.state.options.map(option => (
                        <MenuItem key={option} selected={option === 'Не Выполнена'} onClick={this.handleClose}>
                            <SelectedItem handleChange={this.handleChange} priority={this.props.status} option={option}/>
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }
}
let SelectedItem = (props) => {

    let ClickElement = () => {
        props.handleChange(props.option)
    };

    return (

        <label onClick={ClickElement}>
            {props.option}
        </label>


    )
};
export default withStyles(styles)(SimpleTable);