let play = document.getElementById("play");
let play2 = document.getElementById("play2");
let progress = document.getElementById("progress");
let progressplay = document.getElementById("progressplay");
let song = document.getElementById("songAudio");
let currentimg = '.img1';
let currentPimg = '.img1';
var element;
let active;
let hover = 1;
let prev;

let songTitle = ['Hype Boy','Last Nite','battlecry','Moonage Daydream','Tomorrow Comes Today','Huwag Na Huwag Mong Sasabihin','Dancin (feat. Luvli)','Ob-La-Di, Ob-La-Da (2018 Mix)','Di Na Babalik (Extended Version)'];
let artistName = ['NewJeans','The Strokes','Nujabes','David Bowie','Gorillaz','Kitchie Nadal','Aaron Smith','The Beatles','Ang Bandang Shirley'];
let bgcolor = ['#e5e6ef','#b8aca2','#eaeffa','#d5a738','#5e893b','#e0f1b7','#ebd71b','#c0beb6','#ec8f55'];

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
    progressplay.max = song.duration;
    progressplay.value = song.currentTime;
    
    var min = Math.floor(progress.max / 60);
    var sec = Math.floor(progress.max % 60);

    if(sec < 10){
        sec = '0' + sec;
    }

    document.getElementById("maxdur").innerHTML = min + ':' + sec;
    document.getElementById("maxdur2").innerHTML = min + ':' + sec;
    
}

function song1(){
    song.pause();

    if(hover - 1 != 0){
        song = document.getElementById("songAudio");
        song.src = songTitle[0] + '.mp3';
        document.querySelector('.img1').style.opacity = '1';
        if(currentimg!='.img1'){
            document.querySelector(currentimg).style.opacity = '0';
        }
        currentimg = '.img1';
        document.querySelector('.pimg1').style.opacity = '1';
        if(currentPimg!='.pimg1'){
            document.querySelector(currentPimg).style.opacity = '0';
        }
        currentPimg = '.pimg1';
        document.getElementById("title1").innerHTML = 'Hype Boy';
        document.getElementById("artist1").innerHTML = 'NewJeans';
        document.getElementById("titlep").innerHTML = 'Hype Boy';
        document.getElementById("artistp").innerHTML = 'NewJeans';
        document.querySelector('.playing').style.backgroundColor = '#e5e6ef';

        progress.max = song.duration;
        progress.value = song.currentTime;
        
        var min = Math.floor(progress.max / 60);
        var sec = Math.floor(progress.max % 60);

        if(sec < 10){
            sec = '0' + sec;
        }

        document.getElementById("maxdur").innerHTML = min + ':' + sec;
        document.getElementById("maxdur2").innerHTML = min + ':' + sec;
    }

    if(document.getElementById("hoverpl1").classList.contains("fa-pause")){
        song.pause();
        document.getElementById("hoverpl1").classList.remove("fa-pause");
        document.getElementById("hoverpl1").classList.add("fa-play");
        play.classList.add("fa-play");
        play.classList.remove("fa-pause");
        play2.classList.add("fa-play");
        play2.classList.remove("fa-pause");
    }
    else{

        if(play.classList.contains("fa-pause")){
            song.play();
        }
        else{
            song.play();
            play.classList.add("fa-pause");
            play.classList.remove("fa-play");
            play2.classList.add("fa-pause");
            play2.classList.remove("fa-play");
        }
        
        if(hover != ""){
            document.getElementById("hoverpl" + hover).classList.remove("fa-pause");
            document.getElementById("hoverpl" + hover).classList.add("fa-play");
            document.getElementById("hoverpl" + hover).style.visibility = 'inherit';
            document.getElementById("num" + hover).style.opacity = '1';
        }
        document.getElementById("hoverpl1").classList.remove("fa-play");
        document.getElementById("hoverpl1").classList.add("fa-pause");
        document.getElementById("hoverpl1").style.visibility = 'visible';
        document.getElementById("num1").style.opacity = '0';
        hover = 1;
    }
    
    
}
function song2(){
    song.pause();

    if(hover - 1 != 1){
        song = document.getElementById("songAudio");
        song.src = songTitle[1] + '.mp3';
        document.querySelector('.img2').style.opacity = '1';
        if(currentimg!='.img2'){
            document.querySelector(currentimg).style.opacity = '0';
        }
        currentimg = '.img2';
        document.querySelector('.pimg2').style.opacity = '1';
        if(currentPimg!='.pimg2'){
            document.querySelector(currentPimg).style.opacity = '0';
        }
        currentPimg = '.pimg2';
        document.getElementById("title1").innerHTML = 'Last Nite';
        document.getElementById("artist1").innerHTML = 'The Strokes';
        document.getElementById("titlep").innerHTML = 'Last Nite';
        document.getElementById("artistp").innerHTML = 'The Strokes';
        document.querySelector('.playing').style.backgroundColor = '#b8aca2';

        progress.max = song.duration;
        progress.value = song.currentTime;
        
        var min = Math.floor(progress.max / 60);
        var sec = Math.floor(progress.max % 60);

        if(sec < 10){
            sec = '0' + sec;
        }

        document.getElementById("maxdur").innerHTML = min + ':' + sec;
        document.getElementById("maxdur2").innerHTML = min + ':' + sec;
        
    }

    if(document.getElementById("hoverpl2").classList.contains("fa-pause")){
        song.pause();
        document.getElementById("hoverpl2").classList.remove("fa-pause");
        document.getElementById("hoverpl2").classList.add("fa-play");
        play.classList.add("fa-play");
        play.classList.remove("fa-pause");
        play2.classList.add("fa-play");
        play2.classList.remove("fa-pause");
    }
    else{

        if(play.classList.contains("fa-pause")){
            song.play();
        }
        else{
            song.play();
            play.classList.add("fa-pause");
            play.classList.remove("fa-play");
            play2.classList.add("fa-pause");
            play2.classList.remove("fa-play");
        }
        
        if(hover != ""){
            document.getElementById("hoverpl" + hover).classList.remove("fa-pause");
            document.getElementById("hoverpl" + hover).classList.add("fa-play");
            document.getElementById("hoverpl" + hover).style.visibility = 'inherit';
            document.getElementById("num" + hover).style.opacity = '1';
        }
        document.getElementById("hoverpl2").classList.remove("fa-play");
        document.getElementById("hoverpl2").classList.add("fa-pause");
        document.getElementById("hoverpl2").style.visibility = 'visible';
        document.getElementById("num2").style.opacity = '0';
        hover = 2;
    }
    
}
function song3(){
    song.pause();
    
    if(hover - 1 != 2){
        song = document.getElementById("songAudio");
        song.src = songTitle[2] + '.mp3';
        document.querySelector('.img3').style.opacity = '1';
        if(currentimg!='.img3'){
            document.querySelector(currentimg).style.opacity = '0';
        }
        currentimg = '.img3';
        document.querySelector('.pimg3').style.opacity = '1';
        if(currentPimg!='.pimg3'){
            document.querySelector(currentPimg).style.opacity = '0';
        }
        currentPimg = '.pimg3';
        document.getElementById("title1").innerHTML = 'battlecry';
        document.getElementById("artist1").innerHTML = 'Nujabes';
        document.getElementById("titlep").innerHTML = 'battlecry';
        document.getElementById("artistp").innerHTML = 'Nujabes';
        document.querySelector('.playing').style.backgroundColor = '#eaeffa';

        progress.max = song.duration;
        progress.value = song.currentTime;
        
        var min = Math.floor(progress.max / 60);
        var sec = Math.floor(progress.max % 60);

        if(sec < 10){
            sec = '0' + sec;
        }

        document.getElementById("maxdur").innerHTML = min + ':' + sec;
        document.getElementById("maxdur2").innerHTML = min + ':' + sec;
    }

    if(document.getElementById("hoverpl3").classList.contains("fa-pause")){
        song.pause();
        document.getElementById("hoverpl3").classList.remove("fa-pause");
        document.getElementById("hoverpl3").classList.add("fa-play");
        play.classList.add("fa-play");
        play.classList.remove("fa-pause");
        play2.classList.add("fa-play");
        play2.classList.remove("fa-pause");
    }
    else{

        if(play.classList.contains("fa-pause")){
            song.play();
        }
        else{
            song.play();
            play.classList.add("fa-pause");
            play.classList.remove("fa-play");
            play2.classList.add("fa-pause");
            play2.classList.remove("fa-play");
        }
        if(hover != ""){
            document.getElementById("hoverpl" + hover).classList.remove("fa-pause");
            document.getElementById("hoverpl" + hover).classList.add("fa-play");
            document.getElementById("hoverpl" + hover).style.visibility = 'inherit';
            document.getElementById("num" + hover).style.opacity = '1';
        }
    
        document.getElementById("hoverpl3").classList.remove("fa-play");
        document.getElementById("hoverpl3").classList.add("fa-pause");
        document.getElementById("hoverpl3").style.visibility = 'visible';
        document.getElementById("num3").style.opacity = '0';
        hover = 3;
    }
}
function song4(){
    song.pause();
    
    if(hover - 1 != 3){
        song = document.getElementById("songAudio");
        song.src = songTitle[3] + '.mp3';
        document.querySelector('.img4').style.opacity = '1';
        if(currentimg!='.img4'){
            document.querySelector(currentimg).style.opacity = '0';
        }
        currentimg = '.img4';
        document.querySelector('.pimg4').style.opacity = '1';
        if(currentPimg!='.pimg4'){
            document.querySelector(currentPimg).style.opacity = '0';
        }
        currentPimg = '.pimg4';
        document.getElementById("title1").innerHTML = 'Moonage Daydream';
        document.getElementById("artist1").innerHTML = 'David Bowie';
        document.getElementById("titlep").innerHTML = 'Moonage Daydream';
        document.getElementById("artistp").innerHTML = 'David Bowie';
        document.querySelector('.playing').style.backgroundColor = '#d5a738';

        progress.max = song.duration;
        progress.value = song.currentTime;
        
        var min = Math.floor(progress.max / 60);
        var sec = Math.floor(progress.max % 60);

        if(sec < 10){
            sec = '0' + sec;
        }

        document.getElementById("maxdur").innerHTML = min + ':' + sec;
        document.getElementById("maxdur2").innerHTML = min + ':' + sec;
    }

    if(document.getElementById("hoverpl4").classList.contains("fa-pause")){
        song.pause();
        document.getElementById("hoverpl4").classList.remove("fa-pause");
        document.getElementById("hoverpl4").classList.add("fa-play");
        play.classList.add("fa-play");
        play.classList.remove("fa-pause");
        play2.classList.add("fa-play");
        play2.classList.remove("fa-pause");
    }
    else{

        if(play.classList.contains("fa-pause")){
            song.play();
        }
        else{
            song.play();
            play.classList.add("fa-pause");
            play.classList.remove("fa-play");
            play2.classList.add("fa-pause");
            play2.classList.remove("fa-play");
        }
        if(hover != ""){
            document.getElementById("hoverpl" + hover).classList.remove("fa-pause");
            document.getElementById("hoverpl" + hover).classList.add("fa-play");
            document.getElementById("hoverpl" + hover).style.visibility = 'inherit';
            document.getElementById("num" + hover).style.opacity = '1';
        }
    
        document.getElementById("hoverpl4").classList.remove("fa-play");
        document.getElementById("hoverpl4").classList.add("fa-pause");
        document.getElementById("hoverpl4").style.visibility = 'visible';
        document.getElementById("num4").style.opacity = '0';
        hover = 4;
    }
}
function song5(){
    song.pause();

    if(hover - 1 != 4){
        song = document.getElementById("songAudio");
        song.src = songTitle[4] + '.mp3';
        document.querySelector('.img5').style.opacity = '1';
        if(currentimg!='.img5'){
            document.querySelector(currentimg).style.opacity = '0';
        }
        currentimg = '.img5';
        document.querySelector('.pimg5').style.opacity = '1';
        if(currentPimg!='.pimg5'){
            document.querySelector(currentPimg).style.opacity = '0';
        }
        currentPimg = '.pimg5';
        document.getElementById("title1").innerHTML = 'Tomorrow Comes Today';
        document.getElementById("artist1").innerHTML = 'Gorillaz';
        document.getElementById("titlep").innerHTML = 'Tomorrow Comes Today';
        document.getElementById("artistp").innerHTML = 'Gorillaz';
        document.querySelector('.playing').style.backgroundColor = '#5e893b';

        progress.max = song.duration;
        progress.value = song.currentTime;
        
        var min = Math.floor(progress.max / 60);
        var sec = Math.floor(progress.max % 60);

        if(sec < 10){
            sec = '0' + sec;
        }

        document.getElementById("maxdur").innerHTML = min + ':' + sec;
        document.getElementById("maxdur2").innerHTML = min + ':' + sec;
    }

    if(document.getElementById("hoverpl5").classList.contains("fa-pause")){
        song.pause();
        document.getElementById("hoverpl5").classList.remove("fa-pause");
        document.getElementById("hoverpl5").classList.add("fa-play");
        play.classList.add("fa-play");
        play.classList.remove("fa-pause");
        play2.classList.add("fa-play");
        play2.classList.remove("fa-pause");
    }
    else{

        if(play.classList.contains("fa-pause")){
            song.play();
        }
        else{
            song.play();
            play.classList.add("fa-pause");
            play.classList.remove("fa-play");
            play2.classList.add("fa-pause");
            play2.classList.remove("fa-play");
        }
        if(hover != ""){
            document.getElementById("hoverpl" + hover).classList.remove("fa-pause");
            document.getElementById("hoverpl" + hover).classList.add("fa-play");
            document.getElementById("hoverpl" + hover).style.visibility = 'inherit';
            document.getElementById("num" + hover).style.opacity = '1';
        }
    
        document.getElementById("hoverpl5").classList.remove("fa-play");
        document.getElementById("hoverpl5").classList.add("fa-pause");
        document.getElementById("hoverpl5").style.visibility = 'visible';
        document.getElementById("num5").style.opacity = '0';
        hover = 5;
    }

}
function song6(){
    song.pause();

    if(hover - 1 != 5){
        song = document.getElementById("songAudio");
        song.src = songTitle[5] + '.mp3';
        document.querySelector('.img6').style.opacity = '1';
        if(currentimg!='.img6'){
            document.querySelector(currentimg).style.opacity = '0';
        }
        currentimg = '.img6';
        document.querySelector('.pimg6').style.opacity = '1';
        if(currentPimg!='.pimg6'){
            document.querySelector(currentPimg).style.opacity = '0';
        }
        currentPimg = '.pimg6';
        document.getElementById("title1").innerHTML = 'Huwag Na Huwag Mong Sasabihin';
        document.getElementById("artist1").innerHTML = 'Kitchie Nadal';
        document.getElementById("titlep").innerHTML = 'Huwag Na Huwag Mong Sasabihin';
        document.getElementById("artistp").innerHTML = 'Kitchie Nadal';
        document.querySelector('.playing').style.backgroundColor = '#e0f1b7';

        progress.max = song.duration;
        progress.value = song.currentTime;
        
        var min = Math.floor(progress.max / 60);
        var sec = Math.floor(progress.max % 60);

        if(sec < 10){
            sec = '0' + sec;
        }

        document.getElementById("maxdur").innerHTML = min + ':' + sec;
        document.getElementById("maxdur2").innerHTML = min + ':' + sec;
    }

    if(document.getElementById("hoverpl6").classList.contains("fa-pause")){
        song.pause();
        document.getElementById("hoverpl6").classList.remove("fa-pause");
        document.getElementById("hoverpl6").classList.add("fa-play");
        play.classList.add("fa-play");
        play.classList.remove("fa-pause");
        play2.classList.add("fa-play");
        play2.classList.remove("fa-pause");
    }
    else{

        if(play.classList.contains("fa-pause")){
            song.play();
        }
        else{
            song.play();
            play.classList.add("fa-pause");
            play.classList.remove("fa-play");
            play2.classList.add("fa-pause");
            play2.classList.remove("fa-play");
        }
        if(hover != ""){
            document.getElementById("hoverpl" + hover).classList.remove("fa-pause");
            document.getElementById("hoverpl" + hover).classList.add("fa-play");
            document.getElementById("hoverpl" + hover).style.visibility = 'inherit';
            document.getElementById("num" + hover).style.opacity = '1';
        }
    
        document.getElementById("hoverpl6").classList.remove("fa-play");
        document.getElementById("hoverpl6").classList.add("fa-pause");
        document.getElementById("hoverpl6").style.visibility = 'visible';
        document.getElementById("num6").style.opacity = '0';
        hover = 6;
    }
    
}
function song7(){
    song.pause();

    if(hover - 1 != 6){
        song = document.getElementById("songAudio");
        song.src = songTitle[6] + '.mp3';
        document.querySelector('.img7').style.opacity = '1';
        if(currentimg!='.img7'){
            document.querySelector(currentimg).style.opacity = '0';
        }
        currentimg = '.img7';
        document.querySelector('.pimg7').style.opacity = '1';
        if(currentPimg!='.pimg7'){
            document.querySelector(currentPimg).style.opacity = '0';
        }
        currentPimg = '.pimg7';
        document.getElementById("title1").innerHTML = 'Dancin (feat. Luvli)';
        document.getElementById("artist1").innerHTML = 'Aaron Smith ';
        document.getElementById("titlep").innerHTML = 'Dancin (feat. Luvli)';
        document.getElementById("artistp").innerHTML = 'Aaron Smith ';
        document.querySelector('.playing').style.backgroundColor = '#ebd71b';

        progress.max = song.duration;
        progress.value = song.currentTime;
        
        var min = Math.floor(progress.max / 60);
        var sec = Math.floor(progress.max % 60);

        if(sec < 10){
            sec = '0' + sec;
        }

        document.getElementById("maxdur").innerHTML = min + ':' + sec;
        document.getElementById("maxdur2").innerHTML = min + ':' + sec;
    }

    if(document.getElementById("hoverpl7").classList.contains("fa-pause")){
        song.pause();
        document.getElementById("hoverpl7").classList.remove("fa-pause");
        document.getElementById("hoverpl7").classList.add("fa-play");
        play.classList.add("fa-play");
        play.classList.remove("fa-pause");
        play2.classList.add("fa-play");
        play2.classList.remove("fa-pause");
    }
    else{

        if(play.classList.contains("fa-pause")){
            song.play();
        }
        else{
            song.play();
            play.classList.add("fa-pause");
            play.classList.remove("fa-play");
            play2.classList.add("fa-pause");
            play2.classList.remove("fa-play");
        }
        if(hover != ""){
            document.getElementById("hoverpl" + hover).classList.remove("fa-pause");
            document.getElementById("hoverpl" + hover).classList.add("fa-play");
            document.getElementById("hoverpl" + hover).style.visibility = 'inherit';
            document.getElementById("num" + hover).style.opacity = '1';
        }
    
        document.getElementById("hoverpl7").classList.remove("fa-play");
        document.getElementById("hoverpl7").classList.add("fa-pause");
        document.getElementById("hoverpl7").style.visibility = 'visible';
        document.getElementById("num7").style.opacity = '0';
        hover = 7;
    }
}
function song8(){
    song.pause();

    if(hover - 1 != 7){
        song = document.getElementById("songAudio");
        song.src = songTitle[7] + '.mp3';
        document.querySelector('.img8').style.opacity = '1';
        if(currentimg!='.img8'){
            document.querySelector(currentimg).style.opacity = '0';
        }
        currentimg = '.img8';
        document.querySelector('.pimg8').style.opacity = '1';
        if(currentPimg!='.pimg8'){
            document.querySelector(currentPimg).style.opacity = '0';
        }
        currentPimg = '.pimg8';
        document.getElementById("title1").innerHTML = 'Ob-La-Di, Ob-La-Da (2018 Mix)';
        document.getElementById("artist1").innerHTML = 'The Beatles';
        document.getElementById("titlep").innerHTML = 'Ob-La-Di, Ob-La-Da (2018 Mix)';
        document.getElementById("artistp").innerHTML = 'The Beatles';
        document.querySelector('.playing').style.backgroundColor = '#c0beb6';

        progress.max = song.duration;
        progress.value = song.currentTime;
        
        var min = Math.floor(progress.max / 60);
        var sec = Math.floor(progress.max % 60);

        if(sec < 10){
            sec = '0' + sec;
        }

        document.getElementById("maxdur").innerHTML = min + ':' + sec;
        document.getElementById("maxdur2").innerHTML = min + ':' + sec;
    }

    if(document.getElementById("hoverpl8").classList.contains("fa-pause")){
        song.pause();
        document.getElementById("hoverpl8").classList.remove("fa-pause");
        document.getElementById("hoverpl8").classList.add("fa-play");
        play.classList.add("fa-play");
        play.classList.remove("fa-pause");
        play2.classList.add("fa-play");
        play2.classList.remove("fa-pause");
    }
    else{

        if(play.classList.contains("fa-pause")){
            song.play();
        }
        else{
            song.play();
            play.classList.add("fa-pause");
            play.classList.remove("fa-play");
            play2.classList.add("fa-pause");
            play2.classList.remove("fa-play");
        }
        if(hover != ""){
            document.getElementById("hoverpl" + hover).classList.remove("fa-pause");
            document.getElementById("hoverpl" + hover).classList.add("fa-play");
            document.getElementById("hoverpl" + hover).style.visibility = 'inherit';
            document.getElementById("num" + hover).style.opacity = '1';
        }
    
        document.getElementById("hoverpl8").classList.remove("fa-play");
        document.getElementById("hoverpl8").classList.add("fa-pause");
        document.getElementById("hoverpl8").style.visibility = 'visible';
        document.getElementById("num8").style.opacity = '0';
        hover = 8;
    }
    
}
function song9(){
    song.pause();

    if(hover - 1 != 8){
        song = document.getElementById("songAudio");
        song.src = songTitle[8] + '.mp3';
        document.querySelector('.img9').style.opacity = '1';
        if(currentimg!='.img9'){
            document.querySelector(currentimg).style.opacity = '0';
        }
        currentimg = '.img9';
        document.querySelector('.pimg9').style.opacity = '1';
        if(currentPimg!='.pimg9'){
            document.querySelector(currentPimg).style.opacity = '0';
        }
        currentPimg = '.pimg9';
        document.getElementById("title1").innerHTML = 'Di Na Babalik (Extended Version)';
        document.getElementById("artist1").innerHTML = 'Ang Bandang Shirley';
        document.getElementById("titlep").innerHTML = 'Di Na Babalik (Extended Version)';
        document.getElementById("artistp").innerHTML = 'Ang Bandang Shirley';
        document.querySelector('.playing').style.backgroundColor = '#ec8f55';

        progress.max = song.duration;
        progress.value = song.currentTime;
        
        var min = Math.floor(progress.max / 60);
        var sec = Math.floor(progress.max % 60);

        if(sec < 10){
            sec = '0' + sec;
        }

        document.getElementById("maxdur").innerHTML = min + ':' + sec;
        document.getElementById("maxdur2").innerHTML = min + ':' + sec;
    }

    if(document.getElementById("hoverpl9").classList.contains("fa-pause")){
        song.pause();
        document.getElementById("hoverpl9").classList.remove("fa-pause");
        document.getElementById("hoverpl9").classList.add("fa-play");
        play.classList.add("fa-play");
        play.classList.remove("fa-pause");
        play2.classList.add("fa-play");
        play2.classList.remove("fa-pause");
    }
    else{

        if(play.classList.contains("fa-pause")){
            song.play();
        }
        else{
            song.play();
            play.classList.add("fa-pause");
            play.classList.remove("fa-play");
            play2.classList.add("fa-pause");
            play2.classList.remove("fa-play");
        }
        if(hover != ""){
            document.getElementById("hoverpl" + hover).classList.remove("fa-pause");
            document.getElementById("hoverpl" + hover).classList.add("fa-play");
            document.getElementById("hoverpl" + hover).style.visibility = 'inherit';
            document.getElementById("num" + hover).style.opacity = '1';
        }
    
        document.getElementById("hoverpl9").classList.remove("fa-play");
        document.getElementById("hoverpl9").classList.add("fa-pause");
        document.getElementById("hoverpl9").style.visibility = 'visible';
        document.getElementById("num9").style.opacity = '0';
        hover = 9;
    }
    
}

function playPause(){
    progress.max = song.duration;
    progress.value = song.currentTime;
    progressplay.max = song.duration;
    progressplay.value = song.currentTime;
    
    var min = Math.floor(progress.max / 60);
    var sec = Math.floor(progress.max % 60);

    if(sec < 10){
        sec = '0' + sec;
    }
    document.getElementById("maxdur").innerHTML = min + ':' + sec;
    document.getElementById("maxdur2").innerHTML = min + ':' + sec;

    document.getElementById("hoverpl" + hover).classList.remove("fa-play");
    document.getElementById("hoverpl" + hover).classList.add("fa-pause");
    document.getElementById("hoverpl" + hover).style.visibility = 'visible';
    document.getElementById("num" + hover).style.opacity = '0';

    if(play.classList.contains("fa-pause")){
        song.pause();
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
        play2.classList.remove("fa-pause");
        play2.classList.add("fa-play");
        document.getElementById("hoverpl" + hover).classList.remove("fa-pause");
        document.getElementById("hoverpl" + hover).classList.add("fa-play");
    }
    else{
        song.play();
        play.classList.add("fa-pause");
        play.classList.remove("fa-play");
        play2.classList.add("fa-pause");
        play2.classList.remove("fa-play");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
        progressplay.value = song.currentTime;
        var min = Math.floor(progress.value / 60);
        var sec = Math.floor(progress.value % 60);

        if(sec < 10){
            sec = '0' + sec;
        }
        document.getElementById("curr").innerHTML = min + ':' + sec;
        document.getElementById("curr2").innerHTML = min + ':' + sec;

        if(Math.floor(song.currentTime) == Math.floor(song.duration)){
            if(hover + 1 == 10){
                hover = 1;
                prev = 9;
                console.log(hover);
                console.log(prev);
            }
            else{
                hover++;
                prev = hover - 1;
                console.log(hover);
            }
            song = document.getElementById("songAudio");
            song.src = songTitle[hover - 1] + '.mp3';
            document.querySelector('.img' + hover).style.opacity = '1';
            document.querySelector('.img' + prev).style.opacity = '0';
            currentimg = '.img' + hover;
            document.querySelector('.pimg' + hover).style.opacity = '1';
            document.querySelector('.pimg' + prev).style.opacity = '0';
            currentimg = '.pimg' + hover;
            document.getElementById("title1").innerHTML = songTitle[hover - 1];
            document.getElementById("artist1").innerHTML = artistName[hover - 1];
            document.getElementById("titlep").innerHTML = songTitle[hover - 1];
            document.getElementById("artistp").innerHTML = artistName[hover - 1];
            document.querySelector('.playing').style.backgroundColor = bgcolor[hover - 1];

            document.getElementById("hoverpl" + prev).classList.remove("fa-pause");
            document.getElementById("hoverpl" + prev).classList.add("fa-play");
            document.getElementById("hoverpl" + prev).style.visibility = 'inherit';
            document.getElementById("num" + prev).style.opacity = '1';

            document.getElementById("hoverpl" + hover).classList.remove("fa-play");
            document.getElementById("hoverpl" + hover).classList.add("fa-pause");
            document.getElementById("hoverpl" + hover).style.visibility = 'visible';
            document.getElementById("num" + hover).style.opacity = '0';

            song.play();
            console.log(song.src);
        }

    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    play.classList.add("fa-pause");
    play.classList.remove("fa-play");
    play2.classList.add("fa-pause");
    play2.classList.remove("fa-play");
    progress.max = song.duration;
    progress.value = song.currentTime;
    
    var min = Math.floor(progress.max / 60);
    var sec = Math.floor(progress.max % 60);

    if(sec < 10){
        sec = '0' + sec;
    }

    document.getElementById("maxdur").innerHTML = min + ':' + sec;
    document.getElementById("maxdur2").innerHTML = min + ':' + sec;

    document.getElementById("hoverpl" + hover).classList.remove("fa-pause");
    document.getElementById("hoverpl" + hover).classList.add("fa-play");
    document.getElementById("hoverpl" + hover).style.visibility = 'inherit';
    document.getElementById("num" + hover).style.opacity = '1';

    document.getElementById("hoverpl" + hover).classList.remove("fa-play");
    document.getElementById("hoverpl" + hover).classList.add("fa-pause");
    document.getElementById("hoverpl" + hover).style.visibility = 'visible';
    document.getElementById("num" + hover).style.opacity = '0';
}
progressplay.onchange = function(){
    song.play();
    song.currentTime = progressplay.value;
    play.classList.add("fa-pause");
    play.classList.remove("fa-play");
    play2.classList.add("fa-pause");
    play2.classList.remove("fa-play");
    progress.max = song.duration;
    progress.value = song.currentTime;
    progressplay.max = song.duration;
    progressplay.value = song.currentTime;
    
    var min = Math.floor(progress.max / 60);
    var sec = Math.floor(progress.max % 60);

    if(sec < 10){
        sec = '0' + sec;
    }
    document.getElementById("maxdur").innerHTML = min + ':' + sec;
    document.getElementById("maxdur2").innerHTML = min + ':' + sec;

    document.getElementById("hoverpl" + hover).classList.remove("fa-pause");
    document.getElementById("hoverpl" + hover).classList.add("fa-play");
    document.getElementById("hoverpl" + hover).style.visibility = 'inherit';
    document.getElementById("num" + hover).style.opacity = '1';

    document.getElementById("hoverpl" + hover).classList.remove("fa-play");
    document.getElementById("hoverpl" + hover).classList.add("fa-pause");
    document.getElementById("hoverpl" + hover).style.visibility = 'visible';
    document.getElementById("num" + hover).style.opacity = '0';
}