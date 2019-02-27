import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'app/core/service/ApiService';
import { SearchService } from 'app/core/service/Search';
import { OPTIONS_META } from './search-input.meta';
import { Options } from './class/options';
import { Option } from './class/option';
import { MatCheckbox } from '@angular/material';

@Component({
    selector: 'search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
    searchKey: string;                       // 搜搜关键字
    isShow = false;                          // 是否显示
    filterOptions: Array<Options> = [];      // 选项组


    @Output() searchChange: EventEmitter<string> = new EventEmitter();

    constructor(
        public apiService: ApiService,
        public search: SearchService,
    ) { }

    // 搜索map
    onSearch(str: string) {
        this.searchKey = str.replace(/["]/ig, '').replace(/(^\s*)|(\s*$)/ig, '');
        this.search.getSearch(this.searchKey);
        this.searchChange.emit(this.searchKey);
        this.hideOptions();
    }

    getFilterOptions() {
        const arr = Object.keys(OPTIONS_META);
        arr.forEach((value: string) => {
            const options = new Options(OPTIONS_META[value]);
            this.filterOptions.push(options);
        });
    }

    isSelect(event: MatCheckbox, option: Option) {
        option.isSelect(event.checked);
        this.changeOptions();
    }

    resetOptions() {
        this.filterOptions.forEach((options: Options) => options.reset());
        this.changeOptions();
    }

    changeOptions() {
        const arr = this.filterOptions.map((options: Options) => `&${options.key}`);
        const param = arr.join('');
        this.search.setParams(param);
    }

    showOptions = () => this.isShow = true;
    hideOptions = () => this.isShow = false;

    ngOnInit() {
        this.getFilterOptions();
        this.changeOptions();
    }

}
