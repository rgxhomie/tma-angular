import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TagComponent } from '../tag/tag.component';
import { Observable } from 'rxjs';
import { ITag } from '../tag.model';
import { TagsService } from '../../services/tags.service';

@Component({
  selector: 'app-tag-management',
  standalone: true,
  imports: [
    CommonModule,
    TagComponent
  ],
  templateUrl: './tag-management.component.html',
  styleUrl: './tag-management.component.css'
})
export class TagManagementComponent {
  public tags$: Observable<ITag[]> = this.tagService.tags$;

  constructor(
    private tagService: TagsService
  ) {}
}
