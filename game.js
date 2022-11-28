var level=0;
var rows=3;
var cols=4;
var img_no=6;
var imgs =[];
var original=document.createElement("img");
original.src="assists/Moon.gif";


var values=["1.gif","2.gif","3.gif","4.gif","5.gif","6.gif",
            "1.gif","2.gif","3.gif","4.gif","5.gif","6.gif"];

var last_img_clicked="/assists/Moon.gif"; //source of last img flipped
var last_img_clicked_id;
var flipped=0;//check if an image was flipped
var correct_ans=0;
var mistakes=0;


shuffle_arr(values);
fill_arr(imgs);




function fill_arr(arr){
    for(var i=0;i<rows*cols;i++){
        let imge;
        imge="assists/"+(values)[0];
        arr[i.toString()]=imge;
        values.splice(0,1);
        
    }
}

function shuffle_arr(arr){
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    

}