<!--
//////4次方程式/////
function c_cal01(){
	y=orig_a*Math.pow(x,4)+orig_b*Math.pow(x,3)+orig_c*Math.pow(x,2)+orig_d*x+orig_e;
}
//////4次方程式/////

//////3次方程式/////
function c_p(){
	p=1/3*(3*c/a-Math.pow(b,2)/Math.pow(a,2));
}

function c_q(){
	q=1/27*(2*Math.pow(b,3)/Math.pow(a,3)-9*b*c/Math.pow(a,2)+27*d/a);
}

function c_D(){
	D=Math.pow(p/3,3)+Math.pow(q/2,2);
}

function c_y_large(){
	if(0<=(-1*q/2+Math.pow(D,1/2))){
		u=Math.pow(-1*q/2+Math.pow(D,1/2),1/3);
	}else{
		u=-1*Math.pow(q/2-Math.pow(D,1/2),1/3);
	}
	if(0<=(-1*q/2-Math.pow(D,1/2))){
		v=Math.pow(-1*q/2-Math.pow(D,1/2),1/3);
	}else{
		v=-1*Math.pow(q/2+Math.pow(D,1/2),1/3);
	}
	y1=u+v;
	x1=y1-b/(3*a);
}

function c_y_equal(){
	if(0<=(-1*q/2)){
		u=Math.pow(-1*q/2,1/3);
	}else{
		u=-1*Math.pow(q/2,1/3);
	}
	if(0<=(-1*q/2)){
		v=Math.pow(-1*q/2,1/3);
	}else{
		v=-1*Math.pow(q/2,1/3);
	}
	y1=u+v;
	x1=y1-b/(3*a);
}

function c_y_small(){
	phi=Math.acos(-1*q/2*Math.pow(Math.abs(p)/3,-3/2));
	y1=2*Math.pow(Math.abs(p)/3,1/2)*Math.cos(phi/3);
	x1=y1-b/(3*a);
}
//////3次方程式/////

//////2次方程式/////
function c_x12(){
	if(0<=hantei){
		x1_real=(-1*b+Math.pow(Math.pow(b,2)-4*a*c,1/2))/(2*a);
		x2_real=(-1*b-Math.pow(Math.pow(b,2)-4*a*c,1/2))/(2*a);
		x1_imag=0;
		x2_imag=0;
	}else{
		x1_real=(-1*b)/(2*a);
		x2_real=(-1*b)/(2*a);
		x1_imag=Math.pow(Math.abs(Math.pow(b,2)-4*a*c),1/2)/(2*a);
		x2_imag=Math.pow(Math.abs(Math.pow(b,2)-4*a*c),1/2)/(2*a);
	}
}
//////2次方程式/////

function calculation(){
//////Step1//////
	x=parseFloat(document.form1.x.value);
	a=parseFloat(document.form1.a.value);
	b=parseFloat(document.form1.b.value);
	c=parseFloat(document.form1.c.value);
	d=parseFloat(document.form1.d.value);
	e=parseFloat(document.form1.e.value);
	if(isNaN(x)){x=0;}
	if(isNaN(a)){a=0;}
	if(isNaN(b)){b=0;}
	if(isNaN(c)){c=0;}
	if(isNaN(d)){d=0;}
	if(isNaN(e)){e=0;}
	p=(-3*Math.pow(b,2)+8*a*c)/(8*Math.pow(a,2));
	q=(Math.pow(b,3)-4*a*b*c+8*Math.pow(a,2)*d)/(8*Math.pow(a,3));
	r=(-3*Math.pow(b,4)+16*a*Math.pow(b,2)*c-64*Math.pow(a,2)*b*d+256*Math.pow(a,3)*e)/(256*Math.pow(a,4));
	orig_a=a;orig_b=b;orig_c=c;orig_d=d;orig_e=e;orig_p=p;orig_q=q;orig_r=r;orig_x=x;
	q0_hantei=Math.pow(p,2)-4*r;
	if(q==0){
		if(0<=q0_hantei){
			y2=1/2*(-1*p+Math.pow(Math.pow(p,2)-4*r,1/2));
			if(0<=y2){
				x01=(Math.pow(Math.abs(y2),1/2)-orig_b/(4*orig_a)).toExponential(4);
				x02=(-1*Math.pow(Math.abs(y2),1/2)-orig_b/(4*orig_a)).toExponential(4);
				graph_x1=x01;
				graph_x2=x02;
			}else{
				x01=(-1*orig_b/(4*orig_a)).toExponential(4)+"+i("+(Math.pow(Math.abs(y2),1/2)).toExponential(4)+")";
				x02=(-1*orig_b/(4*orig_a)).toExponential(4)+"-i("+(Math.pow(Math.abs(y2),1/2)).toExponential(4)+")";
				graph_x1=-1*orig_b/(4*orig_a);
				graph_x2=-1*orig_b/(4*orig_a);
				x12=1;
			}
			y2=1/2*(-1*p-Math.pow(Math.pow(p,2)-4*r,1/2));
			if(0<=y2){
				x03=(Math.pow(Math.abs(y2),1/2)-orig_b/(4*orig_a)).toExponential(4);
				x04=(-1*Math.pow(Math.abs(y2),1/2)-orig_b/(4*orig_a)).toExponential(4);
				graph_x3=x03;
				graph_x4=x04;
			}else{
				x03=(-1*orig_b/(4*orig_a)).toExponential(4)+"+i("+(Math.pow(Math.abs(y2),1/2)).toExponential(4)+")";
				x04=(-1*orig_b/(4*orig_a)).toExponential(4)+"-i("+(Math.pow(Math.abs(y2),1/2)).toExponential(4)+")";
				graph_x3=-1*orig_b/(4*orig_a);
				graph_x4=-1*orig_b/(4*orig_a);
				x34=1;
			}
		}else{
			//y=√(-p+√(p^2-4r))/2
			x0=-1/2*p;
			y0=1/2*Math.pow(Math.abs(Math.pow(p,2)-4*r),1/2);
			real=Math.pow((Math.pow(Math.pow(x0,2)+Math.pow(y0,2),1/2)+x0)/2,1/2);
			imag=y0/Math.abs(y0)*Math.pow((Math.pow(Math.pow(x0,2)+Math.pow(y0,2),1/2)-x0)/2,1/2);
			x01=(real-orig_b/(4*orig_a)).toExponential(4)+"+i("+imag.toExponential(4)+")";
			x02=(-1*real-orig_b/(4*orig_a)).toExponential(4)+"-i("+imag.toExponential(4)+")";
			x12=1;
			graph_x1=(real-orig_b/(4*orig_a));
			graph_x2=(-1*real-orig_b/(4*orig_a));
			//y=√(-p-√(p^2-4r))/2
			x0=-1/2*p;
			y0=-1/2*Math.pow(Math.abs(Math.pow(p,2)-4*r),1/2);
			real=Math.pow((Math.pow(Math.pow(x0,2)+Math.pow(y0,2),1/2)+x0)/2,1/2);
			imag=y0/Math.abs(y0)*Math.pow((Math.pow(Math.pow(x0,2)+Math.pow(y0,2),1/2)-x0)/2,1/2);
			x03=(real-orig_b/(4*orig_a)).toExponential(4)+"+i("+imag.toExponential(4)+")";
			x04=(-1*real-orig_b/(4*orig_a)).toExponential(4)+"-i("+imag.toExponential(4)+")";
			x34=1;
			graph_x3=(real-orig_b/(4*orig_a));
			graph_x4=(-1*real-orig_b/(4*orig_a));
		}
	}else{
		//////Step2//////
		a=1;b=-1*p;c=-4*r;d=4*r*p-Math.pow(q,2);
		c_p(); //func
		c_q(); //func
		c_D(); //func
		if(D<0){
			c_y_small(); //func
		}else
		if(D==0){
			c_y_equal(); //func
		}else{
			c_y_large(); //func
		}
		z1=x1;
		//////Step3//////
		a=1;
		b=-1*Math.pow(z1-orig_p,1/2);
		c=z1/2-Math.pow(z1-orig_p,1/2)*(-1*orig_q/(2*(z1-orig_p)));
		hantei=Math.pow(b,2)-4*a*c;
		x12=0;
		x34=0;
		c_x12();
		if(0<=hantei){
			x01=(x1_real-orig_b/(4*orig_a)).toExponential(4);
			x02=(x2_real-orig_b/(4*orig_a)).toExponential(4);
		}else{
			x01=(x1_real-orig_b/(4*orig_a)).toExponential(4)+"+i("+x1_imag.toExponential(4)+")";
			x02=(x2_real-orig_b/(4*orig_a)).toExponential(4)+"-i("+x2_imag.toExponential(4)+")";
			x12=1;
		}
		graph_x1=x1_real-orig_b/(4*orig_a);
		graph_x2=x2_real-orig_b/(4*orig_a);
		//////////
		a=1;
		b=-1*(-1*Math.pow(z1-orig_p,1/2));
		c=z1/2-(-1*Math.pow(z1-orig_p,1/2))*(-1*orig_q/(2*(z1-orig_p)));
		hantei=Math.pow(b,2)-4*a*c;
		c_x12();
		if(0<=hantei){
			x03=(x1_real-orig_b/(4*orig_a)).toExponential(4);
			x04=(x2_real-orig_b/(4*orig_a)).toExponential(4);
		}else{
			x03=(x1_real-orig_b/(4*orig_a)).toExponential(4)+"+i("+x1_imag.toExponential(4)+")";
			x04=(x2_real-orig_b/(4*orig_a)).toExponential(4)+"-i("+x2_imag.toExponential(4)+")";
			x34=1;
		}
		graph_x3=x1_real-orig_b/(4*orig_a);
		graph_x4=x2_real-orig_b/(4*orig_a);
	}
	x=orig_x;
	c_cal01(); //func
	orig_y=y;
	result();  //func
	graph01();
}

function result(){
	error=0;
	if(0!=orig_a){
		document.form2.x1.value=x01;
		document.form2.x2.value=x02;
		document.form2.x3.value=x03;
		document.form2.x4.value=x04;
		document.form2.y.value=y;
	}else{
		error=1;
		document.form2.x1.value="0≠a";
		document.form2.x2.value="0≠a";
		document.form2.x3.value="0≠a";
		document.form2.x4.value="0≠a";
		document.form2.y.value="0≠a";
	}
}

function graph01(){
	if(error==0){
		graphtitle="y=("+orig_a+")*x^4+("+orig_b+")*x^3+("+orig_c+")*x^2+("+orig_d+")*x+("+orig_e+")";	
		$(document).ready(function(){
		var graphData01 = [];
		start=Math.min(orig_x,graph_x1,graph_x2,graph_x3,graph_x4)-1;
		end=Math.max(orig_x,graph_x1,graph_x2,graph_x3,graph_x4)+1;
		step=(end-start)/200;
		for (x=start; x<end; x=x+step){ 
			c_cal01();	
			graphData01.push([x, y]); 
		}
		var plot01 = $.jqplot('chart', [graphData01], 
		{ 
		title: graphtitle, 
		series:[ 
			{
				lineWidth:1 ,
				showLine:true,
				markerOptions:{show: false}
			}
		]
		}
		);
		});
	}
}

function clearBox(chart){
    document.getElementById(chart).innerHTML="";
}
-->