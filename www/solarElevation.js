<!-- 
function calc_position(){
	if(loop==0){
		elapsedDays=(objectiveDate-baseDate)/(60*60*1000*24);
	}
	elapsedHours=hour+minute/60+second/3600;
	theta0=(elapsedDays)/days*2*Math.PI;
	theta0_degree=theta0/Math.PI*180;
	sin_theta0=Math.sin(theta0);
	sin_2theta0=Math.sin(2*theta0);
	sin_3theta0=Math.sin(3*theta0);
	cos_theta0=Math.cos(theta0);
	cos_2theta0=Math.cos(2*theta0);
	cos_3theta0=Math.cos(3*theta0);
	sunDeclination=a+b*cos_theta0+c*sin_theta0+d*cos_2theta0+e*sin_2theta0+f*cos_3theta0+g*sin_3theta0;
	sunDeclinationDegree=sunDeclination/Math.PI*180;
	equationTime=60*12*(h+i*cos_theta0+j*sin_theta0+k*cos_2theta0+l*sin_2theta0)/Math.PI;//minite
	hourAngle=Math.PI*(elapsedHours+equationTime/60+(longitude-utc)/15-12)/12;
	hourAngleDegree=hourAngle/Math.PI*180;
	latitude=orig_latitude/180*Math.PI;
	sin_latitude=Math.sin(latitude);
	sin_declination=Math.sin(sunDeclination);
	cos_latitude=Math.cos(latitude);
	if(latitude==Math.PI/2 || latitude==Math.PI/-2){
		cos_latitude=0;
	}
	cos_declination=Math.cos(sunDeclination);
	sin_hourangle=Math.sin(hourAngle);
	cos_hourangle=Math.cos(hourAngle);
	solarElevationRadian=Math.asin(sin_latitude*sin_declination+cos_latitude*cos_declination*cos_hourangle);
	sin_solarElevation=Math.sin(solarElevationRadian);
	solarOrientationRadian=Math.atan(cos_latitude*cos_declination*sin_hourangle/(sin_latitude*sin_solarElevation-sin_declination));
	solarElevationDegree=solarElevationRadian/Math.PI*180;
	solarOrientationDegree=solarOrientationRadian/Math.PI*180;
	if(hourAngle<0 && solarOrientationDegree>0){
		solarOrientationDegree=solarOrientationDegree-180;
	}
	else
	if(hourAngle>0 && solarOrientationDegree<0){
		solarOrientationDegree=solarOrientationDegree+180;
	}
	return sunDeclinationDegree,equationTime,solarElevationDegree,solarOrientationDegree;
}

function calculation(){ 
	loop=0;
	a=  0.006918;
	b= -0.399912;
	c=  0.070257;
	d= -0.006758;
	e=  0.000907;
	f= -0.002697;
	g=  0.001480;
	h=  0.000075;
	i=  0.001868;
	j= -0.032077;
	k= -0.014615;
	l= -0.040849;
	latitude=parseFloat(document.form1.latitude.value);
	longitude=parseFloat(document.form1.longitude.value);
	year=parseFloat(document.form1.year.value);
	month=parseFloat(document.form1.month.value);
	day=parseFloat(document.form1.day.value);
	hour=parseFloat(document.form1.hour.value);
	minute=parseFloat(document.form1.minute.value);
	second=parseFloat(document.form1.second.value);
	utc=parseFloat(document.form1.utc.value);
	days=365;
	if(year%4==0){
		days=366;
	}
	if(isNaN(latitude)){latitude=0;}
	if(isNaN(longitude)){longitude=0;}
	orig_latitude=latitude;
	orig_longitude=longitude;
	baseDate=new Date(year,1-1,1,0,0,0);
	objectiveDate=new Date(year,month-1,day,hour,minute,second);
	calc_position();
	sunDeclinationDegree=Math.round(Math.floor(sunDeclinationDegree*Math.pow(10,4))/10)/Math.pow(10,3);
	equationTime=Math.round(Math.floor(equationTime*Math.pow(10,4))/10)/Math.pow(10,3);
	hourAngleDegree=Math.round(Math.floor(hourAngleDegree*Math.pow(10,4))/10)/Math.pow(10,3);
	solarElevationDegree=Math.round(Math.floor(solarElevationDegree*Math.pow(10,4))/10)/Math.pow(10,3);
	solarOrientationDegree=Math.round(Math.floor(solarOrientationDegree*Math.pow(10,4))/10)/Math.pow(10,3);
	document.form2.elapsedDays.value=elapsedDays;
	document.form2.sunDeclinationDegree.value=sunDeclinationDegree;
	document.form2.equationTime.value=equationTime;
	document.form2.hourAngleDegree.value=hourAngleDegree;
	document.form2.solarElevationDegree.value=solarElevationDegree;
	document.form2.solarOrientationDegree.value=solarOrientationDegree;
	document.form3.latitude.value=orig_latitude;
	document.form3.longitude.value=longitude;
	document.form3.hour.value=hour;
	document.form3.minute.value=minute;
	document.form3.second.value=second;
	loop=1;
	label="labels:["; 
	data1="data:["; //sunDeclinationDegree
	data2="data:["; //equationTime
	data3="data:["; //solarElevationDegree
	data4="data:["; //solarOrientationDegree
	for(elapsedDays=0; elapsedDays<days; elapsedDays=elapsedDays+1*4){
		calc_position();
		if(elapsedDays!=0){
			label=label+",";
			data1=data1+",";
			data2=data2+",";
			data3=data3+",";
			data4=data4+",";
		}
		label=label+"\""+elapsedDays+"\"";
		data1=data1+sunDeclinationDegree;
		data2=data2+equationTime;
		data3=data3+solarElevationDegree;
		data4=data4+solarOrientationDegree;
	}
	label=label+"],";
	data1=data1+"]"; //sunDeclinationDegree
	data2=data2+"]"; //equationTime
	data3=data3+"]"; //solarElevationDegree
	data4=data4+"]"; //solarOrientationDegree
	//Chart.js
	chartData="";
	chartData=chartData+"var data={";
	chartData=chartData+label;
	chartData=chartData+"datasets:[";
	//data
	chartData=chartData+"{";
	chartData=chartData+"label:\"SunDeclination\",";
	chartData=chartData+"fillColor:\"rgba(160,82,45,0)\",";
	chartData=chartData+"strokeColor:\"rgba(160,82,45,1)\",";
	chartData=chartData+"pointColor:\"rgba(160,82,45,1)\",";
	chartData=chartData+"pointStrokeColor:\"#fff\",";
	chartData=chartData+"pointHighlightFill:\"#fff\",";
	chartData=chartData+"pointHighlightStroke:\"rgba(160,82,45,1)\",";
	chartData=chartData+data1;
	chartData=chartData+"},"
	//data
	chartData=chartData+"{";
	chartData=chartData+"label:\"EquationTime\",";
	chartData=chartData+"fillColor:\"rgba(0,100,0,0)\",";
	chartData=chartData+"strokeColor:\"rgba(0,100,0,1)\",";
	chartData=chartData+"pointColor:\"rgba(0,100,0,1)\",";
	chartData=chartData+"pointStrokeColor:\"#fff\",";
	chartData=chartData+"pointHighlightFill:\"#fff\",";
	chartData=chartData+"pointHighlightStroke:\"rgba(0,100,0,1)\",";
	chartData=chartData+data2;
	chartData=chartData+"},"
	//data
	chartData=chartData+"{";
	chartData=chartData+"label:\"SolarElevation\",";
	chartData=chartData+"fillColor:\"rgba(0,0,255,0)\",";
	chartData=chartData+"strokeColor:\"rgba(0,0,255,1)\",";
	chartData=chartData+"pointColor:\"rgba(0,0,255,1)\",";
	chartData=chartData+"pointStrokeColor:\"#fff\",";
	chartData=chartData+"pointHighlightFill:\"#fff\",";
	chartData=chartData+"pointHighlightStroke:\"rgba(0,0,255,1)\",";
	chartData=chartData+data3;
	chartData=chartData+"},"
	//data
	chartData=chartData+"{";
	chartData=chartData+"label:\"SolarAzimuth\",";
	chartData=chartData+"fillColor:\"rgba(220,20,60,0)\",";
	chartData=chartData+"strokeColor:\"rgba(220,20,60,1)\",";
	chartData=chartData+"pointColor:\"rgba(220,20,60,1)\",";
	chartData=chartData+"pointStrokeColor:\"#fff\",";
	chartData=chartData+"pointHighlightFill:\"#fff\",";
	chartData=chartData+"pointHighlightStroke:\"rgba(220,20,60,1)\",";
	chartData=chartData+data4;
	chartData=chartData+"}"
	//data
	chartData=chartData+"]"
	chartData=chartData+"};"
	eval(chartData);
	var ctx = document.getElementById("myLineChart").getContext("2d");
	window.myLine =new Chart(ctx).Line(data,{ 
		responsive: true
	//    scaleShowGridLines : true,
	//    scaleGridLineColor : "rgba(0,0,0,.05)",
	//    scaleGridLineWidth : 1,
	//    scaleShowHorizontalLines: true,
	//    scaleShowVerticalLines: true,
	//    bezierCurve : true,
	//    bezierCurveTension : 0.4,
	//    pointDot : true,
	//    pointDotRadius : 4,
	//    pointDotStrokeWidth : 1,
	//    pointHitDetectionRadius : 20,
	//    datasetStroke : true,
	//    datasetStrokeWidth : 2,
	//    datasetFill : true
	});
	//Chart.js
} 
-->