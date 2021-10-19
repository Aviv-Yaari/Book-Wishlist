import { IconButton, List, ListItem } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { WishBookSort } from './WishBookSort';

export function WishBookList ({ favorites, handleFavorite, handleSortFavorites }) {
    const totalPrice = favorites.reduce((sum, book) => sum + +book.price, 0);
    return (
        <section className="wish-book-list flex column">
            <WishBookSort handleSortFavorites={handleSortFavorites} />
            <List >
                {favorites.map(book => (
                    <ListItem key={book.id}>
                        <span className="book-title">{book.title}</span>
                        <IconButton onClick={() => handleFavorite(book, true)}>
                            <RemoveCircleIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
            <h4 className="total">Total: {(totalPrice).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            })}</h4>
        </section>
    );
}
