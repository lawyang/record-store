console.log('js');

$(document).ready(onReady);

function onReady() {
    console.log('JQ');
    $('#addNewRecord').on('click', function(event) {
        let record = submit();
        addRecord(record);
    })
    getAllRecords();
}

function addRecord( record ) {
    $.ajax({
        method: 'POST',
        url: '/record',
        data: record
    }).then( function( response ) {
        getAllRecords();
    }).catch( function( response ){
        console.log('beep beep beep boop', status);
    } )
}

function submit() {
    let record = {
    artist: $('#inputArtist').val(),
    album: $('#inputAlbum').val(),
    year: $('#inputYear').val(),
    genre: $('#inputGenre').val(),
    }
    return record;
}

function getAllRecords() {
    $.ajax({
        method: 'GET',
        url: '/record',
    }).then( function( response ){
        displayAllRecords( response );
    })
}

function displayAllRecords( recordArray ) {
    let $recordsTarget = $('#records')
    $recordsTarget.empty();
    for (let music of recordArray) {
        $recordsTarget.append( makeRowFor(music) );
    }
}

function makeRowFor(record) {
    let rowHtml = `<tr>
    <td>${ record.artist }</td>
    <td>${ record.albumName }</td>
    <td>${ record.year }</td>
    <td>${ record.genreList.join(', ') }</td>
    </tr>`;
    return rowHtml;
}


