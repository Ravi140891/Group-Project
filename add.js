let logoArr = [], count=0, uname='';
const userLogo = document.querySelector('.user_logo');
const logoListItem = document.querySelector('.logo_list_item');
const modal = document.querySelector('.modal_container');
const modal2 = document.querySelector('.modal2_container');
const openModal = document.querySelector('.circleIconButton-1VxDrg');
const closeModal = document.querySelector('.modal_close_icon');
const closeModal2 = document.querySelector('.modal2_close_icon');
const lastCloseModal = document.querySelector('.last_modal_close_icon');
const modal2Back = document.querySelector('.modal2_back_btn');
const lastModalBack = document.querySelector('.last_modal_back_btn');
const nextModal = document.querySelector('.modal_templet');
const nextModal2 = document.querySelector('.modal2_templet');
const createBtn = document.querySelector('.modal_create_btn')
const lastModalContainer = document.querySelector('.last_modal_container')
const dataForm = document.querySelector('.modal_form')
const userName = document.querySelector('.modal_form_input');
const userBtn = document.querySelector('.userBtn');
const serverNameHover = document.querySelector('.serverNameHover');


logoArr = JSON.parse(localStorage.getItem('logoArr'))??[];
logoArr.map((ele)=>{
    createListItem(ele);
})

//========================================Display server name=======================================================
// const changeName = document.querySelector('.server_name')
// const changeUserName = document.querySelector('.server_userName')
// let title = JSON.parse(localStorage.getItem('obj'));
// changeName.innerText = title.name;
// changeUserName.innerText = title.name;
//localStorage.setItem('obj', JSON.stringify({}));



//===============================================Modal box 1==============================================================
openModal.addEventListener('click', ()=>
{
    modal.style.display ="block";
})

closeModal.addEventListener('click', ()=>
{
    modal.style.display="none";
})

//================================================Modal bOx 2=============================================================
nextModal.addEventListener('click',()=>{
    modal.style.display="none";
    modal2.style.display="block";
})
closeModal2.addEventListener('click', ()=>
{
    modal2.style.display="none";
})
modal2Back.addEventListener('click', ()=>{
    modal2.style.display="none";
    modal.style.display="block";
})


//=============================================Modal Box 3=================================================================
nextModal2.addEventListener('click',()=>{
    modal2.style.display="none"
    lastModalContainer.style.display="block";
})
lastCloseModal.addEventListener('click', ()=>
{
    lastModalContainer.style.display="none"
})
lastModalBack.addEventListener('click', ()=>{
    lastModalContainer.style.display="none"
        modal2.style.display="block";
})




//==========================================


 function addLogoItem(event){
     event.preventDefault();
     uname = userName.value;
    
    const logoObj = {
            name: uname,
        };
    logoArr.push(logoObj);
    localStorage.setItem('logoArr', JSON.stringify(logoArr));
    createListItem(logoObj);
    localStorage.setItem('obj', JSON.stringify(logoObj));
    location.href = "empty.html";
    
 }

function createListItem(logoObj){
    const listEle = document.createElement('li');
    listEle.setAttribute('class','logo_list_item');
    listEle.setAttribute("id", logoObj.name);
    listEle.innerHTML = 
    `<button class="userBtn">
    <img src="Images/discord-v2-svgrepo-com.svg" alt="" class="envi"/>
    <span class="serverNameHover"></span>
    </button>`
    userLogo.appendChild(listEle);
    dataForm.reset();
    lastModalContainer.style.display = "none";
}



function createEnviornment(event){
   
     event.preventDefault();
     let candidate = event.path[2].id;
     logoArr.forEach((ele)=>{
     if (ele.name == candidate)
        localStorage.setItem('obj', JSON.stringify(ele));
     })
     location.href = "empty.html";
}

function openOdinProj(event){
    location.href="rules.html";
}










dataForm.addEventListener('submit', addLogoItem);
userLogo.addEventListener('click',(event)=>{
     if(event.target.classList.contains("envi"))
     {  
         createEnviornment(event);
      }
    else if(event.target.classList.contains("the_odin_pro"))
      {
         openOdinProj(event);
      }
});
userLogo.addEventListener('mouseover', (event)=>
{
    if(event.target.classList.contains('logo_list_item'))
    {
    console.log(event.target.id);
        //serverNameHover.innerText=event.target.id;
    }

})