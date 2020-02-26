var data = [2982.07,
  2989.99,
  2993.78,
  2996.2,
  2999.13,
  2998.22,
  2998.76,
  3000.19,
  2999.27,
  2998.32,
  2998.38,
  3000.86,
  3003.16,
  3004.86,
  3004.9,
  3001.43,
  2999.92,
  2999.21,
  2998.08,
  2997.17,
  2993.69,
  2990.27,
  2993.01,
  2994.17,
  2995.52,
  2995.6,
  2995.77,
  2994.8,
  2996.54,
  2997.44,
  2996.36,
  2995.41,
  2995.92,
  2997.74,
  2998.62,
  2999.69,
  3000.46,
  3001.65,
  3003.46,
  3002.42,
  3001.06,
  3002.01,
  3002.9,
  3004.31,
  3006.2,
  3007.81,
  3007.35,
  3006.93,
  3007.21,
  3007.38,
  3008.12,
  3009.11,
  3007.62,
  3008.25,
  3007.66,
  3006.88,
  3005.48,
  3003.23,
  3001.99,
  3000.9,
  3000.43,
  3003.06,
  3004.2,
  3004.98,
  3004.65,
  3003.17,
  3002.59,
  3003.39,
  3003.45,
  3002.23,
  3000.82,
  2998.68,
  2997.79,
  2997.97,
  2997.65,
  2996.55,
  2995.03,
  2993.65,
  2992.31,
  2991.84,
  2989.26,
  2985.01,
  2982.68,
  2980.9,
  2981.66,
  2983.3,
  2985.4,
  2985.07,
  2983.87,
  2980.86,
  2977.52,
  2974.42,
  2974.77,
  2974.02,
  2974.11,
  2971.72,
  2969.5,
  2966.42,
  2962.07,
  2956.62,
  2953.25,
  2948.53,
  2943.8,
  2948.7,
  2955.86,
  2960.76,
  2962.91,
  2963.85,
  2965.12,
  2965.83,
  2967.22,
  2964.31,
  2961.7,
  2962.13,
  2961.89,
  2962.19,
  2964.83,
  2966.32,
  2968.47,
  2970.64,
  2970.63,
  2976.45,
  2977.87,
  2977.03,
  2976.98,
  2977.96,
  2977.3,
  2977.42,
  2978.78,
  2980.35,
  2982.26,
  2984.09,
  2984.56,
  2983.43,
  2983.03,
  2982.02,
  2981.7,
  2981.29,
  2980.93,
  2981.97,
  2983.99,
  2987.1,
  2989.78,
  2991.45,
  2990.97,
  2990.45,
  2990.9,
  2991.39,
  2990.88,
  2989.68,
  2987.63,
  2985.37,
  2983.82,
  2983.5,
  2985.49,
  2987.97,
  2988.82,
  2990.05,
  2990.9,
  2990.94,
  2991.19,
  2993.61,
  2995.27,
  2996.37,
  2996.18,
  2995.09,
  2994.69,
  2994.84,
  2994.13,
  2993.46,
  2992.61,
  2992.88,
  2993.57,
  2994.78,
  2995.63,
  2996.71,
  2995.75,
  2996.7,
  2997.47,
  2999.22,
  3001.45,
  3002.99,
  3006.11,
  3007.31,
  3005.42,
  3005.43,
  3005.54,
  3005.17,
  3003.85,
  3003.37,
  3003.78,
  3003.74,
  3001.03,
  2999.25,
  2996.89,
  2996.19,
  2997.5,
  2999.31,
  3000.42,
  3000.94,
  3000.21,
  2999.95,
  3000.61,
  3001.84,
  3003.86,
  3006.12,
  3006.76,
  3007.3,
  3007.53,
  3008.76,
  3008.85,
  3009.19,
  3009.66,
  3010.47,
  3012.22,
  3013.95,
  3014.68,
  3015.72,
  3016.28,
  3016.37,
  3014.92,
  3012.67,
  3010.59,
  3010.18,
  3010.66,
  3010.82,
  3010.64,
  3011.64,
  3012.26,
  3013.1,
  3013.29,
  3012.39,
  3012.02,
  3011.92,
  3011.72,
  3011.17,
  3011.84,
  3013.52,
  3013.53,
  3013.53,
  3013.53
];
var titleShowNewData =document.getElementById("chart-price");
var titleShowNewDiff =document.getElementById("chart-compare").getElementsByClassName("text-box")[0];
var titleShowNewDiffImg = document.getElementById("news-icon");
var lastData = 2000;
var showTr = document.getElementById("show-data");
var showItem=showTr.getElementsByTagName("td");
function showData(data) {
  showItem[0].innerText = data;
  var num = ((data-lastData));
  showItem[3].innerText =num.toFixed(2);
  titleShowNewData.innerText = data;
  titleShowNewDiff.innerText= "("+num.toFixed(2)+"%)";
}
function changeClass(data) {
  if (data<lastData){
    titleShowNewData.classList.remove("up","down","equation");
    titleShowNewData.classList.add("down");
    showTr.classList.remove("up","down","equation");
    showTr.classList.add("down");
    titleShowNewDiff.classList.remove("up","down","equation");
    titleShowNewDiff.classList.add("down");
    titleShowNewDiffImg.src="img/news-down1.png";
    lastData = data;
  } else if(data>lastData){
    titleShowNewData.classList.remove("up","down","equation");
    titleShowNewData.classList.add("up");
    showTr.classList.remove("up","down","equation");
    showTr.classList.add("up");
    titleShowNewDiff.classList.remove("up","down","equation");
    titleShowNewDiff.classList.add("up");
    titleShowNewDiffImg.src="img/news-up1.png";
    lastData = data;
  }else if (data === lastData){
    titleShowNewData.classList.remove("up","down","equation");
    titleShowNewData.classList.add("equation");
    showTr.classList.remove("up","down","equation");
    showTr.classList.add("equation");
    titleShowNewDiff.classList.remove("up","down","equation");
    titleShowNewDiff.classList.add("equation");
    titleShowNewDiffImg.src="img/news-up2.png";
    lastData = data;
  }
}



function getData() {
  var i = 0;

  var int=self.setInterval(function () {
    if (i<data.length){
      console.log(data[i]);
      showData(data[i]);
      changeClass(data[i]);
      i++;
    }else {
      i=0;
    }
  },1000);

}
getData();


