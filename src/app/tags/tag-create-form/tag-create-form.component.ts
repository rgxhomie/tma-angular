import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ITag, Tag } from '../tag.model';
import { TagsService } from '../../services/tags.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tag-create-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './tag-create-form.component.html',
  styleUrl: './tag-create-form.component.css'
})
export class TagCreateFormComponent {
  public newTag: ITag = new Tag('', '#000000');

  constructor (
    private tagService: TagsService,
    private router: Router  
  ) {}

  public addTag(): void {
    this.tagService.addTag(this.newTag);
    this.newTag = new Tag('', '#000000');
    this.navigateToProducts();
  }

  public navigateToProducts(): void {
    this.router.navigate(['']);
  }
}
