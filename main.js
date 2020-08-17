// 




document.getElementById("search-btn").addEventListener('click',()=>{
    document.getElementById("fancy-results").style.display='block';

    fetch (`https://api.lyrics.ovh/suggest/${document.getElementById('input-box').value}`)

    .then (res=> res.json())
    .then (data=>{
        for (let i =0;i<10;i++){

            let nameOfSong=data.data[i].title;
            let nameOfArtist=data.data[i].artist.name;

            document.getElementsByClassName('lyrics-name').item(i).innerText=`${nameOfSong}`;

            document.getElementsByClassName('author-lead').item(i).innerText=`${nameOfArtist}`;

            document.getElementsByClassName('get-the-lyrics').item(i).addEventListener('click',()=>{


               
               
               
               
                fetch(`https://api.lyrics.ovh/v1/${nameOfArtist}/${nameOfSong}`)
                .then(res=>res.json())
                .then(data=>{
                    document.getElementsByClassName('title-lyrics').item(i).innerText= `${nameOfSong}  by  ${nameOfArtist}`;

                    document.getElementsByClassName('body-lyrics').item(i).innerText=data.lyrics;
                })
            })




        }
    }) 

   


})