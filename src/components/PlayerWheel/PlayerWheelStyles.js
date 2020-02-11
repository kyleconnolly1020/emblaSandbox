import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
    embla: {
        position: 'relative'
    },
    embla__viewport: { 
        overflow: 'hidden'
    },
    embla__container: {
        display: 'flex', 
        willChange: 'transform', 
        marginLeft: '-1rem'
    },
    embla__slide: {
        flex: '0 0 auto', 
        width: 120, 
        heigth: 120, 
        position: 'relative', 
        paddingLeft: '1rem', 
        counterIncrement: 'embla'
    }, 
    embla__slide__inner: {
        backgroundColor: 'rgb(40, 44, 52)', 
        position: 'relative', 
        borderRadius: '0.5rem', 
        paddingBottom: '46%' , 
        fontSize: '2rem'
    }
}); 