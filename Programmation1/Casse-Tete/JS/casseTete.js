let ancienId;
let ancienneSrc;
let pair = false;

$('.img-fluid').click(function() {
    let srcImage = $(this).attr('src');
    if (!pair) {
        ancienId = "#" + $(this).attr('id');
        ancienneSrc = $(this).attr('src');
    }
    else if (pair) {
        if (ancienneSrc === srcImage) {
            return;
        }
        $(this).attr('src', ancienneSrc);
        $(ancienId).attr('src', srcImage);
    }
    pair = !pair;
});

$('#boutonRecommencer').click(function() {
    $('#image1').attr('src', 'images/4.jpg');
    $('#image2').attr('src', 'images/9.jpg');
    $('#image3').attr('src', 'images/5.jpg');
    $('#image4').attr('src', 'images/3.jpg');
    $('#image5').attr('src', 'images/7.jpg');
    $('#image6').attr('src', 'images/6.jpg');
    $('#image7').attr('src', 'images/1.jpg');
    $('#image8').attr('src', 'images/2.jpg');
    $('#image9').attr('src', 'images/8.jpg');
    pair = false;
});

$('#boutonTricher').click(function() {
    $('#image1').attr('src', 'images/1.jpg');
    $('#image2').attr('src', 'images/2.jpg');
    $('#image3').attr('src', 'images/3.jpg');
    $('#image4').attr('src', 'images/4.jpg');
    $('#image5').attr('src', 'images/5.jpg');
    $('#image6').attr('src', 'images/6.jpg');
    $('#image7').attr('src', 'images/7.jpg');
    $('#image8').attr('src', 'images/8.jpg');
    $('#image9').attr('src', 'images/9.jpg');
    pair = false;
});
