// Hotspots definition (all the custom positions you want to highlight/ showcase)
const hotspots = [
    {
        position:[0,1,0],
        target:{x:0,y:2,z:5},
        title:"Full view",
        description:"Complete 360° look at the product — overall fit, form and detailing.t"
    },
    {
        position:[0,0.5,0.5],
        target:{x:0,y:1,z:5},
        title:"front view",
        description:" Front design highlighted with premium detailing and clean texture work."
    },
    {
        position:[-0.5,0.5,0],
        target:{x:-3,y:1,z:0},
        title:" left view",
        description:"left profile showcasing stitching precision and fabric structure."
    },
    {
        position:[0.5,0.5,0],
        target:{x:3,y:1,z:0},
        title:" right view",
        description:" Right-side angles focusing on sleeve design, shape and overall symmetry."
    },
    {
        position:[0.5,0.5,-0.5],
        target:{x:0,y:1,z:-4},
        title:" back view",
        description:" Back panel overview displaying fit, neckline finish and rear detailing"
    }
];

export default hotspots;
