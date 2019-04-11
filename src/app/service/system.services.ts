import { Injectable } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router"; 
import { ProvidersService } from 'src/core/service/providers.service';
import { ParentBusiness } from 'src/core/business/parent.business';
@Injectable({
    providedIn: 'root'
})
export class SystemService {
    constructor(public providers: ProvidersService,
        public activatedRoute: ActivatedRoute, public router: Router) {
        // 初始化此工程方法
        this.init();
    }
    /**
     * 初始化服务类库
     * @param providers 服务类库
     */
    init(): any {
        // 初始化angular相关的工具服务类
        // ParentBusiness.pInit(this.providers, this.activatedRoute, this.router);
    }

}