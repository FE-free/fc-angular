import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShareService {
  // 切换项目名称
  switchProjectSubject: Subject<{ eventName: string; param: any }> = new Subject<{ eventName: string; param: any }>();
}
