import { Component,OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'second';
  formData;

  data = "12333";
  ngOnInit() {

    this.formData = new FormGroup({
                          email: new FormControl("", Validators.compose([Validators.required,Validators.pattern("[^ @]*@[^ @]*")])),
                            paswd: new FormControl("", [Validators.required,Validators.minLength(8)]),
                            confpaswd: new FormControl("")
                       })


    
              // this.formData = new FormGroup({
              //             email: new FormControl("fvci2015@gmail.com"),
              //             paswd: new FormControl("helloangular"),
              //             confpaswd: new FormControl("helloangular")
              // });

    }

  submitData(data){   
        console.log("Entered Email id : " + data.email);
        console.log("Entered Password : " + data.paswd);
        console.log("Entered Confirm Password : " + data.cfmpaswd);
  }
}
