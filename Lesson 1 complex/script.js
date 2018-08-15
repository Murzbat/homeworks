var s=33721;
s=String(s) ;
console.log(typeof(s));
var n=s.length;
console.log(typeof(s));
console.log(n);
var multiply=1
for (var i=0; i<n; i++){
	multiply=+s.charAt(i)*multiply;
}

console.log(typeof(multiply));
console.log(multiply);

multiply=Math.pow(multiply,3);
multiply=String(multiply) ;

alert(multiply.substring(0,2));