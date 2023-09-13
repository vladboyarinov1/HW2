import React from 'react';
// import { ReactComponent as DownIcon } from './downIcon.svg';
// import { ReactComponent as UpIcon } from './upIcon.svg';
// import { ReactComponent as NoneIcon } from './noneIcon.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import RemoveIcon from '@mui/icons-material/Remove';

export type SuperSortPropsType = {
    id?: string;
    sort: string;
    value: string;
    onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === down) {
        return up;
    } else if (sort === up) {
        return '';
    } else {
        return down;
    }
};

const SuperSort: React.FC<SuperSortPropsType> = ({
                                                     sort,
                                                     value,
                                                     onChange,
                                                     id = 'hw15',
                                                 }) => {
    const up = '0' + value;
    const down = '1' + value;

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up));
    };

    const Icon = sort === down ? KeyboardArrowDownIcon : sort === up ? KeyboardArrowUpIcon : RemoveIcon;

    return (
        <span id={id + '-sort-' + value} onClick={onChangeCallback}>
      <Icon id={id + '-icon-' + sort}/>
    </span>
    );
};

export default SuperSort;