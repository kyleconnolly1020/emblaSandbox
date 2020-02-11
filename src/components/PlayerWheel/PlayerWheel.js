import React, { useState, useEffect, useCallback } from 'react';
import EmblaCarouselReact from 'embla-carousel-react';

import { Container, Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux';


import { css } from 'aphrodite';
import { styles } from './PlayerWheelStyles.js';


const PlayerWheel = ({ children }) => {
    const [embla, setEmbla] = useState(null);
    const scrollPrev = useCallback(() => embla.scrollPrev(), [embla])
    const scrollNext = useCallback(() => embla.scrollNext(), [embla])  

    useEffect(() => {
        if (embla) {
            embla.on('select', () => {
                console.log(`Current index is ${embla.selectedScrollSnap() + 1}`);
            })
        }
    }, [embla]);

    return (
        <div>
            <div className={css(styles.embla)}>
                <EmblaCarouselReact
                    className={css(styles.embla__viewport)}
                    emblaRef={setEmbla}
                    options={{ loop: true }}
                    htmlTagName="div"
                >
                    <div className={css(styles.embla__container)}>
                        {children.map((Child, index) => (
                            <div className={css(styles.embla__slide)} key={index}>
                                <div className={css(styles.embla__slide__inner)}>{Child}</div>
                            </div>
                        ))}
                    </div>
                </EmblaCarouselReact>
                <button onClick={scrollPrev}>Prev</button>
                <button onClick={scrollNext}>Next</button>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps, {

}
)(PlayerWheel); 