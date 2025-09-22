let current_volume = 0.1;
let value = 0;
let video;
let race;
let dragging = false;

function get_video() {
    video = document.querySelector('#video');
    race = document.querySelector('.videoIF__race');

    video.removeEventListener("timeupdate", update_current_time);
    race.removeEventListener("mousemove", handle_mouse_move);
    race.removeEventListener("click", handle_mouse_click);
    race.removeEventListener("mousedown", handle_mouse_down);
    race.removeEventListener("mouseup", handle_mouse_up);

    video.play();
    document.querySelector('.videoIF__playButton').classList.add('videoIF__playButton_pause');

    video.addEventListener("timeupdate", update_current_time);
    race.addEventListener("mousemove", handle_mouse_move);
    race.addEventListener("click", handle_mouse_click);
    race.addEventListener("mousedown", handle_mouse_down);
    race.addEventListener("mouseup", handle_mouse_up);
}

function set_volume() {
    video.volume = current_volume;
}

function toggle_video() {
    if (!video.paused) {
        video.pause();
        document.querySelector('.videoIF__playButton').classList.remove('videoIF__playButton_pause');
    }
    else {
        video.play();
        document.querySelector('.videoIF__playButton').classList.add('videoIF__playButton_pause');
    }
}

function handle_mouse_move(e) {
    document.querySelector('.videoIF__race__mouse').style.width = e.offsetX * 100 / race.clientWidth + "%";
    if (dragging) {
        video.currentTime = (e.offsetX / race.clientWidth) * video.duration;
    }
}

// -------- Events Function -------- 

function handle_mouse_click(e) {
    video.currentTime = (e.offsetX / race.clientWidth) * video.duration;
}

function handle_mouse_down() {
    dragging = true;
}

function handle_mouse_up() {
    dragging = false;
}

function update_current_time() {
    document.querySelectorAll('.videoIF__race__value').forEach(e => {
        e.style.width = video.currentTime * 100 / video.duration  + "%";
    })
}