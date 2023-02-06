const container = document.getElementById('container');
const canvas = document.getElementById('canvas1');
const file = document.getElementById('fileUpload');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
ctx.lineCap = 'round';
let audioSource;
let analyser;



// button1.addEventListener('click',function(){

// });

//function doStuff(analyser, audioSource){
    file.addEventListener('change', function(){
    const files = this.files;
    const audio1 = document.getElementById('audio1');
    audio1.src = URL.createObjectURL(files[0]);
    const audioContext = new AudioContext();
    audio1.load();
    audio1.play();

    audioSource = audioContext.createMediaElementSource(audio1);
    analyser = audioContext.createAnalyser();
    audioSource.connect(analyser);
    analyser.connect(audioContext.destination);
    analyser.ffSize = 2048;
    const bufferLength = analyser.frequencyBinCount; // /4    //half of ffSize
    const dataArray = new Uint8Array(bufferLength);

    const barWidth = (canvas.width/2)/bufferLength;
    let barHeight;
    let x;
    button1.addEventListener('click',function(){
        function animate(){
            x = 0;
            x2 = 0;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            analyser.getByteFrequencyData(dataArray);
            //drawVisualizer(bufferLength, x, barWidth, barHeight, dataArray);
            drawVisualizer1(bufferLength, x, barWidth, barHeight, dataArray);
            requestAnimationFrame(animate);
        }
    animate(); 
    });
    button2.addEventListener('click',function(){
    function animate(){
        x = 0;
        x2 = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);
        //drawVisualizer(bufferLength, x, barWidth, barHeight, dataArray);
        drawVisualizer2(bufferLength, x, barWidth, barHeight, dataArray);
        requestAnimationFrame(animate);
    }
    animate(); 
});
button3.addEventListener('click',function(){
    function animate(){
        x = 0;
        x2 = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);
        //drawVisualizer(bufferLength, x, barWidth, barHeight, dataArray);
        drawVisualizer3(bufferLength, x, barWidth, barHeight, dataArray);
        requestAnimationFrame(animate);
    }
animate(); 
});
button4.addEventListener('click',function(){
    function animate(){
        x = 0;
        x2 = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);
        //drawVisualizer(bufferLength, x, barWidth, barHeight, dataArray);
        drawVisualizer4(bufferLength, x, barWidth, barHeight, dataArray);
        requestAnimationFrame(animate);
    }
animate(); 
});
button5.addEventListener('click',function(){
    function animate(){
        x = 0;
        x2 = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);
        //drawVisualizer(bufferLength, x, barWidth, barHeight, dataArray);
        drawVisualizer5(bufferLength, x, barWidth, barHeight, dataArray);
        requestAnimationFrame(animate);
    }
animate(); 
});
button6.addEventListener('click',function(){
    function animate(){
        x = 0;
        x2 = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);
        //drawVisualizer(bufferLength, x, barWidth, barHeight, dataArray);
        drawVisualizer6(bufferLength, x, barWidth, barHeight, dataArray);
        requestAnimationFrame(animate);
    }
animate(); 
});

button7.addEventListener('click',function(){
    function animate(){
        x = 0;
        x2 = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);
        //drawVisualizer(bufferLength, x, barWidth, barHeight, dataArray);
        drawVisualizer7(bufferLength, x, barWidth, barHeight, dataArray);
        requestAnimationFrame(animate);
    }
animate(); 
});


});

window.addEventListener('resize', function()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    animate();
});
//}



// button1.addEventListener('click',function(){
//     doStuff(analyser, audioSource);

// });
// button2.addEventListener('click',function(){
//     doStuff();
// });



// button1.addEventListener('click',function(bufferLength, x, barWidth, barHeight, dataArray){
//     console.log('clicky1');
//     drawVisualizer1(bufferLength, x, barWidth, barHeight, dataArray);
// });
// button2.addEventListener('click',function(analyzer, bufferLength, x, barWidth, barHeight, dataArray){
//     console.log('clicky2');
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     analyser.getByteFrequencyData(dataArray);
//     drawVisualizer2(bufferLength, x, barWidth, barHeight, dataArray);
// });



function drawVisualizer1(bufferLength, x, barWidth, barHeight, dataArray){
    for(let i = 0; i < bufferLength; i++){
        barHeight = dataArray[i];
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(i + Math.PI * 2 / bufferLength);
        const hue = i;
        ctx.fillStyle = "hsl(" + hue + ',100%, 50%)';//"#00203FFF";//"white"
        ctx.fillRect(100, -100, barWidth*25, barHeight*3);
        x += barWidth;
        //ctx.fillStyle = 'white';
        //ctx.fillRect(96 , 0-barHeight/10, barWidth*2, 5);
        ctx.restore();
    }
    // ctx.beginPath();
    // //ctx.fillStyle = 'white';
    // ctx.arc(canvas.width/2, canvas.height/2, 100, 0*Math.PI, 2 * Math.PI);
    // ctx.lineWidth = 5;
    // ctx.strokeStyle = 'white';
    // //ctx.fill();
    // ctx.stroke();

    ctx.font = "100px Arial";
    ctx.fillStyle = '#30DFF2';
    ctx.textAlign = 'center';
    ctx.fillText("S",canvas.width/2-30, canvas.height/2+32);
    ctx.fillStyle = '#EF44F2';
    ctx.fillText("Z",canvas.width/2+30, canvas.height/2+32);

}
    
function drawVisualizer2(bufferLength, x, barWidth, barHeight, dataArray){
    for(let i = 0; i < bufferLength; i++){
        barHeight = dataArray[i]*1.5;
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(i * Math.PI * 2 / bufferLength);
        const hue = i;

        // dual squirl + logo    
        ctx.fillStyle = "#EF44F2";//"#00203FFF";//"white"
        ctx.fillRect(-100, -x, barWidth , -barHeight);
        
        ctx.fillStyle = "#30DFF2";//"#ADEFD1FF"; //'rgb(' + red + ',' + green + ',' + blue + ')';
        ctx.fillRect(100, x, barWidth, barHeight);
        
        x += barWidth;
        ctx.restore();
    }
    ctx.font = "100px Arial";
    ctx.fillStyle = '#30DFF2';
    ctx.textAlign = 'center';
    ctx.fillText("S",canvas.width/2-30, canvas.height/2+32);
    ctx.fillStyle = '#EF44F2';
    ctx.fillText("Z",canvas.width/2+30, canvas.height/2+32);
}
   
function drawVisualizer3(bufferLength, x, barWidth, barHeight, dataArray){ //fix the number of bars and such, thickness...
    for(let i = 0; i < bufferLength; i++){
        barHeight = dataArray[i]*2;
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(i + Math.PI * 2 / bufferLength);
        const red = i * barHeight/2;
        const green = i/2;
        const blue = barHeight;
    // cool circle with SZ initials
        
    //inner circle
        // ctx.fillStyle = 'white';
        // ctx.fillRect(x/12 , canvas.height/10 - barHeight/10, barWidth*2, 10);
    
    //white lines on the outer bars
        ctx.fillStyle = 'white';
        ctx.fillRect(x, canvas.height - barHeight - 50, barWidth*20,  barHeight/50);
    //outer bars 
        ctx.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
        ctx.fillRect(x, canvas.height - barHeight, barWidth*20, barHeight);
       
        x += barWidth;
        ctx.restore();
    }
    ctx.font = "100px Arial";
    ctx.fillStyle = '#30DFF2';
    ctx.textAlign = 'center';
    ctx.fillText("S",canvas.width/2-30, canvas.height/2+32);
    ctx.fillStyle = '#EF44F2';
    ctx.fillText("Z",canvas.width/2+30, canvas.height/2+32);  
}

function drawVisualizer4(bufferLength, x, barWidth, barHeight, dataArray){ //fix the number of bars and such, thickness...
    //for bar visualizer
    for(let i = 0; i < bufferLength; i++){
        barHeight = dataArray[i]*2;
        const red = i * barHeight/50;
        const green = i*2;
        const blue = barHeight/3;
        ctx.fillStyle = 'white';
        ctx.fillRect(x*20, canvas.height - barHeight - 10, barWidth*20, -20);
        ctx.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
        ctx.fillRect(x*20, canvas.height - barHeight, barWidth*20, barHeight);
        x += barWidth;
    }
    ctx.font = "100px Arial";
    ctx.fillStyle = '#30DFF2';
    ctx.textAlign = 'center';
    ctx.fillText("S",canvas.width/2-30, canvas.height/2+32);
    ctx.fillStyle = '#EF44F2';
    ctx.fillText("Z",canvas.width/2+30, canvas.height/2+32);  
}

function drawVisualizer5(bufferLength, x, barWidth, barHeight, dataArray){ 
    for(let i = 0; i < bufferLength; i++){
        barHeight = dataArray[i];
        // const red = i * barHeight/50;
        // const green = i*2;
        // const blue = barHeight/3;
        ctx.fillStyle = '#30DFF2';
        ctx.fillRect(x*20, canvas.height - 380, barWidth*4,-barHeight);
        ctx.fillStyle = '#EF44F2';
        ctx.fillRect(x*20, canvas.height - 380, barWidth*4, barHeight);
        //ctx.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
        //ctx.fillRect(x*20, canvas.height - barHeight, barWidth*20, barHeight);
        x += barWidth;
    }
    ctx.font = "100px Arial";
    ctx.fillStyle = '#30DFF2';
    ctx.textAlign = 'center';
    ctx.fillText("S",canvas.width/2-30, canvas.height/2+32);
    ctx.strokeText("S",canvas.width/2-30, canvas.height/2+32);
    ctx.fillStyle = '#EF44F2';
    ctx.fillText("Z",canvas.width/2+30, canvas.height/2+32);
    ctx.strokeText("Z",canvas.width/2+30, canvas.height/2+32);

}

function drawVisualizer6(bufferLength, x, barWidth, barHeight, dataArray){
    for(let i = 0; i < bufferLength; i++){
        barHeight = dataArray[i];
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(i + Math.PI * 2 / bufferLength);
        const hue = i;
        const red = i * barHeight/2;
        const green = i/2;
        const blue = barHeight;

        ctx.fillStyle = "hsl(" + hue/2 + ',100%, 50%)';
        //ctx.fillStyle = 'white';x/20 , -canvas.height/9 - barHeight*1.5, barWidth*20, 10
        ctx.fillRect(x/20, -canvas.height/9 - barHeight*1.5, barWidth*20 - barHeight, 10 - barHeight);
        
        //ctx.fillStyle = 'white';
        //ctx.fillRect(x/10 - barHeight , -400 - barHeight, barWidth*2 - barHeight/4, 10 - barHeight/4);
        // ctx.fillStyle = "#EF44F2";//"#00203FFF";//"white" -canvas.height/9 - barHeight*4
        // ctx.fillRect(-100, x, canvas.height - barWidth , barHeight);
        
        //ctx.fillStyle = "#1D1A73";//"#ADEFD1FF"; //'rgb(' + red + ',' + green + ',' + blue + ')';
        //ctx.fillRect(100, x, barWidth, barHeight);
        
        x += barWidth;
        ctx.restore();
    }
    ctx.font = "100px Arial";
    ctx.fillStyle = '#30DFF2';
    ctx.textAlign = 'center';
    ctx.fillText("S",canvas.width/2-30, canvas.height/2+32);
    ctx.fillStyle = '#EF44F2';
    ctx.fillText("Z",canvas.width/2+30, canvas.height/2+32);
}

function drawVisualizer7(bufferLength, x, barWidth, barHeight, dataArray){
    for(let i = 0; i < bufferLength; i++){
        //ctx.beginPath();
        barHeight = dataArray[i]*2;
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(i * 4.184);
         const hue = 120 + i * 0.05;

        ctx.fillStyle = "hsl(" + hue + ',100%, 50%)';
        
        ctx.beginPath();
        ctx.arc(x, barHeight/2, barHeight/2, 0, Math.PI/4);
        ctx.fill();
        ctx.stroke();

        x += barWidth;
        ctx.restore();
    }
    ctx.closePath();
    ctx.font = "100px Arial";
    ctx.fillStyle = '#30DFF2';
    ctx.textAlign = 'center';
    ctx.fillText("S",canvas.width/2-30, canvas.height/2+32);
    ctx.fillStyle = '#EF44F2';
    ctx.fillText("Z",canvas.width/2+30, canvas.height/2+32);
}

// function drawVisualizer8(bufferLength, x, barWidth, barHeight, dataArray){
//     for(let i = 0; i < bufferLength/3.7; i++){
//         //ctx.beginPath();
//         barHeight = dataArray[i];
//         ctx.save();
//         ctx.translate(canvas.width/2, canvas.height/2);
//         ctx.rotate(i * bufferLength*3.7 );
//         const hue = 250 + i;

//         ctx.lineWidth = 20;

//         ctx.strokeStyle = "hsl(" + hue + ',100%, 50%)';
//         ctx.beginPath();
//         //ctx.moveTo(canvas.width/2, canvas.height/2);
//         ctx.bezierCurveTo(i,0, barWidth*1,barHeight*10, barHeight - i,0);//i,0,barwidth*1,barHeight*10,0,0
//         //  ctx.bezierCurveTo(100,100,barWidth,barHeight*2,100,x);

//         ctx.stroke();

//         x += barWidth;
//         ctx.restore();
//     }
//     ctx.font = "100px Arial";
//     ctx.fillStyle = '#30DFF2';
//     ctx.textAlign = 'center';
//     ctx.fillText("S",canvas.width/2-30, canvas.height/2+32);
//     ctx.strokeText("S",canvas.width/2-30, canvas.height/2+32);
//     ctx.fillStyle = '#EF44F2';
//     ctx.fillText("Z",canvas.width/2+30, canvas.height/2+32);
//     ctx.strokeText("Z",canvas.width/2+30, canvas.height/2+32);

// }


