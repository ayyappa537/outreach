import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateEventInfo } from './CreateEvent.model';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})
export class CreateeventComponent implements OnInit {
  createEventForm: FormGroup;
  createEventInfo:CreateEventInfo;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private _location:Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.createEventForm = this.formBuilder.group({
      location: ['', Validators.required],
      beneficiaryName: ['', Validators.required],
      councilName: ['', Validators.required],
      project: ['', Validators.required],
      eventTitle: ['', Validators.required],
      eventDesc: ['', Validators.required],
      eventStartDateTime: ['', Validators.required],
      eventEndDateTime: ['', Validators.required],
      volunteerCount: ['', Validators.required],
      pocId: ['', Validators.required],
      transportBoardingType: ['', Validators.required],
      transportBoardingPoint: ['', Validators.required],
      transportDropPoint: ['', Validators.required]
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.createEventForm.controls; }

  backClicked() {
    this._location.back();
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    
    // stop here if form is invalid
    if (this.createEventForm.invalid) {
      this.loading = false;
        return;
    }else{
      this.createEventInfo = new CreateEventInfo;
      this.createEventInfo.location = this.createEventForm.value.location;
      this.createEventInfo.beneficiaryName = this.createEventForm.value.beneficiaryName;
      this.createEventInfo.councilName = this.createEventForm.value.councilName;
      this.createEventInfo.project = this.createEventForm.value.project;
      this.createEventInfo.eventTitle = this.createEventForm.value.eventTitle;
      this.createEventInfo.eventDesc = this.createEventForm.value.eventDesc;
      this.createEventInfo.eventStartDateTime = this.createEventForm.value.eventStartDateTime;
      this.createEventInfo.eventEndDateTime = this.createEventForm.value.eventEndDateTime;
      this.createEventInfo.volunteerCount = this.createEventForm.value.volunteerCount;
      this.createEventInfo.pocId = this.createEventForm.value.pocId;
      this.createEventInfo.transportBoardingType = this.createEventForm.value.transportBoardingType;
      this.createEventInfo.transportBoardingPoint = this.createEventForm.value.transportBoardingPoint;
      this.createEventInfo.transportDropPoint = this.createEventForm.value.transportDropPoint;
      console.log("Success");
      console.log(this.createEventInfo);
    }

    setTimeout('2000',0,this.setLoading(false));
  }

  setLoading(value:Boolean){
    this.loading = false;
  }


}
