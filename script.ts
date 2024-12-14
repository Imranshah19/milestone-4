let myname: any = document.getElementById(`name`)
let designation:any  = document.getElementById(`designation`)
let phone : any = document.getElementById(`phone`)
let email : any = document.getElementById(`email`)
let add : any = document.getElementById(`add`)
let pass1 : any = document.getElementById(`pass1`)
let deg1 : any = document.getElementById(`deg1`)
let uni1 : any = document.getElementById(`uni1`)
let pass2 : any = document.getElementById(`pass2`)
let deg2 : any = document.getElementById(`deg2`)
let uni2 : any = document.getElementById(`uni2`)
let skill1 : any = document.getElementById(`skill1`)
let skill2 : any = document.getElementById(`skill2`)
let skill3 : any = document.getElementById(`skill3`)
let skill4 : any = document.getElementById(`skill4`)
let skill5 : any = document.getElementById(`skill5`)
let skill6 : any = document.getElementById(`skill6`)
let lang1 : any = document.getElementById(`lang1`)
let lang2 : any = document.getElementById(`lang2`)
let lang3 : any = document.getElementById(`lang3`)
let styear : any = document.getElementById(`styear`)
let endyear : any = document.getElementById(`endyear`)
let company : any = document.getElementById(`company`)
let companylocation : any = document.getElementById(`companylocation`)
let jobtitle : any = document.getElementById(`jobtitle`)
let achive1 : any = document.getElementById(`achive1`)
let achive2 : any = document.getElementById(`achive2`)
let achive3 : any = document.getElementById(`achive3`)
let achive4 : any = document.getElementById(`achive4`)
let achive5 : any = document.getElementById(`achive5`)
let pic : any = document.getElementById(`pic`)

let submitBtn = document.getElementById(`submitBtn`)
let form = document.getElementById(`form`)

form?.addEventListener('submit', (event)=>{
event.preventDefault()

localStorage.setItem("name", myname.value)
localStorage.setItem("designation", designation.value)
localStorage.setItem("phone", phone.value)
localStorage.setItem("email", email.value)
localStorage.setItem("add", add.value)
localStorage.setItem("pass1", pass1.value)
localStorage.setItem("deg1", deg1.value)
localStorage.setItem("uni1", uni1.value)
localStorage.setItem("pass2", pass2.value)
localStorage.setItem("deg2", deg2.value)
localStorage.setItem("uni2", uni2.value)
localStorage.setItem("skill1", skill1.value)
localStorage.setItem("skill2", skill2.value)
localStorage.setItem("skill3", skill3.value)
localStorage.setItem("skill4", skill4.value)
localStorage.setItem("skill5", skill5.value)
localStorage.setItem("skill6", skill6.value)
localStorage.setItem("lang1", lang1.value)
localStorage.setItem("lang2", lang2.value)
localStorage.setItem("lang3", lang3.value)
localStorage.setItem("styear", styear.value)
localStorage.setItem("endyear", endyear.value)
localStorage.setItem("company", company.value)
localStorage.setItem("companylocation", companylocation.value)
localStorage.setItem("jobtitle", jobtitle.value)
localStorage.setItem("achive1", achive1.value)
localStorage.setItem("achive2", achive2.value)
localStorage.setItem("achive3", achive3.value)
localStorage.setItem("achive4", achive4.value)
localStorage.setItem("achive5", achive5.value)

if (pic.files && pic.files[0]){
   let reader = new FileReader()
   reader.addEventListener("load", ()=>{
    let textImg: any = reader.result
    localStorage.setItem("profile_pic", textImg)
    
   })
   reader.readAsDataURL(pic.files[0])
}

 window.location.href = "./resume/index.html"


})



































