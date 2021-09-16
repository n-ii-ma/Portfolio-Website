/* Read More */
let readMore1 = document.getElementById('show-card-1');
let readMore2 = document.getElementById('show-card-2');
let readMore3 = document.getElementById('show-card-3');

/* Projects Description */
let desc1 = document.getElementById('details1');
let desc2 = document.getElementById('details2');
let desc3 = document.getElementById('details3');

/* Toggle Description */
readMore1.onclick = function() {
    if (getComputedStyle(desc1).display === 'none') {
        desc1.style.display = 'block';
        readMore1.style.color = 'DeepPink';
        readMore1.innerText = 'Read Less';
    }
    else {
        desc1.style.display = 'none';
        readMore1.style.color = '';
        readMore1.innerText = 'Read More';
    }
}

readMore2.onclick = function() {
    if (getComputedStyle(desc2).display === 'none') {
        desc2.style.display = 'block';
        readMore2.style.color = 'DeepPink';
        readMore2.innerText = 'Read Less';
    }
    else {
        desc2.style.display = 'none';
        readMore2.style.color = '';
        readMore2.innerText = 'Read More';
    }
}

readMore3.onclick = function() {
    if (getComputedStyle(desc3).display === 'none') {
        desc3.style.display = 'block';
        readMore3.style.color = 'DeepPink';
        readMore3.innerText = 'Read Less';
    }
    else {
        desc3.style.display = 'none';
        readMore3.style.color = '';
        readMore3.innerText = 'Read More';
    }
}