$(function(){
    $("button").on("click",go);
});

const maleKeywords = ["阿","葉","大","雄","哆","啦","A","夢"];
const femaleKeywords = ["小","叮","鈴"];

let go = () => {
    // alert("di");
    var inputText = $("#userInput").val();
    // debugger;
    const isMale = maleKeywords.some(thisElement => inputText.includes(thisElement));
    // .some ==>call back function,if(==1)==>return
    // if u  just care about [array] items Ｙ/None ==>some
    // if string method Y/none ==> includesy字串判斷
    const isfemMale = femaleKeywords.some(thisElement => inputText.includes(thisElement));
    // thisElement只有一個參數可以省略
    if( isMale && isfemMale){
        $("h1").text("💩");
    }else if(isMale){
        $("h1").text("🐻‍❄️");
    }else if(isfemMale){
        $("h1").text("🐹");
    }else{
        $("h1").text("🐷");
    }
}