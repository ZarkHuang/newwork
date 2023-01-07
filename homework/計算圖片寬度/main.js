function asyncProcess(imageID, imageURL){
    return new Promise((resolve, reject)=>{
        $(imageID).attr('src',imageURL);
        $(imageID).on('load',function(){
            resolve($(this)[0].naturalWidth);
        });
    });
}


$(function(){
    $("button").on("click",go);
});

function go(){
    Promise.all([
        asyncProcess("#image1","1.jpg"),
        asyncProcess("#image2","2.jpg"),
        asyncProcess("#image3","3.jpg")
    ])
    .then(
        //為三個動作作家總動作
        response => {
            //對應asyncProcss
            var totalWidth = 0;
            // 一開始寬度是0
            for(var x=0;x<response.length;x++){
                $("span").append(response[x]);
                totalWidth += response[x];
                
                if(x<response.length-1){
                    $("span").append(" + ");
                }else{
                    $("span").append(" = "+totalWidth);
                }
            }
        },
        error => {
            console.log(`Error:${error}`);
        }
    );
}
