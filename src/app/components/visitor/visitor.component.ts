import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {

  visitorForm: FormGroup
  submitted:boolean = false
  date= new Date()
  // date2 = ''
  constructor(
    private fb: FormBuilder,
    private datepipe: DatePipe
  ) { 
    // this.date = this.datepipe.transform(this.date, 'dd-mm-yyyy')
  }

  ngOnInit(): void {
    this.visitorForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      type: ['', [Validators.required]],
      person: ['', [Validators.required]],
      date: [''],
      timeEntry: ['', [Validators.required]],
      timeExit: ['', [Validators.required]],
    });
    console.log(this.date);
    
  }

  onSubmit(){
    this.submitted = true
    if(this.visitorForm.valid){
      // localStorage.setItem('name', this.visitorForm.value.name)
      // console.log("Success");
      // console.log(this.visitorForm.value.name);
      localStorage.setItem('name',this.visitorForm.value.name)
      localStorage.setItem('email',this.visitorForm.value.email)
      localStorage.setItem('type',this.visitorForm.value.type)
      localStorage.setItem('person',this.visitorForm.value.person)
      localStorage.setItem('date',this.visitorForm.value.date)
      localStorage.setItem('timeEntry',this.visitorForm.value.timeEntry)
      localStorage.setItem('timeExit',this.visitorForm.value.timeExit)
      
       
    }
    else{
      console.log("Error");
      console.log(this.visitorForm.errors);
      
      
    }
  }


}
