import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { DaoService } from 'src/fccore/service/dao.service'
import { LogService } from 'src/fccore/service/log.service'
import { CommonService } from 'src/fccore/service/common.service'
@Component({
  selector: 'bglistinfo',
  templateUrl: './bglistinfo.component.html',
  styles: [``]
})
export class BglistinfoComponent implements OnInit {
  // 获取列表数据
  pageList = []
  // 查询对象
  searchObj = {
    taskName: '',
    taskCode: ''
  }
  //查询接口
  listinfo: any
  constructor(
    public router: Router,
    public activedRoute: ActivatedRoute,
    public daoService: DaoService,
    public logService: LogService
  ) {}
  ngOnInit(): void {
    this.daoService.getBase("http://www.imooc.com/search/hotwords", {}).subscribe(result => {
      if (result['result'] === 0) {
        this.pageList = result['data']
      }
    })
    this.daoService.postFromApi('BUDGET/BGITEMNEW/LISTINFO', {}).subscribe(result => {
      if (result.CODE === '0') {
        this.listinfo = result.DATA
        this.logService.debug(this.listinfo)
      }
    })
    console.log(1)
    // 如何使用公共方法
    this.logService.debug(CommonService.getMilliseconds())
  }
  /**
   * 查询
   */
  search() {}
  /**
   * 重置
   */
  reset() {}
}
