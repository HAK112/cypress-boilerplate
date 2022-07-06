class Api_utility {
    tc_id = 0;
    tc_name="";


    integrationService(projectName){
        if(projectName.includes("LOG_001")){
            this.tc_id=285663;
            this.tc_name=projectName;
        }else if(projectName.includes("DASH_001")){
            this.tc_id=285673;
            this.tc_name=projectName;
        }
    }
}

export default new Api_utility();
