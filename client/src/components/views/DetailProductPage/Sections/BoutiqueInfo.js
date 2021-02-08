import React, { useEffect, useState, Component } from 'react'
import { Button, Descriptions } from 'antd';
import Axios from 'axios'
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { SplineAreaSeries, AreaSeries, ChartComponent, SeriesCollectionDirective, RangeNavigatorComponent, RangenavigatorSeriesCollectionDirective, DateTime, SeriesDirective, Inject, Tooltip, Export } from '@syncfusion/ej2-react-charts';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { PropertyPane } from './property-pane';
import { Browser } from '@syncfusion/ej2-base';
import { SampleBase } from './sample-base';
import { dataCollection } from './export-data';
import { bitCoinData } from './datasource'


function BoutiqueInfo(props) {

    const [Boutique, setBoutique] = useState({})

    
    
    useEffect(() => {

        setBoutique(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }

    // const deleteBoutique(id) = () => {
    //     axios.delete('http://localhost:5000/boutiques/'+id)
    //       .then(response => { console.log(response.data)});
    
    //     this.setState({
    //       boutiques: this.state.boutiques.filter(el => el._id !== id)
    //     })
    // }

    const deleteBoutiqueHandler = () => {
        props.deleteBoutique(props.detail._id)
    }


    return (
        <div>
            <Descriptions title="Boutique Info">
                <Descriptions.Item label="Owner Name"> {Boutique.ownerName}</Descriptions.Item>
                <Descriptions.Item label="Owner Surname">{Boutique.ownerSurname}</Descriptions.Item>
                <Descriptions.Item label="Stuff number"> {Boutique.employeeNumber}</Descriptions.Item>
                <Descriptions.Item label="Description"> {Boutique.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />

            
          

            <PrintChart />
            
        </div>
    )
}

export default BoutiqueInfo


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
class PrintChart extends SampleBase {

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
