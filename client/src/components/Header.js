import React from "react";
import { Grid, } from "@material-ui/core";
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';

const Header = () => {
    return (
        <>
            <div
                style={{
                    width: "100%",
                    height: "100px",
                    marginBottom: "25px",
                    background: "navy",
                }}
            >
                <Grid xs={2}>
                    <ListItem role="none">
                        <ListItemButton
                        sx={{
                            color: 'white',
                        }}
                        >
                            <ListItemDecorator>
                                <HouseSidingIcon/>
                            </ListItemDecorator>
                            Home
                        </ListItemButton>
                    </ListItem>
                </Grid>
            </div>
        </>
    );
};

export default Header;