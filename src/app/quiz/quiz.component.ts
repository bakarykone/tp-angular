import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../shared/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  categoryId: string = '';
  isQuizFinished = this.quizService.isQuizFinished;
  playerName = '';

  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryId = params['categoryId'];
      this.quizService.getQuizContent(this.categoryId);
      this.playerName = params['playerName'];
    });
  }

  goToResultPage() {
    this.router.navigate(['/result']);
  }
}
