import { StyleSheet } from 'aphrodite'; 

export const styles = StyleSheet.create({
    fixedBoxContainer: {
        position: "relative", 
        height: "82vh", 
        width: 350,
        // width: '24.3vw', 
        backgroundColor: "#3A3934", 
        borderRadius: 8,
        boxShadow: "0 0 6px rgba(0,0,0,0.16), 0 6px 6px 0 rgba(0,0,0,0.16)",
    },
    homeContentRow: {
        minHeight: '100vh'
    },
    leaderBox: {
        marginLeft: 40
    },
    plndrViewContainer: {
        overflow: "hidden",
        maxHeight: '100vh'
    }
});