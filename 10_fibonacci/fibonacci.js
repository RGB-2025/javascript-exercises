const fibonacci=function(num){num=Number(num);return num>=0?num==0||num==1?num:fibonacci(num-1)+fibonacci(num-2):'OOPS'};

// Do not edit below this line
module.exports = fibonacci;
