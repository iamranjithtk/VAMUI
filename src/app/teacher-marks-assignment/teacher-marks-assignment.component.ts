import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/service/teacher.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-teacher-marks-assignment',
  templateUrl: './teacher-marks-assignment.component.html',
  styleUrls: ['./teacher-marks-assignment.component.css']
})
export class TeacherMarksAssignmentComponent implements OnInit {
  topicId: string;
  isLoading = false;
  assignmentQuestionsList = [];

  constructor(private route: ActivatedRoute, public teacherService: TeacherService, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.topicId = params.get('topicId');
    });
    this.getAssignmentQuestions();
  }

  getAssignmentQuestions() {
    this.isLoading = true;
    this.teacherService.getQuestionsList(this.topicId.split('?')[1]).subscribe(res => {
      this.isLoading = false;
      this.assignmentQuestionsList = res;

    });
  }

  getData(i){
this.teacherService.updateMarks(i.id, {mark: i.mark}).subscribe(res => {
  this.toastr.success('Marks updated succesfully!', 'Success');

console.log(res, 'res');


},
error => {
  this.toastr.error("Some error occured", "Failed")
});
  }
}
