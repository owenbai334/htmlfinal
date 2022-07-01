window.onload=function(){
    let Text = document.getElementById('text');
    let Password = document.getElementById('password');
    let Enter = document.getElementById('button');

    Enter.onclick = function(){
        let Text_value = text.value;
        let Password_value = password.value;
        if(Text_value=="text")
        {
            if(Password_value=="password")
            {
                window.location.href='html/Home.html';
            }
        }
        else
        {
            alert("輸入錯誤");
        }
    }
}
