import AreaChart from './AreaChart.js';
import StackedAreaChart from './StackedAreaChart.js';
let total_count;
let dataset;
let dataset1;

d3.csv("unemployment.csv", d3.autoType).then(d => {

        dataset = d;
        dataset1 = d;
        total_count = 0
        d.forEach(function(d) {
            total_count = 0
            total_count += d.Agriculture
            total_count += d['Wholesale and Retail Trade']
            total_count += d.Manufacturing
            total_count += d['Leisure and hospitality']
            total_count += d['Business services']
            total_count += d.Construction
            total_count += d['Education and Health']
            total_count += d.Government
            total_count += d.Finance
            total_count += d['Self-employed']
            total_count += d.Other
            total_count += d['Transportation and Utilities']
            total_count += d.Information
            total_count += d['Mining and Extraction']
            d['total'] = total_count 
            })

        const stackedChart =StackedAreaChart('.stacked_area_chart')
        stackedChart.update(dataset1)
        const areaChart = AreaChart('.area_chart')
        areaChart.update(dataset)

        areaChart.on("brushed", (range)=>{
            stackedAreaChart.filterByDate(range); 
        })
       
        });