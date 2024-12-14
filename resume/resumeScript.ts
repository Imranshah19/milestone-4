window.addEventListener("load", () => {
  let name = localStorage.getItem("name");

  let designation = localStorage.getItem("designation");
  let phone  = localStorage.getItem("phone");
  let email = localStorage.getItem("email");
  let add = localStorage.getItem("add");
  let pass1 = localStorage.getItem("pass1");
  let deg1 = localStorage.getItem("deg1");
  let uni1 = localStorage.getItem("uni1");
  let pass2 = localStorage.getItem("pass2");
  let deg2 = localStorage.getItem("deg2");
  let uni2 = localStorage.getItem("uni2");
  let skill1 = localStorage.getItem("skill1");
  let skill2 = localStorage.getItem("skill2");
  let skill3 = localStorage.getItem("skill3");
  let skill4 = localStorage.getItem("skill4");
  let skill5 = localStorage.getItem("skill5");
  let skill6 = localStorage.getItem("skill6");
  let lang1 = localStorage.getItem("lang1");
  let lang2 = localStorage.getItem("lang2");
  let lang3 = localStorage.getItem("lang3");
  let styear = localStorage.getItem("styear");
  let endyear  = localStorage.getItem("endyear");
  let company = localStorage.getItem("company");
  let companylocation = localStorage.getItem("companylocation");
  let jobtitle = localStorage.getItem("jobtitle");
  let achive1 = localStorage.getItem("achive1");
  let achive2 = localStorage.getItem("achive2");
  let achive3 = localStorage.getItem("achive3");

  let picture = localStorage.getItem("profile_pic");

let resumeName: any = document.getElementById("resumeName")
resumeName.textContent = name

let resumeDesignation: any = document.getElementById("resumeDesignation")
resumeDesignation.textContent = designation

let resumePhone: any = document.getElementById("resumePhone")
resumePhone.textContent = phone

let resumeEmail: any = document.getElementById("resumeEmail")
resumeEmail.textContent = email

let resumeAddress: any = document.getElementById("resumeAddress")
resumeAddress.textContent = add

let resumePass1: any = document.getElementById("resumePass1")
resumePass1.textContent = pass1

let resumeDegree1: any = document.getElementById("resumeDegree1")
resumeDegree1.textContent = deg1

let resumeUniversity1: any = document.getElementById("resumeUniversity1")
resumeUniversity1.textContent = uni1

let resumePass2: any = document.getElementById("resumePass2")
resumePass1.textContent = pass2

let resumeDegree2: any = document.getElementById("resumeDegree2")
resumeDegree1.textContent = deg2

let resumeUniversity2: any = document.getElementById("resumeUniversity2")
resumeUniversity2.textContent = uni2

let resumeSkill1: any = document.getElementById("resumeSkill1")
resumeSkill1.textContent = skill1;

let resumeSkill2: any = document.getElementById("resumeSkill2")
resumeSkill2.textContent = skill2

let resumeSkill3: any = document.getElementById("resumeSkill3")
resumeSkill3.textContent =skill3

let resumeSkill4: any = document.getElementById("resumeSkill4")
resumeSkill4.textContent = skill4

let resumeSkill5: any = document.getElementById("resumeSkill5")
resumeSkill5.textContent = skill5

let resumeSkill6: any = document.getElementById("resumeSkill6")
resumeSkill6.textContent = skill6

let resumeLang1: any = document.getElementById("resumeLang1")
resumeLang1.textContent = lang1

let resumeLang2: any = document.getElementById("resumeLang2")
resumeLang2.textContent = lang2

let resumeLang3: any = document.getElementById("resumeLang3")
resumeLang3.textContent = lang3

let resumeStartyear: any = document.getElementById("resumeStartyear")
resumeStartyear.textContent = styear

let resumeEndyear: any = document.getElementById("resumeEndyear")
resumeEndyear.textContent = endyear

let resumeCompany: any = document.getElementById("resumeCompany")
resumeCompany.textContent = company

let resumeCompanylocation: any = document.getElementById("resumeCompanylocation")
resumeCompanylocation.textContent = companylocation

let resumeJobtitle: any = document.getElementById("resumeJobtitle")
resumeJobtitle.textContent = jobtitle

let resumeAchive1: any = document.getElementById("resumeAchive1")
resumeAchive1.textContent = achive1

let resumeAchive2: any = document.getElementById("resumeAchive2")
resumeAchive2.textContent = achive2

let resumeAchive3: any = document.getElementById("resumeAchive3")
resumeAchive3.textContent = achive3

let resumeImg: any = document.getElementById("resumeImg")
resumeImg.src = picture







});

//---------------print button-----------
let print_btn = document.getElementById("print_btn");

print_btn?.addEventListener("click", () => {
  window.print();
});


//---------------Edit button-----------
let edit_btn = document.getElementById("edit_btn");
edit_btn?.addEventListener("click", ()=>{
  window.history.back()
})
