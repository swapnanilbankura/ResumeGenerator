function addNewWEField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter Here");
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewWEField1(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter Here");
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);
}
//generating CV
function generateCV(){

    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;
    //direct
    document.getElementById("nameT2").innerHTML=nameField;
    //contact
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    document.getElementById("lT").innerHTML=document.getElementById("linkedField").value;
    document.getElementById("gT").innerHTML=document.getElementById("GitField").value;
    document.getElementById("pT").innerHTML=document.getElementById("portfolioField").value;
    //objective
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    //
    let wes=document.getElementsByClassName("weField");
    let str1="";
    for (let e of wes){
        if (e.value.trim() !== "") {  // Check if the value is not empty
            str1 += `<li>${e.value}</li>`;
        }
        document.getElementById("weT").innerHTML=str1;
    }
    
    //aq
    let aqs=document.getElementsByClassName("aqField");
    let str2="";
    for (let e of aqs){
        str2+=`<li> ${e.value} </li>`;
        
    }
    document.getElementById("aqT").innerHTML=str2;
    //code for setting image
    let file=document.getElementById("imgField").files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);

    //set the image to template
    reader.onloadend=function(){
        document.getElementById("imgT").src=reader.result;
    };

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";

}
function printCV(){
    window.print();
}