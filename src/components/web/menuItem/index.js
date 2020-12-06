import React, { Component } from 'react'
import { Box } from '@material-ui/core'
import ButtonBase from "@material-ui/core/ButtonBase";

import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

export default class MenuItem extends Component {

    render() {
        return (
            <Grid item xs={2}>
                <ButtonBase>
                    <div>
                        <Box
                            display="flex" 
                        >
                            <Box m="auto">
                                <Avatar alt="Cindy Baker" src={this.props.label.imgUrl}/>
                            </Box>
                        </Box>
                        <Typography align="center">
                            {this.props.label.name}
                        </Typography>
                    </div>
                </ButtonBase>
            </Grid>
        );
    }
}