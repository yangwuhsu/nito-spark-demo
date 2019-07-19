// 存圖片路徑
var cutOneArr= [
    '<img src="https://fakeimg.pl/250x100/8ddac5/?text=sofa-A">',
    '<img src="https://fakeimg.pl/250x100/5aa3cd/?text=table-B">'
]

var cutTwoArr = [
    '<img src="https://fakeimg.pl/250x100/8DA3BE/?text=bed-C">',
    '<img src="https://fakeimg.pl/250x100/7FA599/?text=bed-D">'
]

var cutThreeArr = [
    '<img src="https://fakeimg.pl/250x100/0aec9d/?text=curtain-E">',
    '<img src="https://fakeimg.pl/250x100/0edfe2/?text=curtain-F">',
    '<img src="https://fakeimg.pl/250x100/f47c32/?text=curtain-G">'
]

var outComeArr = [
    '<img src ="img/1.jpg">',
    '<img src = "img/2.jpg">',
    '<img src = "img/3.jpg">'
]

 //  宣告空陣列存被點擊的id
 var idArr=[];

$(document).ready(function(){
    tabControl();
    openAnimate();

    $('.cut-one').click(function(){
        $('#option-one').hide();
        idArr.push($(this).attr('id'));
        console.log("第一題",idArr);
        $('.show').html(cutOneArr[$(this).index()]);
        $('#option-two').stop(true, true).delay(600).animate({bottom:"20%"},1000);

        $('.cut-two').click(function(){
           
            $('#option-two').hide();
            idArr.push($(this).attr('id'));
            console.log("第二題",idArr);
            $('.bed').html(cutTwoArr[$(this).index()]);
            $('#option-three').stop(true, true).delay(600).animate({bottom:"20%"},1000);
            $('.cut-three').click(function(){
               
                $('#option-three').hide();
                idArr.push($(this).attr('id'));
                console.log("第三題",idArr);
                $('.curtain').html(cutThreeArr[$(this).index()]);
                $(function(){
                    var timeout = setTimeout(function(){
                        $('.bottle').eq(0).css("display","none");  
                        $('.final').css("display","block");
                  
                    },800)
                })    
                outcome(idArr);

                // reset
               $('#again').bind('click',reset);
               
            })

        })
        
    });

})

function firstAdd(){

}


function addIdArr(id){
    idArr.push(id);
}

function reset(){
    idArr.length = 0;
    console.log(idArr);
    $('.final').css("display","none");
    $('.bottle').eq(0).css("display","block");  
    $('.papa').css('right','-100%');
    $('#start').css('left',"0");
    $('#option-one').show();
    $('#option-one').css("bottom","-500%");
    $('#option-two').show();
    $('#option-two').css("bottom","-500%");
    $('#option-three').show();
    $('#option-three').css("bottom","-500%");
    $('.show img' ).remove();
    $('.bed img').remove();
    $('.curtain img').remove();
}

// tab 切換
function tabControl(){
    //tab 初始化

    $(".bottle").hide().eq(0).show();
        $(".nav-item").on('click',function(){
            reset();
            var index = $(this).index();
            $(".bottle").hide().eq(index).show();
        })
}

// 開場點擊動畫
function openAnimate(){
    $('#start').click(function(){
        $('#start').animate({left:"-200%"},1000,function(){
        $('.papa').animate({right:"0%"},600);
        $('#option-one').animate({bottom:"20%"},1000);
        });
    });
}

// 顯示對應圖片
function outcome(idArr){
    if(idArr[0] =="a" && idArr[1] == "c" && idArr[2] == "e"){
        $('.final-pic').html(outComeArr[0]);
        // console.log("1");
        }else if(idArr[0] =="b" && idArr[1] == "d" && idArr[2] == "f"){
            $('.final-pic').html(outComeArr[1]);
            // console.log("2");
        }else{
            $('.final-pic').html(outComeArr[2]);
            // console.log("3");
        }
}