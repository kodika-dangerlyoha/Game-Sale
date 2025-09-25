let current_volume = 0;
let value = 0;
let video;
let volume;
let race;
let dragging = false;

// -------- Events Function -------- 

function handle_mouse_click_volume(e) {
    current_volume = e.offsetX / volume.clientWidth;
    update_volume();
}

function handle_mouse_move_volume(e) {
    document.querySelector('.videoIF__volume__mouse').style.width = e.offsetX * 100 / volume.clientWidth + "%";
    if (dragging) {
        current_volume = e.offsetX / volume.clientWidth;
        update_volume();
    }
}

function handle_mouse_click(e) {
    video.currentTime = (e.offsetX / race.clientWidth) * video.duration;
}

function handle_mouse_move(e) {
    document.querySelector('.videoIF__race__mouse').style.width = e.offsetX * 100 / race.clientWidth + "%";
    if (dragging) {
        video.currentTime = (e.offsetX / race.clientWidth) * video.duration;
    }
}

function handle_mouse_down() {
    dragging = true;
}

function handle_mouse_up() {
    dragging = false;
}

function handle_mouse_leave() {
    dragging = false;
}

function update_current_time() {
    document.querySelectorAll('.videoIF__race__value').forEach(e => {
        e.style.width = video.currentTime * 100 / video.duration  + "%";
    })
}

// -------- Function -------- 

function update_volume() {
    const videoIF_volume_block =  document.querySelector('.videoIF__volume')
    if (current_volume < 0.15) {
        current_volume = 0;
        videoIF_volume_block?.classList.add('videoIF__volume_muted');
    }
    else {
        videoIF_volume_block?.classList.remove('videoIF__volume_muted');
    }
    video.volume = current_volume;
    document.querySelector('.videoIF__volume__num').innerHTML = Math.round(current_volume * 100);
    document.querySelector('.videoIF__volume__value').style.width = current_volume * 100 + "%";
}

function get_video() {
    video = document.querySelector('#video');
    race = document.querySelector('.videoIF__race');
    volume = document.querySelector('.videoIF__volume__forMouse');

    video.removeEventListener("timeupdate", update_current_time);

    race.removeEventListener("mousemove", handle_mouse_move);
    race.removeEventListener("click", handle_mouse_click);
    race.removeEventListener("mousedown", handle_mouse_down);
    race.removeEventListener("mouseup", handle_mouse_up);
    race.removeEventListener("mouseleave", handle_mouse_leave);

    volume.removeEventListener("mousemove", handle_mouse_move_volume);
    volume.removeEventListener("click", handle_mouse_click_volume);
    volume.removeEventListener("mousedown", handle_mouse_down);
    volume.removeEventListener("mouseup", handle_mouse_up);
    volume.removeEventListener("mouseleave", handle_mouse_leave);

    video.play();
    // current_volume = 0;
    // update_volume();
    document.querySelector('.videoIF__playButton').classList.add('videoIF__playButton_pause');

    video.addEventListener("timeupdate", update_current_time);

    race.addEventListener("mousemove", handle_mouse_move);
    race.addEventListener("click", handle_mouse_click);
    race.addEventListener("mousedown", handle_mouse_down);
    race.addEventListener("mouseup", handle_mouse_up);
    race.addEventListener("mouseleave", handle_mouse_leave);

    volume.addEventListener("mousemove", handle_mouse_move_volume);
    volume.addEventListener("click", handle_mouse_click_volume);
    volume.addEventListener("mousedown", handle_mouse_down);
    volume.addEventListener("mouseup", handle_mouse_up);
    volume.addEventListener("mouseleave", handle_mouse_leave);
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