
//1、引入http模块
//const axios=require('axios');
const https=require('https');
//引入cheerio
const  cheerio=require('cheerio');
//const { find } = require('cheerio/lib/api/traversing');
let allData=[];
//2、创建请求
//'https://movie.douban.com/top250'
//'https://usafacts.org/visualizations/coronavirus-covid-19-spread-map'
//https://www.corona.help/country/united-states
https.get('https://www.worldometers.info/coronavirus/country/us/',
function(res){
	//分段返回的 自己拼接
	let html='';
	//有数据产生的时候 拼接
	res.on('data',function(chunk){
		html+=chunk;
	})
	//拼接完成
	res.on('end',function(){
		//console.log(html);  //yes
		//let htmlStr=Buffer.concat(html).toString('utf-8');
		let $=cheerio.load(html);
		//console.log($('.container:first').html());
		//console.log($('.container .row .col-md-8 .tab-content .tab-pane .usa_table_countries_div .table .total_row_usa odd>td'));
		//console.log($.html()); //yes
		//.tab-pane .usa_table_countries_div .table .even .mt_a
		//.attr('href')
		//console.log($('.tab-content .total_row_usa').html());
		//console.log($('.tab-content .total_row_usa').find('td').eq(2).html()); //yes
		let usaTotal=$('.tab-content .total_row_usa').find('td').eq(2).html();
		let usaDeath=$('.tab-content .total_row_usa').find('td').eq(4).html();
		console.log(usaTotal,usaDeath);
		console.log(typeof usaDeath);
		console.log("*************");
		let tmpStateName=null;
		let tmpTotalCases=null;
		let tmpTotalDeath=null;
		let tmpJson={
			name:null,
			totalCases:null,
			totalDeath:null
		}
		let i=0;
		$('.tab-content').find('tbody').find('tr').each(function(){
			if(i===0){
				tmpJson.name="USA Total";
				
			}else{
				tmpJson.name=$('.mt_a',this).html();
			}
			tmpTotalCases=($('td',this).eq(2).html()).replace(/\,/g,"");
			tmpJson.totalCases=Number(tmpTotalCases);
			tmpTotalDeath=($('td',this).eq(4).html()).replace(/\,/g,"");
			tmpTotalDeath=tmpTotalDeath.replace('\n','');
			tmpJson.totalDeath=Number(tmpTotalDeath);
			
			console.log(tmpJson);
			allData.push(tmpJson);
			//console.log(allData[i].name+":"+allData[i].totalCases+allData[i].totalDeath);
			i++;
			/*
			console.log($('.mt_a',this).html());
			console.log($('td',this).eq(2).html());
			console.log($('td',this).eq(4).html());
			*/
		})
		
	})
})

//console.log(allData);

