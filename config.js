var config = {
     style: 'mapbox://styles/xbitrix/cmchxriqx008d01sbfaqe2oia',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoieGJpdHJpeCIsImEiOiJjbWNoeGttbHMwYXlsMmtwZGo2aTV4aHByIn0.yy29dK5sMipBg2oJ6JsSpg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '¿Hay lobos en mi pueblo?',
    subtitle: 'Estudio de la presencia del lobo ibérico en Riofrío, Ávila',
    byline: 'Por Beatriz Matías',
    footer: 'Source: MITECO, Junta de Castilla y León, EPM. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Ávila',
            image: './assets/Riofrío_Ávila_1.JPG',
            description: 'Siempre han existido historias de lobos en mi pueblo, pero nadie dice haber visto a ninguno en la sierra. <br>En el último censo regional de Castilla y León realizado en 2023 se identificaron en Ávila 15 manadas de un total de 193 en la Comunidad Autónoma. <br> ¿Es posible que, en 2025, el lobo aparezca en la comarca? </br> ',
            location: {
                center: [ -4.708627411114946, 40.67229892680223],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Riofrío',
            image: './assets/Lobo_ibérico.png',
            description: 'Riofrío es un pueblo de 200 habitantes, situado en el centro del Valle Amblés y la Sierra de la Paramera. <br>  <br> Desde que se inició el proyecto de monitorización en el año 2000, la población del lobo ibérico en Ávila ha pasado <strong>de 2 a 15 manadas en 14 años</strong>.',
            location: {
                center: [ -4.776014438175196,40.551499755233465],
                zoom: 8.5,
                pitch: 60,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Censo regional',
            image: './assets/censo-mapa.jpeg',
            description: ' La imagen muestra la presencia de <strong>manadas en toda la Comunidad Autónoma</strong>. Este censo se ha realizado gracias al esfuerzo de 146 estaciones de observación. Pese al aumento generalizado, la cifra de manadas está lejos de las 500 necesarias para garantizar la viabilidad genética del carnívoro.',
            location: {
                center: [ -4.741521483290171, 41.817660601183775],
                zoom: 6.5,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Mapa EPM Ataques de Lobos',
            image: './assets/mapa-epm-ataques-lobos.png',
            description: 'Del lado contrario a los científicos, se encuentran los ganaderos y habitantes del mundo rural en toda Europa. Un grupo de ganaderos franceses de la zona de los Vosgos ha creado un mapa interactivo en el que cualquier ganadero puede registrar, de manera rápida y sencilla, los ataques que sufren. La imagen muestra los ataques geolocalizados en ese mapa en los alrededores de mi pueblo.<br>. Según los sucesos registrados en este mapa, el lobo vive en  la comarca del valle y quizá algún día, alguien pueda decir: ¡sí, yo sí he visto al lobo en nuetsra sierra!.
             <a href="https://ep-map.com/map" title="Link title">Mapa de ataques del lobo en Europa</a> ',
            location: {
                center: [ -2.8175058540464875, 49.54826528088873],
                zoom: 4.5,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
