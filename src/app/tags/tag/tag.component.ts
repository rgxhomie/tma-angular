import { Component, Input, OnInit } from '@angular/core';
import { ITag, Tag } from '../tag.model';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent implements OnInit {
  @Input() tag!: ITag;

  ngOnInit(): void {
    
  }

}
