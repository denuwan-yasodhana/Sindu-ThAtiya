function popular_songs_sprow1()
{
    $(".album-postsp").on('click', function (e) {
        var dataSwitchId = $(this).attr('data-switch'); // dataswitchId means song id
        //console.log(dataSwitchId);

        // This is aplayer switch function
        ap.list.switch(dataSwitchId);

        // This is aplayer play function
        ap.play();

        // Click to slideUp player see
        $("#aplayer").addClass('showPlayer'); // Default player hide
    });

    const ap = new APlayer(         
        {
            container: document.getElementById('aplayer'),
            listFolded: true,
            audio: [
                {
                    name: 'Aalooke Bihiwi',
                    artist: 'H.R Jothipala',
                    url: 'audios/hr jothipala/HR_Jothipala_Aalooke_Bihiwi.mp3',
                    cover: 'images/cover_image.jpg'
                },
                {
                    name: 'Suduuuu Madura Athithe',
                    artist: 'H.R Jothipala',
                    url: 'audios/hr jothipala/Aadara Madura Athithe__H.R Jothipala_mp3[sarigama.lk].mp3',
                    cover: 'images/cover_image.jpg'
                },
                {
                    name: 'Me Nonimena Divi Gamane',
                    artist: 'H.R Jothipala',
                    url: 'audios/hr jothipala/Me Nonimena Divi Gamane__H.R Jothipala_mp3[sarigama.lk].mp3',
                    cover: 'images/cover_image.jpg'
                },
                {
                    name: 'Sal Sapu Na',
                    artist: 'H.R Jothipala',
                    url: 'audios/hr jothipala/Sal Sapu Na [ Sangeetha ]__H.R Jothipala_mp3[sarigama.lk].mp3',
                    cover: 'images/cover_image.jpg'
                },
                {
                    name: 'Ninda Nena Rathriye',
                    artist: 'H.R Jothipala',
                    url: 'audios/hr jothipala/Ninda Nena Rathriye__H.R Jothipala_mp3[sarigama.lk].mp3',
                    cover: 'images/cover_image.jpg'
                },
            ]
        }
    );
}

function love_songs_sprow1() {
    $(".album-postsp").on('click', function (e) {
        var dataSwitchId = $(this).attr('data-switch'); // dataswitch means song id
        //console.log(dataSwitchId);

        // This is aplayer switch function
        ap.list.switch(dataSwitchId);

        // This is aplayer play function
        ap.play();

        // Click to slideUp player see
        $("#aplayer").addClass('showPlayer'); // Default player hide
    });

    const ap = new APlayer(
        {
            container: document.getElementById('aplayer'),
            listFolded: true,
            audio: [
                {
                    name: 'Aadara Madura Athithe',
                    artist: 'H.R Jothipala',
                    url: 'audios/hr jothipala/Aadara Madura Athithe__H.R Jothipala_mp3[sarigama.lk].mp3',
                    cover: 'images/Love_song_music_Getty.jpg'
                },
                {
                    name: 'Aadara Mal Pawane',
                    artist: 'H.R Jothipala',
                    url: 'audios/hr jothipala/Aadara Mal Pawane [ Duleeka ]__H.R Jothipala_mp3[sarigama.lk].mp3',
                    cover: 'images/Love_song_music_Getty.jpg'
                },
                {
                    name: 'Adanne Ai',
                    artist: 'H.R Jothipala',
                    url: 'audios/hr jothipala/HR_Jothipala_Adanne_Ay.mp3',
                    cover: 'images/Love_song_music_Getty.jpg'
                },
            ]
        }
    );
}

function remix_songs_sprow1()
{
    $(".album-postsp").on('click', function (e) {
        var dataSwitchId = $(this).attr('data-switch'); // dataswitch means song id
        //console.log(dataSwitchId);

        // This is aplayer switch function
        ap.list.switch(dataSwitchId);

        // This is aplayer play function
        ap.play();

        // Click to slideUp player see
        $("#aplayer").addClass('showPlayer'); // Default player hide
    });

    const ap = new APlayer(
        {
            container: document.getElementById('aplayer'),
            listFolded: true,
            audio: [
                {
                    name: 'Wayanna Sithare HR Jothipala Remix',
                    artist: 'H.R Jothipala',
                    url: 'audios/hr jothipala/Wayanna Sithare HR Jothipala Remix  DIMUTHU EMB.mp3',
                    cover: 'images/Best-Remix-Songs.jpg'
                },
            ]
        }
    );
}

function nonstop_sprow1() {
    $(".album-postsp").on('click', function (e) {
        var dataSwitchId = $(this).attr('data-switch'); // dataswitch means song id
        //console.log(dataSwitchId);

        // This is aplayer switch function
        ap.list.switch(dataSwitchId);

        // This is aplayer play function
        ap.play();

        // Click to slideUp player see
        $("#aplayer").addClass('showPlayer'); // Default player hide
    });

    const ap = new APlayer(
        {
            container: document.getElementById('aplayer'),
            listFolded: true,
            audio: [
                {
                    name: 'HR Jothipala Nonstop',
                    artist: 'H.R Jothipala',
                    url: 'audios/hr jothipala/02 - JOTHI NONSTOP - videomart95.com - All Right.mp3',
                    cover: 'images/Sony MDR.jpg'
                },
            ]
        }
    );
}

function popular_songs_sprow2()
{
    $(".album-postsp").on('click', function (e) {
        var dataSwitchId = $(this).attr('data-switch'); // dataswitch means song id
        //console.log(dataSwitchId);

        // This is aplayer switch function
        ap.list.switch(dataSwitchId);

        // This is aplayer play function
        ap.play();

        // Click to slideUp player see
        $("#aplayer").addClass('showPlayer'); // Default player hide
    });

    const ap = new APlayer(
        {
            container: document.getElementById('aplayer'),
            listFolded: true,
            audio: [
                {
                    name: 'Bana Kiyana Ratak',
                    artist: 'Edward Jayakody',
                    url: 'audios/edward jayakody/Edward_Jayakody_Bana_Kiyana_Ratak.mp3',
                    cover: 'images/popular.jpg'
                },
                {
                    name: 'Budu Bana Kiwwa',
                    artist: 'Edward Jayakody',
                    url: 'audios/edward jayakody/Budu_Bana_Kiwwa.mp3',
                    cover: 'images/popular.jpg'
                },
                {
                    name: 'Karadiya Gabare',
                    artist: 'Edward Jayakody',
                    url: 'audios/edward jayakody/Karadiya_Gabare.mp3',
                    cover: 'images/popular.jpg'
                },
            ]
        }
    );
}
