function update() {
    var imageArray = ["family.jpg", "pic1.jpg", "pic2.jpg"];
    var img = document.getElementById("family");
    var file1 = img.getAttribute('src');
    for (var i = 0; i < imageArray.length; i++) {
        if (file1 == imageArray[i]) {
            if (i + 1 == imageArray.length) {
                i = 0;
            }
            else {
                i++;
            }
            img.src = imageArray[i];
            break;
        }
    }
}