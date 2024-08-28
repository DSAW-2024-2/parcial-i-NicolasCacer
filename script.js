const share = document.getElementById('shareButton');
const share2 = document.getElementById('shareButton2');
const social = document.getElementById('social');
const profile = document.getElementById('profile');

share.addEventListener('click',function (){
    if (profile.classList.contains('hidden')){
        social.classList.add('hidden');
        profile.classList.remove('hidden');
    }
    else {
        social.classList.add('hidden');
        profile.classList.remove('hidden');
    }
    
});

share2.addEventListener('click',function (){
    social.classList.add('hidden');
    profile.classList.remove('hidden');
});