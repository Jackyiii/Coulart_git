//create app.module
let mod=angular.module("ecoleAPP",[]);//数组数组里装着父亲模块
let path_language_ch="src/translates/content_chinese.json";
let path_language_fr="src/translates/content_francais.json";
let path_lan=[path_language_ch,path_language_fr];
let bool_languageSwtch=true;
mod.controller("ctrl_1",ctrl_header);
// mod.controller("ctrl_body",ctrl_body);
// mod.controller("ctrl_footer",ctrl_footer);
function ctrl_header($scope,$http){
	if(bool_languageSwtch){
		$http.get(path_lan[1]).then(dataf);
	}else{
		$http.get(path_lan[0]).then(dataf);
	}
	
	function dataf(response){
		//info config
    	$scope.language = response.data[0].language;
    	$scope.schoolName = response.data[0].schoolName;
    	$scope.vesion = response.data[0].vesion;
    	//contact
    	$scope.tel = response.data[1].tel;
    	$scope.email = response.data[1].email;
    	$scope.adresse = response.data[1].adresse;
    	//title
    	$scope.title = response.data[2].title;
    	$scope.sousTitle = response.data[2].sousTitle;
    	$scope.intro = response.data[2].intro;
    	//special
    	$scope.special=[
    		{
    			"special1_title":response.data[3].special1Title,
    			"special1_content":response.data[3].special1Content
    		},{
    			"special2_title":response.data[3].special2Title,
    			"special2_content":response.data[3].special2Content
    		},{
    			"special3_title":response.data[3].special3Title,
    			"special3_content":response.data[3].special3Content
    		}	
    	]   	
    }
};
