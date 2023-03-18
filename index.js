let Points;
function RunGame(PointsBefore){
    randomNum = Math.floor(Math.random() * 9) + 1
    Text_Color = document.getElementById("Text_Color")
    if (randomNum == 1) {
        document.getElementById("Text_Color").innerHTML = "Blue"
        document.getElementById("Text_Color").style.color = "#000dfe"
        x = "BluePixelCharachter.png"
    
    }
    else if (randomNum == 2){
        document.getElementById("Text_Color").innerHTML = "Green"
        document.getElementById("Text_Color").style.color = "#09fe00"
        x = "GreenPixelCharachter.png"
    }
    else if (randomNum == 3){
        document.getElementById("Text_Color").innerHTML = "Yellow"
        document.getElementById("Text_Color").style.color = "#fffc00"
        x = "YellowPixelCharachter.png"
    }
    else if (randomNum == 4){
        document.getElementById("Text_Color").innerHTML = "Torquise"
        document.getElementById("Text_Color").style.color = "#00fff9"
        x = "TurquisePixelCharachter.png"
    }
    else if (randomNum == 5){
        document.getElementById("Text_Color").innerHTML = "Pink"
        document.getElementById("Text_Color").style.color = "#ff01c5"
        x = "PinkPixelCharachter.png"
    }
    else if (randomNum == 6){
        document.getElementById("Text_Color").innerHTML = "Purple"
        document.getElementById("Text_Color").style.color = "#8400ff"
        x = "PurplePixelCharachter.png"
    }
    else if (randomNum == 7){
        document.getElementById("Text_Color").innerHTML = "Brown"
        document.getElementById("Text_Color").style.color = "#a66038"
        x = "BrownPixelCharachter.png"
    }
    else if (randomNum == 8){
        document.getElementById("Text_Color").innerHTML = "Red"
        document.getElementById("Text_Color").style.color = "#ff0000"
        x = "RedPixelCharachter.png"
    }
    else if (randomNum == 9){
        document.getElementById("Text_Color").innerHTML = "Orange"
        document.getElementById("Text_Color").style.color = "#ff6b00"
        x = "OrangePixelCharachter.png"
    }

    let Imgs = ["BluePixelCharachter.png", "BrownPixelCharachter.png", "GreenPixelCharachter.png", "OrangePixelCharachter.png", "PinkPixelCharachter.png", "PurplePixelCharachter.png", "RedPixelCharachter.png", "TurquisePixelCharachter.png", "YellowPixelCharachter.png"]

    let ProperImgID;

    function randomColor(ImgID){
        let randomIndex = Math.floor(Math.random() * Imgs.length);
        let randomItem = Imgs[randomIndex];
        document.getElementById(ImgID).src = randomItem;
        Imgs.splice(randomIndex,1);
        if (randomItem == x){
            ProperImgID = ImgID;
        }
    }

    randomColor('ImgBTN1')
    randomColor('ImgBTN2')
    randomColor('ImgBTN3')
    randomColor('ImgBTN4')
    randomColor('ImgBTN5')
    randomColor('ImgBTN6')
    randomColor('ImgBTN7')
    randomColor('ImgBTN8')
    randomColor('ImgBTN9')
    console.log(ProperImgID);

    document.getElementById("ImgBTN1").addEventListener("click", function(){
        if ('ImgBTN1' == ProperImgID){
            Points = PointsBefore += 1;
            console.log(Points);
            myText = document.getElementById("Points");
            myText.textContent = Points;
        }
        else{
            Points = PointsBefore;
        }
        return Points;
        click.stopPropagation()
    })
    document.getElementById("ImgBTN2").addEventListener("click", function(){
        if ('ImgBTN2' == ProperImgID){
            Points = PointsBefore += 1;
            console.log(Points);
            myText = document.getElementById("Points");
            myText.textContent = Points;
        }
        else{
            Points = PointsBefore;
        }
        return Points;
        click.stopPropagation()
    })
    document.getElementById("ImgBTN3").addEventListener("click", function(){
        if ('ImgBTN3' == ProperImgID){
             Points = PointsBefore += 1;
             console.log(Points);
             myText = document.getElementById("Points");
             myText.textContent = Points;
        }
        else{
            Points = PointsBefore;
        }
        return Points;
        click.stopPropagation()
    })
    document.getElementById("ImgBTN4").addEventListener("click", function(){
        if ('ImgBTN4' == ProperImgID){
             Points = PointsBefore += 1;
             console.log(Points);
             myText = document.getElementById("Points");
             myText.textContent = Points;
        }
        else{
            Points = PointsBefore;
        }
        return Points;
        click.stopPropagation()
    })
    document.getElementById("ImgBTN5").addEventListener("click", function(){
        if ('ImgBTN5' == ProperImgID){
            Points = PointsBefore += 1;
             console.log(Points);
             myText = document.getElementById("Points");
             myText.textContent = Points;
        }
        else{
            Points = PointsBefore;
        }
        return Points;
        click.stopPropagation()
    })
    document.getElementById("ImgBTN6").addEventListener("click", function(){
        if ('ImgBTN6' == ProperImgID){
             Points = PointsBefore += 1;
             console.log(Points);
             myText = document.getElementById("Points");
             myText.textContent = Points;
        }
        else{
            Points = PointsBefore;
        }
        return Points;
        click.stopPropagation()
    })
    document.getElementById("ImgBTN7").addEventListener("click", function(){
        if ('ImgBTN7' == ProperImgID){
             Points = PointsBefore += 1;
             console.log(Points);
             myText = document.getElementById("Points");
             myText.textContent = Points; 
        }
        else{
            Points = PointsBefore;
        }
        return Points;
        click.stopPropagation()
    })
    document.getElementById("ImgBTN8").addEventListener("click", function(){
        if ('ImgBTN8' == ProperImgID){
             Points = PointsBefore += 1;
             console.log(Points);
             myText = document.getElementById("Points");
             myText.textContent = Points;
        }
        else{
            Points = PointsBefore;
        }
        return Points;
        click.stopPropagation()
    })
    document.getElementById("ImgBTN9").addEventListener("click", function(){
        if ('ImgBTN9' == ProperImgID){
             Points = PointsBefore += 1;
             console.log(Points);
             myText = document.getElementById("Points");
             myText.textContent = Points;
        }
        else{
            Points = PointsBefore;
        }
        return Points;
        click.stopPropagation()
    })
    return Points;x
}
let xyz = 1
document.addEventListener('click',function(){
    console.log("User clicked!!!")
    if (xyz == 1){
        RunGame(0)
        xyz += 1
    }
    else{
        console.log(RunGame())
        console.log("Else Statement going")
        RunGame(RunGame())
    }
})
myText = document.getElementById("Points");
myText.textContent = Points;