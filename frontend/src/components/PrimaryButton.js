import React, {useState, useEffect} from "react";
import { Button } from '@mui/material';

function PrimaryButton({children, onClick, ...otherProps}) {
    return (
    <div>
        <Button
            variant="contained"
            disabledElevation
            onClick={onClick}
            sx={{
                borderRadius: '8px',

            }}
            {...otherProps}
            >
            {children}
        </Button>
    </div>

    );
}

export default PrimaryButton;

