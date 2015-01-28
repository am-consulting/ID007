<!--
//全変数グローバル扱いであることに注意
//C(z)
function c_fg(){
	fz=1/(Math.PI*z)-3/(Math.pow(Math.PI,3)*Math.pow(z,5))+105/(Math.pow(Math.PI,5)*Math.pow(z,9));
	gz=1/(Math.pow(Math.PI,2)*Math.pow(z,3))-15/(Math.pow(Math.PI,4)*Math.pow(z,7))+945/(Math.pow(Math.PI,6)*Math.pow(z,11));
}

function c_series_C(){
	C=0;
	series_c03=1;
	start=1;
	for(n=0; n<=50; n++){
		series_c01=Math.pow(-1,n)*Math.pow(Math.PI/2,2*n);
		series_c02=4*n+1;
		end=2*n;
		end=Math.round(Math.floor(end*Math.pow(10,7))/10)/Math.pow(10,6);
		for(i=start; i<=end; i++){
			series_c03=series_c03*i;
			series_c03=Math.round(Math.floor(series_c03*Math.pow(10,7))/10)/Math.pow(10,6);
		}
		start=end+1;
		start=Math.round(Math.floor(start*Math.pow(10,7))/10)/Math.pow(10,6);
		series_c04=Math.pow(z,4*n+1);
		series_c=series_c01/series_c03/series_c02*series_c04;
		C=C+series_c;
	}
	C=Math.round(Math.floor(C*Math.pow(10,7))/10)/Math.pow(10,6);
}

function c_app_C(){
	c_fg();
	C=1/2+fz*Math.sin(Math.PI/2*Math.pow(z,2))-gz*Math.cos(Math.PI/2*Math.pow(z,2));
	C=Math.round(Math.floor(C*Math.pow(10,7))/10)/Math.pow(10,6);
}

function c_5z_C(){
	C01=(0.3183099-0.0968/Math.pow(z,4))*Math.sin(Math.PI/2*Math.pow(z,2))/z;
	C02=(0.10132-0.154/Math.pow(z,4))*Math.cos(Math.PI/2*Math.pow(z,2))/Math.pow(z,3);
	C=0.5+C01-C02;
	C=Math.round(Math.floor(C*Math.pow(10,7))/10)/Math.pow(10,6);
}

//S(z)
function c_series_S(){
	S=0;
	series_s03=1;
	start=1;
	for(n=0; n<=50; n++){
		series_s01=Math.pow(-1,n)*Math.pow(Math.PI/2,2*n+1);
		series_s02=4*n+3;
		end=2*n+1;
		end=Math.round(Math.floor(end*Math.pow(10,7))/10)/Math.pow(10,6);
		for(i=start; i<=end; i++){
			series_s03=series_s03*i;
			series_s03=Math.round(Math.floor(series_s03*Math.pow(10,7))/10)/Math.pow(10,6);
		}
		start=end+1;
		start=Math.round(Math.floor(start*Math.pow(10,7))/10)/Math.pow(10,6);
		series_s04=Math.pow(z,4*n+3);
		series_s=series_s01/series_s03/series_s02*series_s04;
		S=S+series_s;
	}
	S=Math.round(Math.floor(S*Math.pow(10,7))/10)/Math.pow(10,6);
}

function c_app_S(){
	c_fg();
	S=1/2-fz*Math.cos(Math.PI/2*Math.pow(z,2))-gz*Math.sin(Math.PI/2*Math.pow(z,2));
	S=Math.round(Math.floor(S*Math.pow(10,7))/10)/Math.pow(10,6);
}

function c_5z_S(){
	S01=(0.3183099-0.0968/Math.pow(z,4))*Math.cos(Math.PI/2*Math.pow(z,2))/z;
	S02=(0.10132-0.154/Math.pow(z,4))*Math.sin(Math.PI/2*Math.pow(z,2))/Math.pow(z,3);
	S=0.5-S01-S02;
	S=Math.round(Math.floor(S*Math.pow(10,7))/10)/Math.pow(10,6);
}

function c_cal(){
	if(z<=4.1){
		c_series_C();
	}else if(z<=5){
		c_app_C();
	}else{
		c_5z_C();
	}
	if(z<=4.1){
		c_series_S();
	}
	else if(z<=5){
		c_app_S();
	}else{
		c_5z_S();
	}
}

function calculation(){
	z=parseFloat(document.form1.z.value);
	if(isNaN(z) || z<0){z=0};
	c_cal();
	orig_z=z;
	orig_C=C;
	orig_S=S;
	if(0<=z){
		error=0;
		document.form2.z.value=orig_z;
		document.form2.C.value=orig_C;
		document.form2.S.value=orig_S;
	}else{
		error=1;
	}
	if(error!=1){
	//graphtitle=""+".";	
	$(document).ready(function(){
		var graphData01 = [];
		var graphData02 = [0.5,0.5];
		max=0;
		min=10;
		loop_x=0;
		border=7;
		if(orig_z<=border){
			start=0;
			end=border;
		}else{
			start=z-2.5/z;
			end=z+2.5/z;
		}
		step=(end-start)/200;		
		for(z=start; z<end; z=z+step){
			z=Math.round(Math.floor(z*Math.pow(10,7))/10)/Math.pow(10,6);
			c_cal();
			max=Math.max(max,C,S);
			min=Math.min(min,C,S);
			if(z==orig_z){
				loop_x=1;
			}
			if(orig_z<z && loop_x==0 && start<orig_z && orig_z<end){
				graphData02.push([orig_C, orig_S]);
				loop_x=1;
			}
			graphData01.push([C,S]); 
		}
		if(orig_z>(z-step) && loop_x==0 && start<orig_z && orig_z<end){
			graphData02.push([orig_C, orig_S]);
		}		
		z=end;
		c_cal();
		graphData01.push([C,S]); 
		var plot01 = $.jqplot('chart', [graphData01,graphData02], 
		{ 
		//title: graphtitle, 
		seriesDefaults: {
			rendererOptions: {
				smooth: true
			}
		},
		series:[ 
			{
				lineWidth:1 ,
				showLine:false,
				markerOptions: {
					show: true,         
					style: 'circle',  
					lineWidth: 1,    
					size: 4          
				},
				label:'Absorbed Energy'
			},
 			{
				lineWidth:1 ,
				showLine:false,
				markerOptions:{
					show: true,         
					style: 'filledDiamond',  
					lineWidth: 1,     
					size: 4         
				},
				label:'Result'
			}
		],
		axes:{
			xaxis:{
			label:'C(z)',
			min: min,
			max: max
			},
			yaxis:{
			label:'S(z)',
			min: min,
			max: max
			}
		},
		legend: {
		show: false,
		location: 'ne',
		xoffset: 12,
		yoffset: 12
		}
		}
		);
		});			
	} 
}


function clearBox(chart){
    document.getElementById(chart).innerHTML="";
} 
-->