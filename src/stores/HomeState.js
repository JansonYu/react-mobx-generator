import { observable, computed, action } from 'mobx';
import { getJSON } from '../common/dataService';
import URLS from '../common/URLS';
export default class HomeState{
  
  @observable tableList ;

  constructor() {
  	this.tableList = [];
  }

  @computed get oddOrEven() {
    return this.numClicks  = 1;
  }

  @action getTableData() {
    getJSON(URLS.HOME_GET_TABLEDATA_URL, {})
    .then((json) => {
    	debugger
    	tableList = json.data
    })
  }
}
