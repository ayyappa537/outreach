import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import {saveAs} from 'file-saver';
import { HttpClient, HttpEventType } from '@angular/common/http';


const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Component({
  selector: 'app-createbulkevent',
  templateUrl: './createbulkevent.component.html',
  styleUrls: ['./createbulkevent.component.css']
})
export class CreatebulkeventComponent implements OnInit {

  failure:boolean=false;
  uploadedFiles:number=0;
  arrayBuffer:any;
  file:File;
  incomingfile(event) 
    {
    this.file= event.target.files[0]; 
    }
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  Upload() {
    let fileReader = new FileReader();
      fileReader.onload = (e) => {
        
          this.arrayBuffer = fileReader.result;
          var data = new Uint8Array(this.arrayBuffer);
          var arr = new Array();
          for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
          var bstr = arr.join("");
          var workbook = XLSX.read(bstr, {type:"binary"});
          var first_sheet_name = workbook.SheetNames[0];
          var worksheet = workbook.Sheets[first_sheet_name];
          console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
          this.uploadedFiles = XLSX.utils.sheet_to_json(worksheet,{raw:true}).length;
      }
      if(null != this.file && this.file.size>0){
        fileReader.readAsArrayBuffer(this.file);
        this.failure = false;
        return true;
      }else{
        this.failure = true;
      }
}



Download() {
    // You can change the file path in the assets folder
    let url = "src/app/createbulkevent/Create Future Events Bulk Upload.xlsx";
    let req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";
    req.onload =  (e) => {
        let data = new Uint8Array(req.response);
        //let workbook = XLSX.read(data, {type: "array"});
        let workbook = XLSX.read(req.response, {type: "array"});
        const excelBuffer: any = XLSX.writeFile(workbook,"Create Future Events Bulk Upload.xlsx", {bookType: 'xlsx', type: 'array'});
        // TO export the excel file
        console.log(excelBuffer);
       // this.saveAsExcelFile(excelBuffer, "Create Future Events Bulk Upload.xlsx")
    };
    req.send();
}




  public exportAsExcelFile(json: any[], excelFileName: string): void {
    
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    console.log('worksheet',worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    console.log(excelBuffer);
    
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

}
