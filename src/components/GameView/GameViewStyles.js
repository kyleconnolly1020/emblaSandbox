import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
    accountInfoBox: {
        textAlign: 'right',
    },
    gameView: {
        height: '100vh',
        width: '100%',
        position: 'relative'
    },
    gameViewAccountInfo: {
        position: 'absolute', 
        right: '3%'
    },
    gameViewAccountValueText: {
        background: "linear-gradient(to right, #646461, rgb(127, 126, 121))",
        WebkitBackgroundClip: 'text', 
        WebkitTextFillColor: 'transparent',
        fontFamily: 'SF Pro Text Heavy', 
        letterSpacing: -0.47, 
        fontSize: 70,
        lineHeight: 1.2
    },
    gameViewBackButton: {
        marginLeft: '5%'
    },
    gameViewGameId: {
        color: "#8A8A8F", 
        fontFamily: 'SF Pro Text Heavy', 
        fontSize: 11, 
        letterSpacing: -0.07
    },
    gameViewGameInfo: {
        marginLeft: '3%',
    },
    gameViewInfoRow: {
        paddingTop: '2%',
        position: 'relative'
    },
    gameViewMyAccountText: {
        background: "linear-gradient(to right, #646461, rgb(127, 126, 121))",
        WebkitBackgroundClip: 'text', 
        WebkitTextFillColor: 'transparent',
        fontFamily: 'SF Pro Text Heavy', 
        fontSize: 25, 
        letterSpacing: -0.17, 
        
    },
    gameViewPrizeValueText: {
        background: "linear-gradient(to right, #efba00, #ffde01)",
        WebkitBackgroundClip: "text", 
        WebkitTextFillColor: "transparent",
        fontSize: 70, 
        letterSpacing: -0.47, 
        fontFamily: 'SF Pro Text Heavy',
        lineHeight: 1.2
    },
    gameViewTitle: {
        color: 'rgb(127, 126, 121)',
        fontFamily: 'SF Pro Text Heavy', 
        letterSpacing: 3.68,
        fontSize: 70
    },
    gameViewTitleRow: {
        width: '100vw', 
        position: 'absolute', 
        top: '2.5%', 
        display: 'flex', 
        justifyContent: 'center',
        zIndex: -1
    },
    gameViewTopBar: {
        paddingTop: '2.5%'
    },
    noSelect: {
        WebkitTouchCallout: 'none', /* iOS Safari */
        WebkitUserSelect: 'none', /* Safari */
        KhtmlUserSelect: 'none', /* Konqueror HTML */
        MozUserSelect: 'none', /* Old versions of Firefox */
        MsUserSelect: 'none', /* Internet Explorer/Edge */
        userSelect: 'none' /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
    }, 
    playForText: {
        color: '#fce010', 
        fontFamily: 'SF Pro Text Heavy', 
        fontSize: 25, 
        letterSpacing: -0.17
    }
}); 