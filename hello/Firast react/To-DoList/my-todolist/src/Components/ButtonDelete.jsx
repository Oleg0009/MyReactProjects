import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import classNames from 'classnames';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';



const styles = theme => ({
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
class CircularIntegration extends React.Component {
    state = {
        loading: false,
        success: false,
    };

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    handleButtonClick = () => {
        if (!this.state.loading) {
            this.setState(
                {
                    success: false,
                    loading: true,
                },
                () => {
                    this.timer = setTimeout(() => {
                        this.props.handleDeleteTask(this.props.keyProp);
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
        const { loading, success } = this.state;
        const { classes } = this.props;
        const buttonClassname = classNames({
            [classes.buttonSuccess]: success,
        });

        return (
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <Fab color="primary" className={buttonClassname} onClick={this.handleButtonClick}>
                        {success ? <CheckIcon /> : <DeleteIcon />}
                    </Fab>
                    {loading && <CircularProgress size={68} className={classes.fabProgress} />}
                </div>
            </div>
        );
    }
}

CircularIntegration.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIntegration);
