import { Component, OnInit, Renderer } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    failure:boolean=false;
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private render:Renderer,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password);
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.loading = false;
        return;
    }else{
      if(this.loginForm.value.username == "admin"){
        this.router.navigateByUrl("adminPage");
      }else if(this.loginForm.value.username == "pmo"){
        this.router.navigateByUrl("pmoPage");
      }else if(this.loginForm.value.username == "poc"){
        this.router.navigateByUrl("pocPage");
      }else if(this.loginForm.value.username == "associate"){
        this.router.navigateByUrl("associatePage");
      }else{
        this.failure = true;
      }
    }

    setTimeout('2000',0,this.setLoading(false));
  }

  setLoading(value:Boolean){
    this.loading = false;
  }

  clickActive(event:any,path:any){
    event.preventDefault()
    this.render.setElementClass(event.target,"active",false);
    this.router.navigateByUrl("/"+path);
  }


}
