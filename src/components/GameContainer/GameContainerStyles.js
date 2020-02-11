import { StyleSheet } from 'aphrodite'; 

export const styles = StyleSheet.create({
    containerBounds: {
        overflowY: 'scroll', 
        overflowX: 'hidden', 
        maxHeight: '81.5vh',
        '::-webkit-scrollbar': {
            WebkitAppearance: 'none',
            width: 8
        },
        '::-webkit-scrollbar-thumb': {
            backgroundColor: '#ffc501', 
            borderRadius: 8, 
            borderWidth: 1, 
            borderStyle: 'solid', 
            borderColor: '#ffc501', 
            borderImage: 'initial'
        },
        '::-webkit-scrollbar-track': {
            backgroundColor: '#ffc5010d',
            borderRadius: 8,
            borderColor: "#ffc501", 
            borderWidth: 0.5
        }
    }
});