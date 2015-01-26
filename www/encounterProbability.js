//全変数グローバル扱いであることに注意
<!-- 
function c_1(){
	encounterProbablility01=(1-Math.pow((1-1/returnPeriod01),period01))*100;
	if(returnPeriod01==0){
		encounterProbablility01=0;
	}
	return encounterProbablility01;
}

function c_2(){
	returnPeriod02=1/(1-Math.pow((1-encounterProbablility02/100),(1/period02)));
	if(period02==0){
		returnPeriod02=0;
	}
	return returnPeriod02;
}

function calculation01(){ 
	returnPeriod01=parseFloat(document.form1.returnPeriod01.value);
	if(isNaN(returnPeriod01)){
		returnPeriod01=0;
	}
	orig_returnPeriod01=returnPeriod01;
	period01=parseFloat(document.form1.period01.value);
	if(isNaN(period01)){
		period01=0;
	}
	orig_period01=period01;
	graph_type1=parseFloat(document.form1.graph_type1.value);
	c_1();
	orig_encounterProbablility01=encounterProbablility01;
	encounterProbablility01=Math.round(Math.floor(encounterProbablility01*Math.pow(10,4))/10)/Math.pow(10,3);
	document.form2.returnPeriod01.value=returnPeriod01;
	document.form2.period01.value=period01;
	document.form2.encounterProbablility01.value=encounterProbablility01;
 	switch(graph_type1){
	case 1:
	period01=orig_period01;
	graphtitle="検討期間(年)="+period01+".";	
	$(document).ready(function(){
		var graphData01 = [];
		for(returnPeriod01=1; returnPeriod01<=orig_returnPeriod01*2; returnPeriod01=returnPeriod01+2){
			returnPeriod01=Math.round(Math.floor(returnPeriod01*Math.pow(10,8))/10)/Math.pow(10,7);
			c_1();
			graphData01.push([returnPeriod01, encounterProbablility01]); 
		}
		var plot01 = $.jqplot('chart1', [graphData01], 
			{ 
				title: graphtitle, 
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
						label:'遭遇確率(%)'
					}
				],
				axes:{
					xaxis:{
						label:'再現期間(年)'
					},
					yaxis:{
						label:'遭遇確率(%)'
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
	break;
	case 2:
	returnPeriod01=orig_returnPeriod01;
	graphtitle="再現期間(年)="+returnPeriod01+".";	
	$(document).ready(function(){
		var graphData01 = [];
		for(period01=1; period01<=orig_period01*2; period01=period01+2){
			period01=Math.round(Math.floor(period01*Math.pow(10,8))/10)/Math.pow(10,7);
			c_1();
			graphData01.push([period01, encounterProbablility01]); 
		}
		var plot01 = $.jqplot('chart1', [graphData01], 
			{ 
				title: graphtitle, 
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
						label:'遭遇確率(%)'
					}
				],
				axes:{
					xaxis:{
						label:'検討期間(年)'
					},
					yaxis:{
						label:'遭遇確率(%)'
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
	break;
	}
}

function calculation02(){
	encounterProbablility02=parseFloat(document.form3.encounterProbablility02.value);
	if(isNaN(encounterProbablility02)){
		encounterProbablility02=0;
	}
	orig_encounterProbablility02=encounterProbablility02;
	period02=parseFloat(document.form3.period02.value);
	if(isNaN(period02)){
		period02=0;
	}
	orig_period02=period02;
	graph_type2=parseFloat(document.form3.graph_type2.value);
	c_2();
	orig_returnPeriod02=returnPeriod02;
	returnPeriod02=Math.round(Math.floor(returnPeriod02*Math.pow(10,4))/10)/Math.pow(10,3);
	document.form4.returnPeriod02.value=returnPeriod02;
	document.form4.period02.value=period02;
	document.form4.encounterProbablility02.value=encounterProbablility02;
	switch(graph_type2){
	case 1:
	period02=orig_period02;
	graphtitle="検討期間(年)="+period02+".";	
	$(document).ready(function(){
		var graphData02 = [];
		for(encounterProbablility02=1; encounterProbablility02<=100; encounterProbablility02=encounterProbablility02+1){
			encounterProbablility02=Math.round(Math.floor(encounterProbablility02*Math.pow(10,8))/10)/Math.pow(10,7);
			c_2();
			graphData02.push([encounterProbablility02, returnPeriod02]); 
		}
		var plot02 = $.jqplot('chart2', [graphData02], 
			{ 
				title: graphtitle, 
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
						label:'再現期間(年)'
					}
				],
				axes:{
					xaxis:{
						label:'遭遇確率(%)'
					},
					yaxis:{
						label:'再現期間(年)'
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
	break;
	case 2:
	encounterProbablility02=orig_encounterProbablility02;
	graphtitle="遭遇確率(%)="+encounterProbablility02+".";	
	$(document).ready(function(){
		var graphData02 = [];
		for(period02=1; period02<=orig_period02*2; period02=period02+2){
			period02=Math.round(Math.floor(period02*Math.pow(10,8))/10)/Math.pow(10,7);
			c_2();
			graphData02.push([period02, returnPeriod02]); 
		}		
		var plot02 = $.jqplot('chart2', [graphData02], 
			{ 
				title: graphtitle, 
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
						label:'再現期間(年)'
					}
				],
				axes:{
					xaxis:{
						label:'検討期間(年)'
					},
					yaxis:{
						label:'再現期間(年)'
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
	break;
	}
}
 
function clearBox(chart1){
    document.getElementById(chart1).innerHTML="";
} 
function clearBox(chart2){
    document.getElementById(chart2).innerHTML="";
} 
-->