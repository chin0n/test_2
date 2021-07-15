function check(){
    var form = document.test;
    if((form.food[0].checked == true)&&(form.bev[0].checked == true)){
        form.action = "ex1.html";
    }
    else if((form.food[0].checked == true)&&(form.bev[1].checked == true)){
        form.action = "ex2.html";
    }
    else if((form.food[1].checked == true)&&(form.bev[0].checked == true)){
        form.action = "ex3.html";
    }
    else if((form.food[1].checked == true)&&(form.bev[1].checked == true)){
        form.action = "ex4.html";
    }
    else{
        alert("테스트를 확인하세요")
    }
    form.submit();
}
