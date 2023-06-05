
// Agafar ids
var existingSvg = document.getElementById('canvas');
var draw = SVG.adopt(existingSvg);
var name_input = document.getElementById('name_input');
var text = draw.text("");
var text2 = draw.text("");

var fontSize = document.getElementById('fontSize');
var font = document.getElementById('font');
var bt_download = document.getElementById('bt_download');

/* 
function centerFigure(){
    var svgWidth = draw.width();
    var svgHeight = draw.height();
    var figuraWidth = figura.bbox().width;
    var figuraHeight = figura.bbox().height;
    //figura.move((svgWidth-figuraWidth*0.2)/2, (svgHeight-figuraHeight*0.6)/2);
    figura.move((svgWidth-figuraWidth)/2, (svgHeight-figuraHeight)/2);
    figura.attr({ 'text-anchor': 'middle', 'dominant-baseline': 'middle' });
}
function centerContorn(){
    var svgWidth = draw.width();
    var svgHeight = draw.height();
    var figuraWidth = contorn.bbox().width;
    var figuraHeight = contorn.bbox().height;
    contorn.move((svgWidth-figuraWidth)/2, (svgHeight-figuraHeight)/2);
    contorn.attr({ 'text-anchor': 'middle', 'dominant-baseline': 'middle' });
}


var fontSizeValue = document.getElementById('fontSize').value;
var contorn = draw.polygon('50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40');
//var contorn = draw.rect(100, 100);
contorn.size((parseInt(fontSizeValue)+50).toString(),(parseInt(fontSizeValue)+50).toString());
contorn.attr({fill:'#fff'});
contorn.stroke({color: 'black'});

var figura = draw.polygon('50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40');
//var figura = draw.rect(100, 100);
//figura.fill();
figura.stroke({ color: 'black' });
figura.size(fontSizeValue,fontSizeValue);
figura.attr({fill:'#fff'});
centerContorn()
centerFigure()  */










// Listener download
bt_download.addEventListener('click', function(){
    var ns = document.getElementById('canvas');

    // Create Blob object
    var svgData = new XMLSerializer().serializeToString(ns);
    var blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });

    // Create URL for Blob
    var blobUrl = URL.createObjectURL(blob);

    // Create download link
    var link = document.createElement("a");
    link.href = blobUrl;
    var name = document.getElementById('name_input').value;
    name = name.toLowerCase();
    link.download = name+".svg";

    // Add document link to document to start de download
    document.body.appendChild(link);
    link.click();

    // Clean URL object
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);

});


function changePosition(draw, text, from){
    var svgWidth = draw.width();
    var svgHeight = draw.height();
    // text
    var textWidth = text.bbox().width;
    var textHeight = text.bbox().height;
    if(from == "name_input"){
        text.move(((svgWidth-textWidth)/2)+(textWidth/2), ((svgHeight-textHeight)/2)-(textHeight/2));
    }else{
        text.move(((svgWidth-textWidth)/2), ((svgHeight-textHeight)/2));
    }
    //text.move(((svgWidth-textWidth)/2), ((svgHeight-textHeight)/2));
    text.attr({ 'text-anchor': 'middle', 'dominant-baseline': 'middle' });
    // text2
    /* var text2Width = text2.bbox().width;
    var text2Height = text2.bbox().height;
    if(from == "name_input"){
        text2.move(((svgWidth-text2Width)/2)+(text2Width/2), ((svgHeight-text2Height)/2)-(text2Height/2));
    }else{
        text2.move(((svgWidth-text2Width)/2), ((svgHeight-text2Height)/2));
    }
    text2.attr({ 'text-anchor': 'middle', 'dominant-baseline': 'middle' }); */
};


// Listener text field
name_input.addEventListener('input', function(){   
    var textValue = document.getElementById('name_input').value;
    var valueSize = document.getElementById('fontSize').value;
    var valueFont = document.getElementById('font').value;

    text2.clear()
    text2 = draw.text(textValue);
    text2.move(0, 0).font({ fill: '#f06', family: valueFont, size: parseInt(valueSize)+20 });
    text2.attr({fill:'#fff'});
    text2.stroke({color:'black'});

    text.clear();
    text = draw.text(textValue);
    text.move(0, 0).font({ fill: '#f06', family: valueFont, size: valueSize });
    text.attr({fill:'#fff'});
    text.stroke({color:'black'});

    

    changePosition(draw, text, "name_input");
    changePosition(draw, text2, "name_input");

});


// Listener font size
fontSize.addEventListener('change', function(){
    var fontSizeValue = this.value;
    text.font({size: fontSizeValue});
    changePosition(draw, text, "fontSize");
});

// Listener font
font.addEventListener('change', function(){
    var fontValue = document.getElementById('font').value;
    text.font({family:fontValue});
    changePosition(draw, text, "font");
});