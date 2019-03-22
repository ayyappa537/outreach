import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-showwillingness',
  templateUrl: './showwillingness.component.html',
  styleUrls: ['./showwillingness.component.css']
})
export class ShowwillingnessComponent implements OnInit {

  showwillingnessForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private _location:Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.showwillingnessForm = this.formBuilder.group({
      associateId: ['', Validators.required],
      associateName: ['', Validators.required],
      password: ['', Validators.required],
      dob: ['', Validators.required],
      role: ['', Validators.required]
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.showwillingnessForm.controls; }

  cancel() {
    this.router.navigateByUrl("login");
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    
    // stop here if form is invalid
    if (this.showwillingnessForm.invalid) {
      this.loading = false;
        return;
    }else{
      
      
      console.log("Success");
      
    }

    setTimeout('2000',0,this.setLoading(false));
  }

  setLoading(value:Boolean){
    this.loading = false;
  }

}
