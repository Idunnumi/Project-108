function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/tm8xGT53Y/', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error)
    {
        console.error(error);
    }else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        
        img = document.getElementById('cow');
        img1 = document.getElementById('dog');
        img2 = document.getElementById('cat');
        img3 = document.getElementById('lion');
        
        if (results[0].label == "moo") {
            img.src = 'cow-icon-vector.webp';
            img1.src = 'dog-icon-vector.webp';
            img2.src = 'vector-cat-icon.webp';
            img3.src = 'OIP.jpg';
        } else if (results[0].label == "bark") {
            img.src = 'cow-icon-vector.webp';
            img1.src = 'dog-icon-vector.webp';
            img2.src = 'vector-cat-icon.webp';
            img3.src = 'OIP.jpg';
        } else if (results[0].lablel == "meow") {
            img.src = 'cow-icon-vector.webp';
            img1.src = 'dog-icon-vector.webp';
            img2.src = 'vector-cat-icon.webp';
            img3.src = 'OIP.jpg';
        }else{
            img.src = 'cow-icon-vector.webp';
            img1.src = 'dog-icon-vector.webp';
            img2.src = 'vector-cat-icon.webp';
            img3.src = 'OIP.jpg';
        }

    }
}