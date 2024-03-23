function addnewwe(){
    // Using below log statement to see if the function is working
    // console.log("Adding new field");

    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("workexp");
    newNode.classList.add("mt-2");

    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");


    let weob= document.getElementById("we");
    let webtnob = document.getElementById("webtn");

    weob.insertBefore(newNode,webtnob);
}

function addnewed(){

    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("education");
    newNode.classList.add("mt-2");

    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");


    let edob= document.getElementById("ed");
    let edbtnob = document.getElementById("edbtn");

    edob.insertBefore(newNode,edbtnob);
}

function addnewce(){

    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("certificate");
    newNode.classList.add("mt-2");

    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let ceob = document.getElementById("ce");
    let cebtnob = document.getElementById("cebtn");

    ceob.insertBefore(newNode,cebtnob);

}

function addnewsk(){
    
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skills");
    newNode.classList.add("mt-2");

    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");


    let skob= document.getElementById("sk");
    let skbtnob = document.getElementById("skbtn");

    skob.insertBefore(newNode,skbtnob);
}

// Function to take values from the form and drop it to the template

function generateResume(){
    // console.log("This function works");
    // Name
    let name = document.getElementById('name').value;
    let namet = document.getElementById('namet');
    namet.innerHTML = name;
    
    // Direct method
    /*document.getELementById('Destination id').innerHTML =
     document.getElemetById('source location').value;*/

    // Contact
    document.getElementById('contactt').innerHTML= 
    document.getElementById('contact').value;

    // Email
    document.getElementById('emailt').innerHTML= 
    document.getElementById('mail').value;

    // Address
    document.getElementById('addresst').innerHTML= 
    document.getElementById('address').value;

    //Objective
    document.getElementById('objectivet').innerHTML= 
    document.getElementById('objective').value;

    //Work Eperience
    let wes = document.getElementsByClassName("workexp");
    let str= " ";
    for(let e of wes)
    {
        str= str+`<li> ${e.value} </li>`;
    }
    document.getElementById("workt").innerHTML= str;

    // Education
    let eds = document.getElementsByClassName("education");
    let str1= " ";
    for(let e of eds)
    {
        str1= str1 +`<li> ${e.value} </li>`;
    }
    document.getElementById("educationt").innerHTML= str1;

    // Certificates
    let ces = document.getElementsByClassName("certificate");
    let str2= " ";
    for(let e of ces)
    {
        str2 += `<li> ${e.value} </li>`;
    }
    document.getElementById("certificatet").innerHTML = str2;

    // Skills
    let sks = document.getElementsByClassName("skills");
    let str3= " ";
    for(let e of sks)
    {
        str3 += `<li> ${e.value} </li>`;
    }
    document.getElementById("skillst").innerHTML = str3;

    document.getElementById('resume-form').style.display="none";
    document.getElementById('resume-template').style.display="block";
    document.getElementById('prbtn').style.display="block";


}

function printResume()
{
    window.print();
}
