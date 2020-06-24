//console.log("hello world");
//document.body.innerHTML("hello world");

//数据只有以一种类型，浮点数
//console.log(1==1.0);
//没有单独的char类型，字符串可以单引号或双引号
//一个字符和多个字符没有区别，统一叫作字符串
//console.log("hello"=='hello');
//console.log('say "hello"');

//用true和flase来返回逻辑运算的值
//typeof 操作符  来返回数据类型
//console.log(typeof 1, typeof(''),typeof false);

//两个空值：undefined与null的比较
//访问一个没有赋值过的变量/属性，会返回undefined
//使用null，通常是想强调说，这里本应该是一个对象
//但这个对象不存在的时候
//console.log(undefined,typeof undefined);
//console.log(null,typeof null);


//js中的字符串运算1
//字符串与别的类型相加会转换成字符串
//onsole.log(1+'1',null+'is not' +undefined);
//运算符+字符串==将字符串变换成数字
//console.log(+'1',+(1+'1'),+'不是一个数字');

//console.log(typeof NaN);

//通常不用双等号来做判断


//变量
//使用let和const   不建议使用var
//let a = 1 + 2;
//不能重复定义
//a+=3;
//console.log(typeof a);

//变量类型是可以修改的；
//a='2';
//const的值是不能修改的；
/*const arr=['index.html','js',['index.js'],'css',['index.css']];

let res= '';
for(let i=0;i<arr.length;++i)
{
   const item=arr[i];
   if(typeof item ==='string')
   {
       res += item +'\n';
   }
   else {
       const filenames =item;
       for (let j=0;j<filenames.length;++j)
       {
           res += '    ' + filenames[j] +'\n';
       }
   }
}
console.log(res);
*/
/*

//函数
function add(a,b)
{
    return a+b;
}
console.log(add(1,2));
console.log(typeof add);
//传参数  如果输入不够 那就是undefined
function voidFunc(a,b){
    console.log('voidFunc',a,b);
}

voidFunc(1,2);
voidFunc(1);
voidFunc();



const minius1 =function minius2(a,b)
{
    return a-b;
};

const minius3 = function (a,b){
    return a-b;
};
//箭头函数
const minius4 =(a,b)=>{
    return a-b;
}
const minius5=(a,b)=>a-b;




//函数作为参数

function binaryOperator(operand1,operand2,func)
{
    const res = func(operand1,operand2);
    console.log(res);
    return res;
}


binaryOperator(2,5,add);
binaryOperator(2,5,(a,b)=>a*b);
binaryOperator(2,5,(a,b)=>a/b);


const repeatSpace= num =>
{
    let res ='';
    while(num--)
    {
        res +='';

    }
    return res;
}
console.log(repeatSpace(4)+'空格');

const buildRepeatChar =char=>
{
    return num=>{
        let res ='';
        while(num--)
        {
            res += char;
        }
        return res;
    }
}

const repeatDot = buildRepeatChar('.');
console.log(repeatDot(4)+'点');
console.log(buildRepeatChar(' ')(4)+'空格');


const buildRepeatCharWithLog=char=>
{
    let count=0;
    return num=>{
        count++;
        console.log('第'+count+'次调用，重复字符为：'+char);
        let res='';
        while(num--)
        {
            res+=char;
        }
         return res;
    }
}
const char='?';
const count=100;
const repeatBar =buildRepeatCharWithLog('-');
const repeatExclamatory =buildRepeatCharWithLog('|');
//注意 只有返回值的函数可以访问 char 和count；
//注意函数里里面常量的作用域；
//函数与环境的关系，形成闭包；

console.log(repeatBar(4));
console.log(repeatExclamatory(4));
repeatBar(4);
*/

//对象：属性的集合，属性包含一个名和一个值；
let folder1={
    'size':2000,
    'name':'folder1',
    'subFile':['index.js'],
    'other object':null
};
console.log(typeof folder1,folder1);

//属性名要是合法的标志符,可以省略引号
let folder2={
    size:2000,
    name:'folder2',
    subFile:['index.js'],
    'other object':folder1
};
//访问对象的属性
console.log(folder2.size,folder2.name);
console.log(folder2['size'],folder2['name'],folder2['other object']);
//[]里面可以插入任意的有效的值和表达式

let sizeKey ='size';
console.log(folder2[sizeKey],folder2['na'+'me']);
//****链式调用
console.log(folder2["other object"].subFile[0]);



//如果访问的是一个不存在的属性，返回的是undefined；
console.log(folder2.data,folder2['any'+'string']);

//可以任意的修改属性的值；
folder2.size=folder2.size+100;
folder2['name']=null;
folder2.subFiles=[];
console.log(folder2.size,folder2.name,folder2.subFile);


//为对象增加属性：
folder2.createTime='2020-6-1';
folder2['modifyTime']='2020-6-15';
console.log(folder2);

//直接写对象字面值的时候，希望属性名是计算出来的，而不是固定的
//标识符 --不能以数字开头




//简要的写法
const year =2020;
const month =6;
console.log({
    year,
    month,
    print(){
        console.log(year+'-'+month);
    }
})


//遍历对象的所有属性
const student={
    name:'wang',
    age:'20',
    interests:['xxx','xxx'],
};
console.log(Object.keys(student));


for(const key in student)
{
    console.log(key,student[key]);
}


//判断对象是否包含某一属性，如
console.log('classmate' in student,'teacher' in student);


//属性的删除
delete student.teacher;
console.log('classmate' in student,'teacher' in student);


//对象的引用
const emptyObj1={};
const emptyObj2={};
console.log(emptyObj1!==emptyObj2);
const emptyObj3=emptyObj1;
console.log(emptyObj1===emptyObj3);