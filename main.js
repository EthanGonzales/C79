studentlist=[]
function Submit(){
    var student1 = document.getElementById("name1").value;
    var student2 = document.getElementById("name2").value;
    var student3 = document.getElementById("name3").value;
    var student4 = document.getElementById("name4").value;
    studentlist.push(student1);
    studentlist.push(student2);
    studentlist.push(student3);
    studentlist.push(student4);
    console.log(studentlist);
    document.getElementById("displayname").innerHTML=studentlist;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
    
}
function Sort(){
    studentlist.sort();
    console.log(studentlist);
    document.getElementById("displayname").innerHTML=studentlist;
}