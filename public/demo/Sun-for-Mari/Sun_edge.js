/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'SUN',
                            type: 'group',
                            rect: ['113px', '13', '473', '473', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Shine2',
                                symbolName: 'Shine',
                                type: 'rect',
                                rect: ['0px', '0px', '473', '473', 'auto', 'auto'],
                                opacity: 0.90834603658537,
                                transform: [[],['360']]
                            },
                            {
                                id: 'Sun2',
                                symbolName: 'Sun',
                                type: 'rect',
                                rect: ['137', '137', '199', '199', 'auto', 'auto']
                            },
                            {
                                id: 'Smile',
                                type: 'image',
                                rect: ['184px', '192px', '106px', '115px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"25361.png",'0px','0px']
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '700px', '500px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(54,172,233,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: true,
                    data: [
                        [
                            "eid97",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${Shine2}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid110",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Shine2}",
                            '0.90834603658537',
                            '0.90834603658537'
                        ]
                    ]
                }
            },
            "Shine": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Shine',
                            rect: ['23px', '23px', '426', '426', 'auto', 'auto'],
                            transform: [[], ['360'], [], ['0.95', '0.95']],
                            c: [
                            {
                                transform: [[], ['22'], [0, 0, 0], [1, 1, 1]],
                                rect: ['206px', '0px', '14px', '426px', 'auto', 'auto'],
                                id: 'RectangleCopy8',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,233,24,1)']
                            },
                            {
                                type: 'rect',
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['206px', '0px', '14px', '426px', 'auto', 'auto'],
                                fill: ['rgba(255,233,24,1)']
                            },
                            {
                                transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                                rect: ['206px', '0px', '14px', '426px', 'auto', 'auto'],
                                id: 'RectangleCopy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,233,24,1)']
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['206px', '0px', '14px', '426px', 'auto', 'auto'],
                                id: 'RectangleCopy3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,233,24,1)']
                            },
                            {
                                transform: [[], ['135'], [0, 0, 0], [1, 1, 1]],
                                rect: ['206px', '0px', '14px', '426px', 'auto', 'auto'],
                                id: 'RectangleCopy4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,233,24,1)']
                            },
                            {
                                transform: [[], ['112'], [0, 0, 0], [1, 1, 1]],
                                rect: ['206px', '0px', '14px', '426px', 'auto', 'auto'],
                                id: 'RectangleCopy7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,233,24,1)']
                            },
                            {
                                transform: [[], ['68'], [0, 0, 0], [1, 1, 1]],
                                rect: ['206px', '0px', '14px', '426px', 'auto', 'auto'],
                                id: 'RectangleCopy6',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,233,24,1)']
                            },
                            {
                                transform: [[], ['157'], [0, 0, 0], [1, 1, 1]],
                                rect: ['206px', '0px', '14px', '426px', 'auto', 'auto'],
                                id: 'RectangleCopy5',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,233,24,1)']
                            },
                            {
                                rect: ['113px', '113px', '200px', '200px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'SkyBG',
                                stroke: [0, 'rgba(54,172,233,1.00)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(54,172,233,1)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '473px', '473px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid53",
                            "scaleX",
                            0,
                            500,
                            "easeInOutQuad",
                            "${Shine}",
                            '0.95',
                            '0.85'
                        ],
                        [
                            "eid56",
                            "scaleX",
                            500,
                            500,
                            "easeInOutQuad",
                            "${Shine}",
                            '0.85',
                            '0.95'
                        ],
                        [
                            "eid55",
                            "scaleY",
                            0,
                            500,
                            "easeInOutQuad",
                            "${Shine}",
                            '0.95',
                            '0.85'
                        ],
                        [
                            "eid57",
                            "scaleY",
                            500,
                            500,
                            "easeInOutQuad",
                            "${Shine}",
                            '0.85',
                            '0.95'
                        ]
                    ]
                }
            },
            "Sun": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '199px', '199px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,233,24,1.00)'],
                            id: 'Sun',
                            stroke: [0, 'rgba(54,172,233,1.00)', 'none'],
                            type: 'ellipse',
                            boxShadow: ['', 0, 0, 20, 0, 'rgba(255,251,0,0.65)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '199px', '199px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid106",
                            "boxShadow.blur",
                            0,
                            500,
                            "linear",
                            "${Sun}",
                            '100px',
                            '20px'
                        ],
                        [
                            "eid109",
                            "boxShadow.blur",
                            500,
                            500,
                            "linear",
                            "${Sun}",
                            '20px',
                            '100px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Sun_edgeActions.js");
})("EDGE-17980905");
