import { Component, OnInit, Input } from '@angular/core';
import { QuizService } from '../../shared/services/quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() categoryId!: string;
  quizContent: any[] = this.quizService.quizContent;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getQuizContent(this.categoryId);
  }
}
