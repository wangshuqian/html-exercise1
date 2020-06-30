//获取DOM对象的main和go节点
let main =document.getElementById("main");
let go =document.getElementById("go");
//设置用到的常量--其中speed：速度   num：分数   timer：时间   flag：是否可以继续游戏，color：小块的颜色
let speed=5,num=0,timer,flag=1;
let colors =['red','yellow','blue','black','grey'];

function createDiv()//每一行的创建
{
    let  oDiv =document.createElement("div");
    oDiv.setAttribute("class","row");//setAttribute 设置一个对象的属性
    let index = Math.floor(Math.random()*4);//Math.floor是数学取整的意思；  Math.random（）*4；是产生不大于4的随机数
    for( let i=0;i<4;i++)
    {
        let iDiv=document.createElement("div");
        oDiv.appendChild(iDiv);//给oDiv对象设置他的子元素iDiv
    }
    if(main.childNodes.length===0) //Object.childNodes是一个对象的所有子节点--返回值是NodeList
    {
     main.appendChild(oDiv);
    }//如果main里面没有任意一行，则直接在里面生成一个子节点：oDiv
    else
    {
     main.insertBefore(oDiv,main.childNodes[0]);  //在main函数的childNode【0】前面插入一个oDiv节点
    }
    let clickDiv = main.childNodes[0].childNodes[index];//在每一行的四个块状元素里选择一个节点，然后给这个节点设置成i属性，同时对他加上颜色表明这个为！白块
    clickDiv.setAttribute('class','i');
    clickDiv.style.backgroundColor = colors[index];
}

function move()
{  if(flag)
   {
     clearInterval(timer);//清除时间间隔
   setInterval(function()
   {
    let step=parseInt(main.offsetTop)+speed;//offsetTop是main元素到他的父辈有position的距离，父辈祖辈没有position，则他的offsetTop标准为body
    main.style.top=step+'px';
    if(parseInt(main.offsetTop)>=0)
    {
        createDiv();
        main.style.top='-150px';
    }
    let len=main.childNodes.length;//设置main的节点长度为len
    if(len===6){
       for(let i=0;i<4;i++)
       {
           if(main.childNodes[len-1].children[i].classList.contains('i'))
           {
               alert("游戏结束，得分："+num);
               clearInterval(timer);
               flag=0;
           }
       }//通过判断main里面最后一行是否含有属性为i的子元素，如果有则alert，没有则减去最后一行
      main.removeChild(main.childNodes[len-1]);//
    }
   },20)
  }
   
   bindEvent();
};
//点击所带来的函数
function bindEvent()
{
  main.addEventListener('click',function(event)
  {
      if(flag)
      {
       let tar=event.target;
       if(tar.className=='i')
        {
          tar.style.backgroundColor="#bbb";
          tar.classList.remove('i');
          num++;
        } 
        else
        {
          alert('游戏结束,得分:'+num);
          clearInterval(timer);
          flag=0;
        }
        if(num%10==0)
        {
            speed++;
        }
      }
   })
}
function clickStart() {

  go.addEventListener('click', function () {
      go.style.display = 'none';
      move();
  });
}
clickStart();