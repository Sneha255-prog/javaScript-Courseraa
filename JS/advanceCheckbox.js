function nicknameFunction(){
    if(document.getElementById('yesNick').checked)  //whether the checkbox is checked//
       {
           document.getElementById('nick').style.display="inline";  //to pop the nickname box//
           document.getElementById('nickname').setAttribute('required',true);//if it ischecked then write the nickname compulsory//
       }
    else
       {
        document.getElementById('nick').style.display="none"; 
        document.getElementById('nickname').removeAttribute('required');
       }

}