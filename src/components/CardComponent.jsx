import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function CardComponent ({title, text, buttonText, image}) {

    const imageStyle = {
        height: '150px',
        objectFit: 'cover',
    }

    const cardStyle = {
        height: '100%',
        width: '20rem',
    }

    const cardBodyStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
    }

    const textStyle = {
        fontSize: '15px',
        textAlign: 'justify',
    }

    return (
        <Card style={cardStyle}>
            <Card.Img variant="top" src={image} style={imageStyle} />
            <Card.Body style={cardBodyStyle}>
                <div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text style={textStyle}>{text}</Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}

// PROP TYPES
CardComponent.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
}

// DEFAULT PROP TYPES
CardComponent.defaultProps = {
    image: 'No image',
    title: 'No title',
    text: 'No text',
    buttonText: 'No button text',
}



export default CardComponent