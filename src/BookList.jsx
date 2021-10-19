import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { IconButton, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export function BookList ({ books, handleFavorite, favorites }) {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const book = books[activeStep];
    const isFavorite = favorites.some(favorite => favorite.id === book.id);

    return (
        <section className="book-list">
            <div className="book-details column flex align-center">
                <IconButton className="btn-favorite" onClick={() => handleFavorite(book, isFavorite)}>
                    <FavoriteIcon sx={{ color: isFavorite ? 'red' : 'grey' }} />
                </IconButton>
                <div className="flex align-center"><h3>{book.title}</h3><span>/{book.author}</span></div>
                <Rating value={+book.rating} precision={0.5} readOnly />
                <article className="book-description">{book.description}</article>
                <span>Price: {(+book.price).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                })}</span>
            </div>
            <MobileStepper
                variant="progress"
                steps={6}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
                        Next
                        <KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        <KeyboardArrowLeft />
                        Back
                    </Button>
                }
            />
        </section>
    );
}
