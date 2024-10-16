import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categories: any = [];
  constructor(
    private router: Router,
    private categoriesService: CategoriesService
  ) {}

  navigateToCategory(id: string): void {
    this.router.navigate(['/quiz', id]);
  }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  navigateToQuiz(categoryId: string): void {
    this.router.navigate(['/quiz', categoryId]);
  }
}
