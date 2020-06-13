function log(message){
    console.log('> ' + message)
}

const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart(){
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))
}

function drag(){
    //log('CARD: dragging')
}

function dragend(){
    //log('CARD: stop dragging')
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))
}

//Dropzone
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter(){
    log('DROPZONE: entered the zone')
}

function dragover(){
    log('DROPZONE: in the zone')
}

function dragleave(){
    log('CARD: left the zone')
}

function drop(){
    log('DROPZONE: dropped in the zone')
}

