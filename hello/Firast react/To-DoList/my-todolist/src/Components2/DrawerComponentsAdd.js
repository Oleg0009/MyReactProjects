import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from "@material-ui/core/FormLabel";
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import Button from "@material-ui/core/Button";
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import CircularProgress from "@material-ui/core/CircularProgress";
import green from '@material-ui/core/colors/green';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
const styles = theme => ({

    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    wrapper: {
        margin: theme.spacing.unit,
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
    margin: {
        margin: theme.spacing.unit,
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },

});

function TransitionRight(props) {


    return <Slide {...props} direction="right"/>;
}

class TextFields extends React.Component {
    state = {
        open: false,
        Transition: null,
        name: '',
        description: '',
        date: "",
        priority: "1",
        status: 'Не выполнена',


        loading: false,
        success: false,
    };


    handleClick = Transition => () => {
        this.setState({open: true, Transition});
    };

    handleClose = () => {
        this.setState({open: false});
    };
    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    handleChangeDesc = ()=> event => {
        this.setState({description: event.target.value});
    };
    handleChangeDate = () => event => {
        this.setState({date: event.target.value});
    };
    handleChangePriority = event => {
        this.setState({priority: event.target.value});
    };
    handleChangesStatus = event => {
        this.setState({status: event.target.value});
    };


    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    handleButtonClick = () => {

        if (this.state.name !== "")
            if (!this.state.loading) {
                this.setState(
                    {
                        success: false,
                        loading: true,
                    },
                    () => {
                        this.timer = setTimeout(() => {
                            this.props.handleSave(this.state);
                            this.setState({
                                loading: false,
                                success: true,
                            });
                        }, 2000);
                    },
                );


            }
    };


    render() {
        const {classes} = this.props;
        const {loading, success} = this.state;
        const buttonClassname = "error";

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    placeholder="Пишите имя здесь"
                    id="standard-name"
                    label="Имя задачи"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />
                <TextField
                    placeholder="Пишите описание здесь"
                    id="standard-name"
                    label="Описание задачи"
                    className={classes.textField}
                    value={this.state.description}
                    onChange={this.handleChangeDesc('name')}
                    margin="normal"
                    multiline="true"
                />
                <TextField
                    id="date"
                    margin="normal"
                    label="Дата выполнения"
                    type="date"
                    value={this.state.date}
                    className={classes.textField}
                    onChange={this.handleChangeDate('name')}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <FormControl value="disabled" component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Приоритетность</FormLabel>
                    <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                        className={classes.group}
                        value={this.state.priority}
                        onChange={this.handleChangePriority}
                    >
                        <FormControlLabel value="1" control={<Radio/>} label="Срочная важная задача"/>
                        <FormControlLabel value="2" control={<Radio/>} label="Срочная неважная задача"/>
                        <FormControlLabel value="3" control={<Radio/>} label="Несрочная важная задача"/>
                        <FormControlLabel value="4" control={<Radio/>} label="Несрочная неважная задача"/>
                    </RadioGroup>
                </FormControl>
                <FormControl value="disabled" component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Статус</FormLabel>
                    <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                        className={classes.group}
                        value={this.state.status}
                        onChange={this.handleChangesStatus}
                    >
                        <FormControlLabel value="Выполнена" control={<Radio/>} label="Выполнена"/>
                        <FormControlLabel value="Не выполнена" control={<Radio/>} label="Не выполнена"/>
                        <FormControlLabel value="На потом" control={<Radio/>} label="На потом"/>
                    </RadioGroup>
                </FormControl>

                <div>
                    <div className={classes.root}>
                        <div className={classes.wrapper}>
                            <Fab color="primary" className={buttonClassname} onClick={this.handleButtonClick}>
                                {success ? <CheckIcon/> : <SaveIcon/>}
                            </Fab>
                            {loading && <CircularProgress size={68} className={classes.fabProgress}/>}
                        </div>
                        <Button variant="contained" color="secondary" className={classes.button}
                                onClick={this.handleClick(TransitionRight)}>
                            Отмена
                            <CancelIcon className={classes.rightIcon}/>
                        </Button>
                        <Snackbar
                            open={this.state.open}
                            onClose={this.handleClose}
                            TransitionComponent={this.state.Transition}
                            ContentProps={{
                                'aria-describedby': 'message-id',
                            }}
                            message={


                                <span id="message-id">Вы не сохранили ваши данные</span>
                            }
                        />

                    </div>

                </div>
            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    message: PropTypes.node,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf('error').isRequired,
};







export default withStyles(styles)(TextFields);