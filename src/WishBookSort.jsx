import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export function WishBookSort ({ handleSortFavorites }) {
    const [sortBy, setSortBy] = useState({});

    useEffect(() => {
        handleSortFavorites(sortBy);
    }, [handleSortFavorites, sortBy]);

    const handleSort = (ev) => {
        const { name } = ev.currentTarget;
        // if not sorting by this field, start sort with 1. otherwise reverse the order.
        setSortBy(prev => ({ [name]: prev[name] ? prev[name] * -1 : 1 }));
    };

    const SortButton = ({ name }) => {
        const ArrowIcon = () => {
            if (sortBy[name] === 1) return <ArrowDownwardIcon />;
            else if (sortBy[name] === -1) return <ArrowUpwardIcon />;
            else return <div style={{ width: '24px', height: '24px' }} />;
        };
        return <Button name={name} onClick={handleSort}><ArrowIcon />{name}</Button>;
    };

    return (
        <div>
            <SortButton name="title" />
            <SortButton name="price" />
            <SortButton name="rating" />
        </div>
    );
}