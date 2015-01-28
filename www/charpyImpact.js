<!--
function c_absorbed(){
	result=W*g*R*(Math.cos(beta/180*Math.PI)-Math.cos(alpha/180*Math.PI))-L;
}

function calculation(){
	alpha=parseFloat(document.form1.alpha.value);
	beta=parseFloat(document.form1.beta.value);
	R=parseFloat(document.form1.R.value);
	L=parseFloat(document.form1.L.value);
	W=parseFloat(document.form1.W.value);
	g=parseFloat(document.form1.g.value);
	if(isNaN(alpha) || alpha<0){alpha=0};
	if(isNaN(beta) || beta<0){beta=0};
	if(isNaN(R) || R<0){R=0};
	if(isNaN(L) || L<0){L=0};
	if(isNaN(W) || W<0){W=0};
	if(isNaN(g) || g<0){g=0};
	orig_beta=beta;
	c_absorbed();
	orig_result=result;
	if(W!=0 && beta<=alpha && R!=0 && alpha!=0 && alpha<=180){
		error=0;
		document.form2.result.value=orig_result;
		beta=0;
		c_absorbed();
		e=0;
		result=Math.ceil(result);
		do{
			buf=result/Math.pow(10,e);
			e=e+1;
		}while(1<=buf);
		result_beta0=Math.ceil(result/Math.pow(10,(e-2)))*Math.pow(10,(e-2));
		beta=orig_beta;
	}
	else{
		error=1;
		window.alert("Input Error");
	}
	
	if(error==0){
	//graphtitle=""+".";	
	$(document).ready(function(){
		var graphData01 = [];
		var graphData02 = [];
		graphData02.push([orig_beta, orig_result]); 		
		start=0;
		end=alpha;
		step=(end-start)/100;		
		for(beta=start; beta<end; beta=beta+step){
			beta=Math.round(Math.floor(beta*Math.pow(10,7))/10)/Math.pow(10,6);
			c_absorbed();
			graphData01.push([beta, result]); 
		}		
		var plot01 = $.jqplot('chart', [graphData01,graphData02], 
			{ 
//				title: graphtitle, 
				seriesDefaults: {
					rendererOptions: {
						smooth: true
					}
				},
				series:[ 
					{
						lineWidth:1 ,
						showLine:true,
						markerOptions:{show: false},
						label:'Absorbed Energy'
					},
					{
						lineWidth:1 ,
						showLine:false,
						markerOptions:{show: true},
						label:'Result'
					}
				],
				axes:{
					xaxis:{
						label:'β(°)',
						min: 0,
						max: alpha
					},
					yaxis:{
						label:'E(J)',
						min: 0//,
						//max: result_beta0
					}
				},
				legend: {
					show: true,
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