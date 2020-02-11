export const data = [
    {
        "gameid": "1",
        "prizeValue": "$100", 
        //Amount required to enter into the game (either direct payment or through ads value collection)
        "entryValue": 5,
        //Number of users required to fill the game
        "maxUsers": 20,
        //Has the game been completely filled
        "filled": false, 
        //Dollar amount that is currently collected
        "fillStatusFiat": "$80",
        //Number of users currently entered
        "fillStatusUsers": 16,
        //Whether or not the specicic user has enterd into the game (to either lock their entry in the UI or not)
        "userEntered": false, 
        //Cannon shots awarded for entry 
        "cannonsGiven": 5,
        //Array of player objects who are entered into the game 
        "players": [
            {
                "name": "Kyle Connolly"
            },
            {
                "name": "Christine Vadai"
            }
        ]
    },
    {
        "gameid": "2",
        "prizeValue": "$25", 
        "entryValue": 1,
        "maxUsers": 25,
        "filled": false, 
        "fillStatusFiat": "$7",
        "fillStatusUsers": 7,
        "userEntered": false, 
        "cannonsGiven": 2,
        "players": [
            {
                "name": "Kyle Connolly"
            },
            {
                "name": "Christine Vadai"
            }
        ]
    },
    {
        "gameid": "3",
        "prizeValue": "$1500", 
        "entryValue": 3,
        "maxUsers": 500,
        "filled": false, 
        "fillStatusFiat": "$1496",
        "fillStatusUsers": 498,
        "userEntered": false, 
        "cannonsGiven": 8,
        "players": [
            {
                "name": "Kyle Connolly"
            },
            {
                "name": "Christine Vadai"
            }
        ]
    },
    {
        "gameid": "4",
        "prizeValue": "$500", 
        "entryValue": 10,
        "maxUsers": 50,
        "filled": false, 
        "fillStatusFiat": "$200",
        "fillStatusUsers": 20,
        "userEntered": false, 
        "cannonsGiven": 5,
        "players": [
            {
                "name": "Kyle Connolly"
            },
            {
                "name": "Christine Vadai"
            }
        ]
    },
    {
        "gameid": "5",
        "prizeValue": "$25", 
        "entryValue": 1,
        "maxUsers": 25,
        "filled": false, 
        "fillStatusFiat": "$200",
        "fillStatusUsers": 22,
        "userEntered": true, 
        "cannonsGiven": 2,
        "players": [
            {
                "name": "Kyle Connolly"
            },
            {
                "name": "Christine Vadai"
            }
        ]
    },
];

