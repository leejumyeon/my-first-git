var btn = document.getElementById("login");
var reg = document.getElementById("regist");

btn.addEventListener('click', function(){
    alert("로그인버튼을 클릭했습니다.");
    var userId = document.getElementById("userId").value;
    var userPass = document.getElementById("userPass").value;
    console.log(userId);
    if(userId != "" && userPass != ""){
        alert("로그인에 성공했습니다.");
    }else{
        alert("로그인에 실패했습니다.");
    }
});
reg.addEventListener('click', function(){
    alert("회원가입버튼을 클릭했습니다.");
});