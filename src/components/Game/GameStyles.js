import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
    buyInText: {
        color: "#FAC51C",
        fontFamily: 'SF Pro Text Medium',
        fontSize: 15,
        letterSpacing: 0.79,
        textAlign: "center",
        marginTop: 6
    },
    enteredPlayersSVG: {
        transform: "rotate(-65deg)",
        marginTop: "-133%"
    },
    enteredPlayersSVG2: {
        transform: "rotate(-63deg)",
        marginTop: "-133%"
    },
    enteredPlayersSVG3: {
        transform: "rotate(-61deg)",
        marginTop: "-133%"
    },
    enteredPlayersSVG4: {
        transform: "rotate(-59deg)",
        marginTop: "-133%"
    },
    enteredPlayersText: {
        fontSize: 13,
        fill: "#FFC100",
        letterSpacing: 0.68,
        fontFamily: 'SF Pro Text Medium'
    },
    enteredValueText: {
        fontSize: 13,
        color: "#FFC100",
        letterSpacing: 0.68,
        fontFamily: 'SF Pro Text Medium',
        marginTop: '-9.5%'
    },
    fillTextPaths: {

    },
    gameBodyBase: {
        position: "absolute",
        marginLeft: "-6.9%",
        marginTop: "-5%"
    },
    gameBodyshadow: {
        boxSizing: "border-box",
        height: 271,
        width: 271,
        // border: "15px solid #FAC51C", 
        borderRadius: 400,
        backgroundColor: "transparent",
        // boxShadow: "0 2px 4px 0 rgba(0,0,0,0.25), 0 4px 16px 2px rgba(0,0,0,0.25)",
        textAlign: "center",
        position: "relative"
    },
    gameBodyWrapper: {
        position: "relative",
        zIndex: "100000"
    },
    gameCard: {
        background: "none",
        border: "none",
        borderRadius: "none",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50
    },
    gameFooter: {
        background: "none",
        border: "none",
        marginTop: 35
    },
    gameHashMarks: {
        zIndex: "10000",
        position: "absolute",
        top: "0",
        left: "0"
    },
    joinGameButton: {
        background: "linear-gradient(270deg, #FFE300 0%, #FFC500 100%)",
        height: 56,
        width: 176,
        border: "none",
        borderRadius: 8,
        fontFamily: 'SF Pro Text Heavy',
        fontWeight: "bold",
        fontSize: 15,
        letterSpacing: 0.79,
        color: "#3A3933",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,0.16), 0 4px 16px 2px rgba(0,0,0,0.16)",
        ":focus:active": {
            boxShadow: "0 0 0 0.25rem #50504a"
        }
    },
    noSelect: {
        WebkitTouchCallout: 'none', /* iOS Safari */
        WebkitUserSelect: 'none', /* Safari */
        KhtmlUserSelect: 'none', /* Konqueror HTML */
        MozUserSelect: 'none', /* Old versions of Firefox */
        MsUserSelect: 'none', /* Internet Explorer/Edge */
        userSelect: 'none' /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
    },
    prizeText: {
        display: "inline-block",
        color: "#FFC400",
        fontSize: 19,
        fontWeight: "300",
        letterSpacing: 1,
        textAlign: "center",
        fontFamily: 'SF Pro Text Light'
    },
    prizeTextContainer: {
        position: "relative",
        top: "25%"
    },
    prizeValue: {
        fontSize: 50,
        letterSpacing: -2,
        textAlign: "center",
        background: "linear-gradient(to right, #efba00, #ffde01)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontFamily: 'SF Pro Text Heavy',
        marginBottom: -10
    },
    progressBorderSVG: {
        height: 275,
        width: 275,
        marginTop: "-50%",
        marginLeft: "-9%",
        transform: "rotate(90deg)"
    },
    remainingSlots: {
        color: "#FAC51C",
        fontFamily: 'SF Pro Text Medium',
        fontSize: 15,
        letterSpacing: 0.79,
        textAlign: "center"
    },
    remainingSlotsOpaque: {
        opacity: 0.25,
        color: "#FAC51C",
        fontFamily: 'SF Pro Text Medium',
        fontSize: 15,
        letterSpacing: 0.79,
        textAlign: "center"
    }
});

