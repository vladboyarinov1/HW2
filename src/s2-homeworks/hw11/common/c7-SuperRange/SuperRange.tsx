import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import styled from 'styled-components';

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider

            sx={{
                width: '147px',
                color: '#00CC22', // активная линия цвет
                height: 4,
                '& .MuiSlider-track': {
                    border: 'none',
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B' // не заполненная линия
                },
                '& .MuiSlider-thumb': { //ползунок
                    height: 18,
                    width: 18,
                    backgroundColor: '#fff',
                    border: '1px solid #00CC22',
                    '&:before': {
                        content: "' '",
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#00CC22',
                        boxShadow: 'none'

                        // display: 'none',
                    },
                },

            }}
            {...props}
        />
    )
}

export default SuperRange
