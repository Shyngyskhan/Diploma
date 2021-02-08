// import { AreaSeries, DateTime, Inject, PeriodSelector, Chart, RangeNavigatorComponent, RangenavigatorSeriesCollectionDirective, RangenavigatorSeriesDirective, RangeTooltip, ChartComponent, ChartArea } from '@syncfusion/ej2-react-charts';
// import * as React from "react";
// import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
// import { bitCoinData } from './datasource';
// import RangeChart from './RangeChart';


// export default class PrintChart extends React.Component {
//     constructor() {
//         super(...arguments);
//         this.data = bitCoinData;
//         this.tooltip = { enable: true };
//         this.periodselector = {
//                     position: 'Bottom',
//                     height: 300,
//                     periods: [
//                         { text: '1M', interval: 1, intervalType: 'Months' },
//                         { text: '3M', interval: 3, intervalType: 'Months' },
//                         { text: '6M', interval: 6, intervalType: 'Months' }, { text: 'YTD' },
//                         { text: '1Y', interval: 1, intervalType: 'Years' },
//                         { text: '2Y', interval: 2, intervalType: 'Years', selected: true }, { text: 'All' }
//                     ]
//                 };
//     }
    
//     clickHandler() {
//         this.range.print();
//     }
    
//     render() {
//         return (<div> <ButtonComponent value='print' onClick={this.clickHandler.bind(this)}>Print</ButtonComponent>
//       <RangeNavigatorComponent id='charts' ref={g => this.range = g} valueType='DateTime' labelFormat='MMM-yy' value={[new Date('2019-01-01'), new Date('2020-05-31')]} tooltip={this.tooltip} periodSelectorSettings={this.periodselector}>
//         <Inject services={[AreaSeries, DateTime, RangeTooltip, PeriodSelector]}/>
//         <RangenavigatorSeriesCollectionDirective>
//           <RangenavigatorSeriesDirective dataSource={this.data} xName='x' yName='y' type='Area' width={2}/>
//         </RangenavigatorSeriesCollectionDirective>
//       </RangeNavigatorComponent>
//       <ChartComponent dataSource={this.data} xName='x' yName='y' type='Area' />
//       </div>);
//     }
// }

/**
 * Sample for DateTime Axis Range Navigator
 */
// import * as React from "react";
// import { RangeNavigatorComponent, AreaSeries, DateTime, Crosshair, Inject, SeriesCollectionDirective, SeriesDirective, RangeTooltip, RangenavigatorSeriesCollectionDirective, RangenavigatorSeriesDirective, ChartComponent, ChartAnnotation, SplineSeries, Tooltip } from '@syncfusion/ej2-react-charts';
// import { Browser } from '@syncfusion/ej2-base';
// import { stockData } from './stock-data';
// import { SampleBase } from './sample-base';
// export let zoomFactor;
// export let zoomPosition;
// export let themes = ['Material', 'Fabric', 'Bootstrap', 'Highcontrast'];
// export let borderColor = ['#00bdae', '#4472c4', '#a16ee5', '#79ECE4'];
// export let regionColor = ['rgba(0, 189, 174, 0.3)', 'rgba(68, 114, 196, 0.3)',
//     'rgba(161, 110, 229, 0.3)', 'rgba(121, 236, 228, 0.3)'];
// const SAMPLE_CSS = `
//     .control-fluid {
//         padding: 0px !important;
//     }
//     #days {
//         font-size: 15px;
//         font-style: normal;
//         font-family: "Segoe UI";
//         font-weight: 500;
//         text-anchor: middle;
//         transform: none;
//         opacity: 1;
//     }
//     #control-container {
//         padding: 0px !important;
//     }

//     #material-gradient-chart stop {
//         stop-color: #00bdae;
//     }

//     #fabric-gradient-chart stop {
//         stop-color: #4472c4;
//     }

//     #bootstrap-gradient-chart stop {
//         stop-color: #a16ee5;
//     }

//     #bootstrap4-gradient-chart stop {
//         stop-color: #a16ee5;
//     }

//     #highcontrast-gradient-chart stop {
//         stop-color: #79ECE4;
//     }

//     .chart-gradient stop[offset="0"] {
//         stop-opacity: 0.9;
//     }

//     .chart-gradient stop[offset="1"] {
//         stop-opacity: 0.3;
//     }
//     `;
// export default class PrintChart extends SampleBase {
//     render() {
//         return (<div className='control-pane'>
//                 <style>
//                     {SAMPLE_CSS}
//                 </style>
//                 <div className='control-section'>
//                 <div className="row" style={{ textAlign: "center" }}>
//                     <div id="days">EUR Exchange Rate from USD</div>
//                 </div>
//                  <div className="row">
//                     <RangeNavigatorComponent id='rangenavigator' ref={rangenavigator => this.rangenavigator1 = rangenavigator} style={{ textAlign: "center" }} labelPosition='Outside' valueType='DateTime' majorTickLines={{
//             width: 0
//         }} tooltip={{ enable: true, format: 'yyyy/MM/dd', displayMode: 'Always' }} value={[new Date('2011-01-01'), new Date('2013-12-31')]} width={Browser.isDevice ? '100%' : '80%'} load={this.rangeLoad.bind(this)} changed={this.changed.bind(this)}>
//                         <Inject services={[AreaSeries, DateTime, RangeTooltip]}/>
//                         <RangenavigatorSeriesCollectionDirective>
//                             <RangenavigatorSeriesDirective dataSource={stockData} xName='x' yName='y' type='Area' width={2} animation={{ enable: false }} border={{ width: 2 }}>
//                             </RangenavigatorSeriesDirective>
//                         </RangenavigatorSeriesCollectionDirective>
//                     </RangeNavigatorComponent>
//                     </div>
//                 <div className="row">
//                     <ChartComponent id='charts' ref={chart => this.chart1 = chart} style={{ textAlign: "center" }} primaryXAxis={{
//             valueType: 'DateTime',
//             edgeLabelPlacement: 'Shift',
//             majorGridLines: { width: 0 }
//         }} primaryYAxis={{
//             labelFormat: 'n1',
//             minimum: 0.6,
//             maximum: 1,
//             interval: 0.1,
//             majorTickLines: { width: 0 },
//             lineStyle: { width: 0 }
//         }} width={Browser.isDevice ? '100%' : '80%'} axisLabelRender={this.labelRender.bind(this)} load={this.chartLoad.bind(this)} height='350' chartArea={{ border: { width: 0 } }} tooltip={{
//             enable: true, shared: true
//         }} crosshair={{
//             enable: false,
//             lineType: 'None'
//         }}>
//                         <Inject services={[Crosshair, DateTime, SplineSeries, Tooltip, ChartAnnotation]}/>
//                         <SeriesCollectionDirective>
//                             <SeriesDirective name='Rate' type='Spline' dataSource={stockData} xName='x' yName='y' width={2}>
//                             </SeriesDirective>
//                         </SeriesCollectionDirective>
//                     </ChartComponent>
//                 </div>
//                 <svg style={{ height: '0' }}>
//                 <defs>
//                     <linearGradient id="material-gradient-chart" style={{ opacity: 0.75 }} className="chart-gradient" x1="0" x2="0" y1="0" y2="1">
//                         <stop offset="0"></stop>
//                         <stop offset="1"></stop>
//                     </linearGradient>
//                     <linearGradient id="fabric-gradient-chart" style={{ opacity: 0.75 }} className="chart-gradient" x1="0" x2="0" y1="0" y2="1">
//                         <stop offset="0"></stop>
//                         <stop offset="1"></stop>
//                     </linearGradient>
//                     <linearGradient id="bootstrap-gradient-chart" style={{ opacity: 0.75 }} className="chart-gradient" x1="0" x2="0" y1="0" y2="1">
//                         <stop offset="0"></stop>
//                         <stop offset="1"></stop>
//                     </linearGradient>
//                     <linearGradient id="bootstrap4-gradient-chart" style={{ opacity: 0.75 }} className="chart-gradient" x1="0" x2="0" y1="0" y2="1">
//                         <stop offset="0"></stop>
//                         <stop offset="1"></stop>
//                     </linearGradient>
//                     <linearGradient id="highcontrast-gradient-chart" style={{ opacity: 0.75 }} className="chart-gradient" x1="0" x2="0" y1="0" y2="1">
//                         <stop offset="0"></stop>
//                         <stop offset="1"></stop>
//                     </linearGradient>
//                 </defs>
//             </svg>
//                 </div>
//             </div>);
//     }
//     changed(args) {
//         if (this.chart1 && this.chartRendered) {
//             this.chart1.primaryXAxis.zoomFactor = args.zoomFactor;
//             this.chart1.primaryXAxis.zoomPosition = args.zoomPosition;
//             this.chart1.dataBind();
//         }
//         else {
//             zoomFactor = args.zoomFactor;
//             zoomPosition = args.zoomPosition;
//         }
//     }
//     ;
//     labelRender(args) {
//         if (args.axis.name === 'primaryYAxis') {
//             args.text = '€' + args.text;
//         }
//     }
//     chartLoad(args) {
//         args.chart.primaryXAxis.zoomFactor = zoomFactor;
//         args.chart.primaryXAxis.zoomPosition = zoomPosition;
//         let selectedTheme = window.location.hash.split('/')[1];
//         selectedTheme = selectedTheme ? selectedTheme : 'Material';
//         args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
//         this.chartRendered = true;
//     }
//     ;
//     rangeLoad(args) {
//         let selectedTheme = window.location.hash.split('/')[1];
//         selectedTheme = selectedTheme ? selectedTheme : 'Material';
//         args.rangeNavigator.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).
//             replace(/-dark/i, "Dark");
//         let rangeTheme = args.rangeNavigator.theme;
//         args.rangeNavigator.series[0].type = "Area";
//         args.rangeNavigator.series[0].fill = 'url(#' + rangeTheme.toLowerCase() + '-gradient-chart)';
//         args.rangeNavigator.series[0].border.color = borderColor[themes.indexOf(rangeTheme)];
//     }
//     ;
// }

import * as React from "react";
import { SplineAreaSeries, AreaSeries, ChartComponent, SeriesCollectionDirective, RangeNavigatorComponent, RangenavigatorSeriesCollectionDirective, DateTime, SeriesDirective, Inject, Tooltip, Export } from '@syncfusion/ej2-react-charts';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { PropertyPane } from './property-pane';
import { Browser } from '@syncfusion/ej2-base';
import { SampleBase } from './sample-base';
import { dataCollection } from './export-data';
import { bitCoinData } from './datasource'
export let zoomFactor;
export let zoomPosition;
export let dateTimeData = bitCoinData;
export let themes = ['Material', 'Fabric', 'Bootstrap', 'Highcontrast'];
// export let borderColor = ['rgb(29, 157, 233)'];
// export let regionColor = ['rgb(84, 195, 233)'];
export let borderColor = ['#FF4081', '#007897', '#428BCA', '#FFD939'];
export let regionColor = ['rgba(255, 64, 129, 0.3)', ' rgba(0, 120, 151, 0.3)',
    'rgba(66, 139, 202, 0.3)', 'rgba(255, 217, 57, 0.3)'];

const SAMPLE_CSS = `
        .control-fluid {
            padding: 0px !important;
        }
        #title{
            font-size: 15px;
            font-style: normal;
            font-family: "Segoe UI";
            font-weight: 500;
            text-anchor: middle;
            transform: none;
            opacity: 1;
        }
        #btn-control {
            width: 100%;
            text-align: center;
        }
        .e-export-icon::before {
            content: '\\e720';
        }
    
         .e-print-icon::before {
            content: '\\e34b';
        }`;
export default class PrintChart extends SampleBase {
    constructor() {
        super(...arguments);
        this.type = [
            { value: 'JPEG' },
            { value: 'PNG' },
            { value: 'SVG' },
            { value: 'PDF' }
        ];
    }
    render() {
        return (<div className='control-pane'>
                <style>
                    {SAMPLE_CSS}
                </style>
                <div className='control-section row'>
                <div className='col-md-9'>
                <div className="row" style={{ textAlign: "center" }}>
                        <div id="title">People count</div>
                </div>
                <div className="row">
                    <RangeNavigatorComponent id='rangenavigator' fill="rgb(84, 195, 233)" ref={rangenav => this.rangeInstance = rangenav} style={{ textAlign: "center" }} valueType='DateTime' intervalType='Months' labelFormat='MMM' enableGrouping={true} value={[new Date('2019-01-01'), new Date('2019-02-01')]} dataSource={dateTimeData} xName='x' yName='y' width={Browser.isDevice ? '100%' : '80%'} load={this.rangeLoad.bind(this)} changed={this.changed.bind(this)}>
                        <Inject services={[DateTime]}/>
                    </RangeNavigatorComponent>
                    </div>
                <div className="row">
                    <ChartComponent id='charts' ref={chart => this.chartInstance = chart} style={{ textAlign: "center" }} primaryXAxis={{
            valueType: 'DateTime',
            crosshairTooltip: { enable: true },
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
        }} primaryYAxis={{
            minimum: 1000, maximum: 21000, interval: 2000,
            title: 'Number of counted people',
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            labelFormat: '{value}'
        }} load={this.chartLoad.bind(this)} width={Browser.isDevice ? '100%' : '80%'} height='350' chartArea={{ border: { width: 0 } }} tooltip={{
            enable: true, shared: true
        }}>
                        <Inject services={[SplineAreaSeries, DateTime, Tooltip, Export, AreaSeries]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={dateTimeData} xName='x' yName='y' border={{ width: 2 }} animation={{ enable: false }} name='Count' type='SplineArea' width={2}>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
                </div>
                    <div className='col-md-3 property-section'>
                        <PropertyPane title='Properties'>
                            <table id='property' title='Properties' className='property-panel-table' style={{ width: '80%' }}>
                                <tr style={{ height: "50px" }}>
                                    <td style={{ width: "30%" }}>
                                        Export Type:
                            </td>
                                    <td style={{ width: "30%" }}>
                                        <DropDownListComponent width={60} id="etype" value="JPEG" ref={d => this.mode = d} dataSource={this.type} fields={{ text: 'value', value: 'value' }} placeholder="JPEG"/>
                                    </td>
                                </tr>
                                <tr style={{ height: "50px" }}>
                                    <td style={{ width: "40%" }}>
                                        File Name:
                            </td>
                                    <td style={{ width: "40%" }}>
                                        <div className="e-float-input" style={{ width: 70, 'margin-top': '0px' }}>
                                            <input type="text" defaultValue="Chart" id="fileName" style={{ "margin-left": "-10px" }}/>
                                        </div>
                                    </td>
                                </tr>
                                <tr style={{ height: '40px' }}>
                                    <td>
                                        <div id="btn-control" style={{ 'margin-left': '20px' }}>
                                            <ButtonComponent id="exporticon" onClick={this.exportClick.bind(this)} iconCss='e-icons e-export-icon' cssClass='e-flat' isPrimary={true}>Export</ButtonComponent>
                                        </div>
                                    </td>
                                </tr>
                                <tr style={{ height: '50px' }}>
                                    <td>
                                        <div id="btn-control" style={{ 'margin-left': '20px' }}>
                                            <ButtonComponent id="printicon" onClick={this.printClick.bind(this)} iconCss='e-icons e-print-icon' cssClass='e-flat' isPrimary={true}>Print</ButtonComponent>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </PropertyPane>
                    </div>
                </div>
            </div>);
    }
    changed(args) {
        if (this.chartInstance && this.chartRendered) {
            this.chartInstance.primaryXAxis.zoomFactor = args.zoomFactor;
            this.chartInstance.primaryXAxis.zoomPosition = args.zoomPosition;
            this.chartInstance.dataBind();
        }
        else {
            zoomFactor = args.zoomFactor;
            zoomPosition = args.zoomPosition;
        }
    }
    ;
    chartLoad(args) {
        args.chart.primaryXAxis.zoomFactor = zoomFactor;
        args.chart.primaryXAxis.zoomPosition = zoomPosition;
        let selectedTheme = window.location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
        let chartTheme = args.chart.theme;
        args.chart.series[0].fill = regionColor[themes.indexOf(chartTheme)];
        args.chart.series[0].border.color = borderColor[themes.indexOf(chartTheme)];
        this.chartRendered = true;
    }
    ;

    exportClick(e) {
        let fileName = document.getElementById('fileName').value;
        this.chartInstance.exportModule.export(this.mode.value, fileName, null, [this.rangeInstance, this.chartInstance]);
    }
    printClick(e) {
        this.rangeInstance.print(['rangenavigator', 'charts']);
    }

    rangeLoad(args) {
        let selectedTheme = window.location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : '';
        args.rangeNavigator.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).
            replace(/-dark/i, "Dark");
    }
}