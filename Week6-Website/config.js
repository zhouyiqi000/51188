var config = {
    style: 'mapbox://styles/e1353209/cm847n8g6001t01sb1hnl23pw/draft',
    accessToken: 'pk.eyJ1IjoiZTEzNTMyMDkiLCJhIjoiY202cmJrNXVlMXoxbzJqb3E4Nm92cWVzeCJ9.AqCrwUwuSRwEIIfFQha3rw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'How Accessible is Public Transport for Singapore Residents?',
    subtitle: 'Evaluating MRT and Bus Reachability from HDBs',
    byline: 'By Zhou Yiqi',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: "Singapore's Public Transport System",
            description: '<br>Singapore has a well-established public transport system, including MRT and buses, covering most parts of the country. The government is committed to improving the accessibility of its residents through the ‘10-minute walk to MRT station’ policy.<br><br><img src="images/legend1.png" style="height:200%;width:200px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'HDBs',
                    opacity: 0
                },
                {
                    layer: 'MRT station buffer',
                    opacity: 1               
                },
                {
                    layer: 'MRT station',
                    opacity: 1                
                },
                {
                    layer: 'bus stops buffer',
                    opacity: 1
                },
                {
                    layer: 'bus stops',
                    opacity: 1                
                },
            ],
            onChapterExit: [
                {
                    layer: 'HDBs',
                    opacity: 1
                },
                {
                    layer: 'MRT station buffer',
                    opacity: 0.7               
                },
                {
                    layer: 'MRT station',
                    opacity: 1                
                },
                {
                    layer: 'bus stops buffer',
                    opacity: 0.7
                },
                {
                    layer: 'bus stops',
                    opacity: 1                
                },
            ]
        },
        {
            id: 'second-container',
            alignment: 'right',
            hidden: false,
            title: 'MRT and bus accessibility',
            description: 'Accessibility to MRT stations and bus stops was analysed using 500m and 800m buffers to assess how easy it is for residents to reach public transport on foot. The data visualisation provides a visual representation of public transport coverage in residential areas and identifies areas with poor walkability.<br><br><img src="images/legend2.png" style="height:80%; width:200px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 11.5,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'HDBs',
                    opacity: 1
                },
                {
                    layer: 'MRT station buffer',
                    opacity: 1               
                },
                {
                    layer: 'MRT station',
                    opacity: 1                
                },
                {
                    layer: 'bus stops buffer',
                    opacity: 1
                },
                {
                    layer: 'bus stops',
                    opacity: 1                
                },
            ],
            onChapterExit: [
                {
                    layer: 'HDBs',
                    opacity: 1
                },
                {
                    layer: 'MRT station buffer',
                    opacity: 1               
                },
                {
                    layer: 'MRT station',
                    opacity: 1                
                },
                {
                    layer: 'bus stops buffer',
                    opacity: 1
                },
                {
                    layer: 'bus stops',
                    opacity: 1                
                },
            ],
        },
        {
            id: 'third-container',
            alignment: 'left',
            hidden: false,
            title: 'Walkability and Coverage Differences',
            description: 'MRT coverage is concentrated in the core urban area and some areas along the route, with suburban or more distant residential areas having difficulty in accessing MRT stations directly on foot. Buses have a wider coverage than MRT, but buses are not as fast as MRT.<br><br><img src="images/legend2.png" style="height:100%; width:200px;"></img>',
            location: {
                center: [103.85961, 1.29328],
                zoom: 13.4,
                pitch: 45,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 10, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'HDBs',
                    opacity: 1
                },
                {
                    layer: 'MRT station buffer',
                    opacity: 0.1               
                },
                {
                    layer: 'MRT station',
                    opacity: 1                
                },
                {
                    layer: 'bus stops buffer',
                    opacity: 0.2
                },
                {
                    layer: 'bus stops',
                    opacity: 1                
                },
            ],
            onChapterExit: [
                {
                    layer: 'HDBs',
                    opacity: 1
                },
                {
                    layer: 'MRT station buffer',
                    opacity: 0.1               
                },
                {
                    layer: 'MRT station',
                    opacity: 1                
                },
                {
                    layer: 'bus stops buffer',
                    opacity: 0.1
                },
                {
                    layer: 'bus stops',
                    opacity: 1                
                },
            ]
        },
        {
            id: 'forth-container',
            alignment: 'right',
            hidden: false,
            title: "Residents' Commuting Experience'",
            description: 'MRT is faster and has short intervals. Buses are slower and the length of the commute is uncertain as transfers take time to wait for the bus. Most of the time you can see the next bus you need to take leaving before.',
            location: {
                center: [103.78314, 1.29794],
                zoom: 13.4,
                pitch: 45,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 10, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'HDBs',
                    opacity: 1
                },
                {
                    layer: 'MRT station buffer',
                    opacity: 0.1               
                },
                {
                    layer: 'MRT station',
                    opacity: 1                
                },
                {
                    layer: 'bus stops buffer',
                    opacity: 0.2
                },
                {
                    layer: 'bus stops',
                    opacity: 1                
                },
            ],
            onChapterExit: [
                {
                    layer: 'HDBs',
                    opacity: 1
                },
                {
                    layer: 'MRT station buffer',
                    opacity: 0.1               
                },
                {
                    layer: 'MRT station',
                    opacity: 1                
                },
                {
                    layer: 'bus stops buffer',
                    opacity: 0.1
                },
                {
                    layer: 'bus stops',
                    opacity: 1                
                },
            ]
        }
    ]
};