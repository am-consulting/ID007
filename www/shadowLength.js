<!-- 
function calcshadow(){
	targetDay[hourID]=new Date(year,month-1,day,hour,(hour-Math.floor(hour))*60,0);
	elapsedDays[hourID]=(targetDay[hourID]-baseDay)/(60*60*1000*24);
	theta0[hourID]=(elapsedDays[hourID])/days*2*Math.PI;
	theta0_degree[hourID]=theta0[hourID]/Math.PI*180;
	sin_theta0[hourID]=Math.sin(theta0[hourID]);
	sin_2theta0[hourID]=Math.sin(2*theta0[hourID]);
	sin_3theta0[hourID]=Math.sin(3*theta0[hourID]);
	cos_theta0[hourID]=Math.cos(theta0[hourID]);
	cos_2theta0[hourID]=Math.cos(2*theta0[hourID]);
	cos_3theta0[hourID]=Math.cos(3*theta0[hourID]);
	solarDeclination[hourID]=a+b*cos_theta0[hourID]+c*sin_theta0[hourID]+d*cos_2theta0[hourID]+e*sin_2theta0[hourID]+f*cos_3theta0[hourID]+g*sin_3theta0[hourID];
	solarDeclination_degree[hourID]=solarDeclination[hourID]/Math.PI*180;
	equationTime[hourID]=60*12*(h+i*cos_theta0[hourID]+j*sin_theta0[hourID]+k*cos_2theta0[hourID]+l*sin_2theta0[hourID])/Math.PI;//minutes
	hourAngle[hourID]=Math.PI*(hour+equationTime[hourID]/60+(longitude-utc)/15-12)/12;
	hourAngle_degree[hourID]=hourAngle[hourID]/Math.PI*180;
	sin_declination[hourID]=Math.sin(solarDeclination[hourID]);
	cos_declination[hourID]=Math.cos(solarDeclination[hourID]);
	sin_hourangle[hourID]=Math.sin(hourAngle[hourID]);
	cos_hourangle[hourID]=Math.cos(hourAngle[hourID]);
	solarElavation_rad[hourID]=Math.asin(sin_latitude*sin_declination[hourID]+cos_latitude*cos_declination[hourID]*cos_hourangle[hourID]);
	solarElavation_degree[hourID]=solarElavation_rad[hourID]/Math.PI*180;
	solarElavation_degree[hourID]=Math.round(Math.floor(solarElavation_degree[hourID]*1000)/10)/100;
	sin_solarElavation[hourID]=Math.sin(solarElavation_rad[hourID]);
	solarAzimuth_rad[hourID]=Math.atan(cos_latitude*cos_declination[hourID]*sin_hourangle[hourID]/(sin_latitude*sin_solarElavation[hourID]-sin_declination[hourID]));
	solarAzimuth_degree[hourID]=solarAzimuth_rad[hourID]/Math.PI*180;
	if(hourAngle[hourID]<0 && solarAzimuth_degree[hourID]>0){
		solarAzimuth_degree[hourID]=solarAzimuth_degree[hourID]-180;
	}
	else if(hourAngle[hourID]>0 && solarAzimuth_degree[hourID]<0){
		solarAzimuth_degree[hourID]=solarAzimuth_degree[hourID]+180;
	}
	solarAzimuth_degree[hourID]=Math.round(Math.floor(solarAzimuth_degree[hourID]*1000)/10)/100;
	shadowAzimuth[hourID]=solarAzimuth_degree[hourID]+180;
	if(solarAzimuth_degree[hourID]>0){
		shadowAzimuth[hourID]=solarAzimuth_degree[hourID]-180;
	}
	shadowLength[hourID]=Math.ceil((buildingHeight*1/Math.tan(solarElavation_rad[hourID]))*1000)/1000;
	shadowLength_vertical[hourID]=Math.ceil((Math.cos(solarAzimuth_rad[hourID])*shadowLength[hourID])*1000)/1000;
	if(solarAzimuth_degree[hourID]<-90 || solarAzimuth_degree[hourID]>90){
		shadowLength_vertical[hourID]=shadowLength_vertical[hourID]*-1;
	}
	shadowLength_horizontal[hourID]=Math.ceil((Math.sin(solarAzimuth_rad[hourID])*shadowLength[hourID])*1000)/1000;
	if(solarAzimuth_degree[hourID]<-90 || solarAzimuth_degree[hourID]>90){
		shadowLength_horizontal[hourID]=shadowLength_horizontal[hourID]*-1;
	}
}

function calculation(){ 
	clearBox('chart');
	calcResult="";
	latitude=parseFloat(document.form1.latitude.value);
	longitude=parseFloat(document.form1.longitude.value);
	utc=parseFloat(document.form1.utc.value);
	year=parseFloat(document.form1.year.value);
	month=parseFloat(document.form1.month.value);
	day=parseFloat(document.form1.day.value);
	buildingHeight=parseFloat(document.form1.buildingHeight.value);
	measuringSurface=parseFloat(document.form1.measuringSurface.value);
	if(isNaN(latitude)){
		latitude=0;
	}
	if(isNaN(longitude)){
		longitude=0;
	}
	if(isNaN(year)){
		year=2015;
	}
	if(isNaN(buildingHeight)){
		buildingHeight=1;
	}
	if(isNaN(measuringSurface)){
		measuringSurface=0;
	}
	buildingHeight=buildingHeight-measuringSurface;
	if(buildingHeight<0){
		buildingHeight=0;
	}
	days=365;
	if(year%4==0){
		days=366;
	}
	origLatitudeDegree=latitude;
	origLatitudeDegree=Math.round(Math.floor(origLatitudeDegree*10000)/10)/1000;
	origLongitudeDegree=longitude;
	origLongitudeDegree=Math.round(Math.floor(origLongitudeDegree*10000)/10)/1000;
	a=0.006918;
	b=-0.399912;
	c=0.070257;
	d=-0.006758;
	e=0.000907;
	f=-0.002697;
	g=0.001480;
	h=0.000075;
	i=0.001868;
	j=-0.032077;
	k=-0.014615;
	l=-0.040849;
	targetDay=new Array();
	elapsedDays=new Array();
	theta0=new Array();
	theta0_degree=new Array();
	sin_theta0=new Array();
	sin_2theta0=new Array();
	sin_3theta0=new Array();
	cos_theta0=new Array();
	cos_2theta0=new Array();
	cos_3theta0=new Array();
	solarDeclination=new Array();
	solarDeclination_degree=new Array();
	equationTime=new Array();
	hourAngle=new Array();
	hourAngle_degree=new Array();
	sin_declination=new Array();
	cos_declination=new Array();
	sin_hourangle=new Array();
	cos_hourangle=new Array();
	solarElavation_rad=new Array();
	sin_solarElavation=new Array();
	solarAzimuth_rad=new Array();
	solarElavation_degree=new Array();
	solarAzimuth_degree=new Array();
	shadowLength=new Array();
	shadowAzimuth=new Array();
	shadowLength_vertical=new Array();
	shadowLength_horizontal=new Array();
	baseDay=new Date(year,1-1,1,0,0,0);
	latitude=latitude/180*Math.PI;
	sin_latitude=Math.sin(latitude);
	cos_latitude=Math.cos(latitude);
	if(latitude==Math.PI/2 || latitude==Math.PI/-2){
		cos_latitude=0;
	}
	calcResult=calcResult+"Time(h:m) , α(°) , β(°) , L(m)\n";
	maxLength=0;
	minLength=0;
	graphData100 = [];
	graphData200 = [];
	cnt=1;
	for(hour=8; hour<=16; hour++){
		hourID=hour*10;
		hourID=Math.round(Math.floor(hourID*Math.pow(10,7)/10)/Math.pow(10,6));
		calcshadow();
		graphData100.push([shadowLength_horizontal[hourID], shadowLength_vertical[hourID]]); 
		graphData200.push([shadowLength_horizontal[hourID], shadowLength_vertical[hourID]]); 
		eval("graphData" + cnt + "= [];");
		eval("graphData" + cnt + ".push([0,0]);");
		eval("graphData" + cnt + ".push([shadowLength_horizontal[" + hourID + "], shadowLength_vertical["+ hourID +"]]);");
		if(hour-Math.floor(hour)==0){
			dispHour=hour+":00";
		}
		else{
			dispHour=Math.floor(hour)+":30";
		}
		if(hour<10){
			dispHour="0"+dispHour;
		}
		else{
			dispHour=dispHour;
		}
		calcResult=calcResult+dispHour+" , "+solarElavation_degree[hourID]+" , "+solarAzimuth_degree[hourID]+" , "+shadowLength[hourID]+"\n";
		if(maxLength<Math.abs(shadowLength_horizontal[hourID])){
			maxLength=Math.abs(shadowLength_horizontal[hourID]);
		}
		if(maxLength<Math.abs(shadowLength_vertical[hourID])){
			maxLength=Math.abs(shadowLength_vertical[hourID]);
		}
		cnt=cnt+1;
	}
	document.form2.calcResult.value=calcResult;
	graphtitle="φ(°)="+origLatitudeDegree+",λ(°)="+origLongitudeDegree+",l(m)="+buildingHeight
	graph01();
}

function graph01(){
	$(document).ready(function(){
	var plot01 = $.jqplot(
		'chart', 
		[graphData1,graphData2,graphData3,graphData4,graphData5,graphData6,graphData7,graphData8,graphData9,graphData100,graphData200], 
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
					label:'',
					color:'blue'
				},
				{
					lineWidth:1 ,
					showLine:true,
					markerOptions:{show: false},
					label:'',
					color:'blue'
				},
				{
					lineWidth:1 ,
					showLine:true,
					markerOptions:{show: false},
					label:'',
					color:'blue'
				},
				{
					lineWidth:1 ,
					showLine:true,
					markerOptions:{show: false},
					label:'',
					color:'blue'
				},
				{
					lineWidth:1 ,
					showLine:true,
					markerOptions:{show: false},
					label:'',
					color:'blue'
				},
				{
					lineWidth:1 ,
					showLine:true,
					markerOptions:{show: false},
					label:'',
					color:'blue'
				},
				{
					lineWidth:1 ,
					showLine:true,
					markerOptions:{show: false},
					label:'',
					color:'blue'
				},
				{
					lineWidth:1 ,
					showLine:true,
					markerOptions:{show: false},
					label:'',
					color:'blue'
				},
				{
					lineWidth:1 ,
					showLine:true,
					markerOptions:{show: false},
					label:'',
					color:'blue'
				},
				{
					lineWidth:1 ,
					showLine:true,
					markerOptions:{show: false},
					label:'',
					color:'blue'
				},
				{
					lineWidth:1 ,
					showLine:false,
					markerOptions:{show: true},
					pointLabels:{
						show: true,
						labels:['8', '9', '10', '11', '12', '13', '14', '15', '16']
					},
					label:''
				}
			],
			axes:{
				yaxis:{
					label:'m',
					min:-1*(Math.ceil(maxLength*1.1)),
					max:Math.ceil(maxLength*1.1)
				},
				xaxis:{
					label:'m',
					min:-1*(Math.ceil(maxLength*1.1)),
					max:Math.ceil(maxLength*1.1)
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

function clearBox(chart){
    document.getElementById(chart).innerHTML="";
} 
-->