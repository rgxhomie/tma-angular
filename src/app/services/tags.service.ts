import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ITag } from '../tags/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  private readonly _tags$: BehaviorSubject<ITag[]> = new BehaviorSubject<ITag[]>([]);
  public readonly tags$ = this._tags$.asObservable();
  
  get tags(): ITag[] {
    return this._tags$.getValue();
  }

  private set tags(tags: ITag[]) {
    this._tags$.next(tags);
  }

  public setTags(tags: ITag[]): void {
    this.tags = tags;
  }

  public addTag(tag: ITag): void {
    this.tags = [...this.tags, tag];
  }
}
