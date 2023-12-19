const select = document.querySelector('.btn-secondary')
const male = document.querySelector('.male')
const female = document.querySelector('.female')
const all = document.querySelector('.all')


male.addEventListener('click',()=>{
    select.innerHTML="Male"
    console.log(select.innerHTML)
    displayContact()
})
female.addEventListener('click',()=>{
    select.innerHTML = "Female"
    console.log(select.innerHTML)
    displayContact()
})
all.addEventListener('click',()=>{
    select.innerHTML="All"
    console.log(select.innerHTML)
    displayContact()
})

let ContactList = [
    {
        title:"Mrs",
        name:"Amen",
        phone:4526734,
        email:"amen@gmail.com",
        dob:"09/06/2000",
        address:"77/32 kerr parade ,washington",
        gender:"female",
        imageUrl :"https://randomuser.me/api/portraits/women/79.jpg"
    },
    {
        title:"Mr",
        name:"Izam",
        phone:784595,
        email:"Izam@gmail.com",
        dob:"09/06/1980",
        address:"77/56 parade, dallas",
        gender:"male",
        imageUrl:"https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
        title:"Mr",
        name:"Anvi",
        phone:5463723,
        email:"Anvi@gmail.com",
        dob:"08/04/1946",
        address:"78 kent street ,rockdale",
        gender:"male",
        imageUrl:"https://randomuser.me/api/portraits/men/91.jpg"
    },
    {
        title:"Mrs",
        name:"Amena",
        phone:87548945,
        email:"Amena@gmail.com",
        dob:"09/12/1878",
        address:"65 rose avenue,beverly hills",
        gender:"female",
        imageUrl:"https://randomuser.me/api/portraits/women/36.jpg"
    },
    {
        title:"Mrs",
        name:"Dallin",
        phone:5645843,
        email:"dallin@gmail.com",
        dob:"07/05/1879",
        address:"56 novel street,panania",
        gender:"male",
        imageUrl:"https://randomuser.me/api/portraits/men/8.jpg"
    }
]
const userName = document.querySelector('.userName')

userName.addEventListener('input',()=>{
    displayContact()
    console.log('chnaging')
})
// let newList = ContactList.filter(element=>element.name.slice(0,len).toLowerCase()===nSearch.toLowerCase())
// console.log(newList)

const displayContact=()=>{
    let nSearch=userName.value
    let len = nSearch.length
    let newList = ContactList.filter(element=>element.name.slice(0,len).toLowerCase()===nSearch.toLowerCase())
    if(select.innerHTML.toLowerCase()==='male'){
        newList=newList.filter(element=>element.gender==="male")
    }
    if(select.innerHTML.toLowerCase()==='female'){
        newList=newList.filter(element=>element.gender==='female')
    }
    if(newList.length===0){
        document.querySelector('.result').innerHTML="0 result found"
       
    }
    const allContact = document.querySelector('.allContact')
    let cantactRow=""
    newList.forEach(item=>{
        let eachContact = `
        <div class="card" style="width: 250px; ">
        <img src=${item.imageUrl} style="width: 250px; height: 200px; object-fit: cover;"  alt="...">
        <div class="card-body">
          
          
            <ul>
                <h5 class="card-title">${item.title} ${item.name}</h5>
                <li><i class="fa-solid fa-phone"></i> ${item.phone}</li>
                <li><i class="fa-solid fa-envelope"></i> ${item.email}</li>
                <li><i class="fa-solid fa-calendar-days"></i> ${item.dob}</li>
                <li><i class="fa-solid fa-house"></i> ${item.address}</li>
            </ul>
         
        </div>
      </div>
        `
        cantactRow+=eachContact

    })
    allContact.innerHTML=cantactRow
    document.querySelector('.result').innerHTML=`${newList.length} result found`
    
}
displayContact()

